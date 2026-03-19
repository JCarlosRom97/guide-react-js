import { useEffect, useState } from "react"
export const useDebounce = (value:string, delay:number):string =>{
    const [debouncedValue, setDebouncedValue] = useState<string>("");

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setDebouncedValue(value);
        },delay)

        return ()=>{
            clearTimeout(timeOut)
        }
    },[delay, setDebouncedValue, value]);

    return debouncedValue;
}