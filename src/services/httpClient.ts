export const fetchText = async (url: string, signal?: AbortSignal): Promise<string> => {
    const res = await fetch(url, { signal });
    if (!res.ok) {
        throw new Error(`HTTP Error:${res.status}`);
    }
    return res.text();
}