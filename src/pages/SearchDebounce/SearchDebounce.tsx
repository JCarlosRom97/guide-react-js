import './index.css';
import { ChangeEvent, useEffect, useState } from "react"

type Users = {
    id: number,
    name: string,
    email: string
}


export const SearchDebounce = () => {
    const [query, setQuery] = useState<string>("");
    const [users, setUsers] = useState<Users[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

    useEffect(() => {
        const controller = new AbortController();
        if (!query.trim()) {
            setUsers([]);
            return;
        }
        setLoading(true)
        const timeoutId = setTimeout(async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`, { signal: controller.signal });
                const data: Users[] = await response.json();
                setUsers(data);
                setError("");
            } catch (error) {
                if (error instanceof Error && error.name !== "AbortError") {
                    setError(error.message);
                }
            }finally{
                setLoading(false);
            }
        }, 500)
        return ()=>{
            clearTimeout(timeoutId);
            controller.abort();
        }
    }, [query])
    return (
        <div>
            <h3>Search Debounce</h3>
            <input className='inputSearch' type="text" name="query" id="query" value={query} onChange={handleInput} />
            {loading && (
                <p>Loading...</p>
            )}
            {error && (
                <p>{error}</p>
            )}
            <div className='userListContainer'>
                {users && users.map((user)=>(
                    <div className='userList' key={user.id}>{user.name}</div>
                ))}
            </div>
        </div>
    )
}