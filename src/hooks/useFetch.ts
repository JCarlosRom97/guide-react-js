import { useCallback, useEffect, useRef, useState } from "react";
import { getCache, setCache } from "../utils/fetchCache";

type Status = 'idle' | 'loading' | 'success' | 'error';

type UseFetchOptions<T> = {
    fetcher: (signal: AbortSignal) => Promise<T>;
    cacheKey?: string;
    enabled?: boolean;
};

export function useFetch<T>({
    fetcher,
    cacheKey,
    enabled = true,
}: UseFetchOptions<T>) {

    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<Status>('idle');
    const [error, setError] = useState<string | null>(null);

    const abortRef = useRef<AbortController | null>(null);

    const execute = useCallback(async () => {
        if (!enabled) return;

        // Cache hit
        if (cacheKey) {
            const cached = getCache(cacheKey);
            if (cached) {
                setData(cached);
                setStatus('success');
                return;
            }
        }

        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        try {
            setStatus('loading');
            setError(null);

            const result = await fetcher(controller.signal);

            setData(result);
            setStatus('success');

            if (cacheKey) {
                setCache(cacheKey, result);
            }
        } catch (err: any) {
            if (err.name !== 'AbortError') {
                setError(err.message);
                setStatus('error');
            }
        }
    },[cacheKey, enabled, fetcher]);

    useEffect(() => {
        execute();

        return () => {
            abortRef.current?.abort();
        };
    }, [cacheKey, execute]);

    return {
        data,
        error,
        status,
        isLoading: status === 'loading',
        isError: status === 'error',
        isSuccess: status === 'success',
        refetch: execute,
    };
}