// hook específico (opcional)
import { useFetch } from "./useFetch";
import { fetchText } from "../services/httpClient";

export const useFetchText = (url: string) => {
    return useFetch<string>({
        cacheKey: url,
        fetcher: (signal) => fetchText(url, signal),
    });
};