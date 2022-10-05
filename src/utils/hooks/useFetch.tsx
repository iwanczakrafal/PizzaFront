import { useState, useEffect, useRef } from 'react';


export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    PATCH = 'PATCH',
}

const initOptions = {
    method: HttpMethod.GET,
    headers: {
        'content-type': 'application/json;charset=UTF-8',
    },
    body: {},
};



export const useFetch = (url = '', value = initOptions) => {
    const cache = useRef<any>({}); // pamieć podręczna żeby nie pobierać dwa razy tego samego
    const [address, setAddress] = useState<string>(url); // adress https
    const [status, setStatus] = useState<string>('idle'); // status określa co się dzieje czy dane sa pobierane/pobrane
    const [form, setForm] = useState(value); // formularz  z metodan nagłowkami i danymi do wysłania na backend
    const [data, setData] = useState();
    const fetchData = (url: string, value = initOptions) => {
        setAddress(url);
        setForm(value);
    };

    useEffect(() => {
        if (!address || !address.trim()) return;

        const fetchDataGet = async () => {
            setStatus('fetching');
            if (cache.current[address]) {
                const data = cache.current[address];
                setData(data);
                setStatus('fetched');
            } else {
                const response = await fetch(address, {
                    method: form.method,
                    credentials: 'include',
                    headers: form.headers,
                    body:
                        (form.method === HttpMethod.GET || form.method === HttpMethod.DELETE) ? null : JSON.stringify(form.body),
                });
                const data = await response.json();
                cache.current[address] = data; // set response in cache;
                setData(data);
                setStatus('fetched');
            }
        };
        fetchDataGet();
    }, [address, form.method]);
    return [data, status, fetchData, cache] as const;
};

