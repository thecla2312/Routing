import { useState, useEffect } from "react";
export const useFetch = (url) => {
    const [data, setData] = useState ('')
    const [isLoading, setIsLoading] = useState(true);

    const fetchdata = async () => {
        const res = await fetch(url);
        const response = await res.json();
        setIsLoading(false);
        setData(response);
    };
    useEffect(() => {
        fetchdata()
    }, [])

    return {data, isLoading}
}