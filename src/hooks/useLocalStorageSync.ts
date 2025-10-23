import { useEffect } from "react";

function useLocalStorageSync(store: any) {
    useEffect(() => {
        if (store !== null) {
            Object.keys(store).forEach(key => {
                localStorage.setItem(key, JSON.stringify(store[key]));
            })
        }
    }, [store]);
}

export default useLocalStorageSync;