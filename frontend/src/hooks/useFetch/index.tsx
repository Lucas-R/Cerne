import { api } from "@/utils/axios";
import { useEffect, useState } from "react";

export default function useFetch({ url }: { url: string }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);

    async function handleFetch() {
        setIsLoading(true);
        try {
            const { data } = await api.get(url);
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleFetch();
    }, [url])

    return { data, error, isLoading };
}