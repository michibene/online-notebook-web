import { useEffect } from "react";
import { useState } from "react";

export function useLocalStorage<T>(key: string, initialState: T | (() => T)) {
    const [storageValue, setStorageValue] = useState<T>(() => {
        const jsonValue = sessionStorage.getItem(key);

        if (jsonValue === null) {
            if (typeof initialState === "function") {
                return (initialState as () => T)();
            } else {
                return initialState;
            }
        } else {
            return JSON.parse(jsonValue);
        }
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(storageValue));
    }, [storageValue, key]);

    return [storageValue, setStorageValue] as [T, typeof setStorageValue];
}