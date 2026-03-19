import './index.css';
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { getUsers } from '../../features/users/userSelector';
import { fetchUsers } from '../../features/users/userSlice';
import { emptyUsers } from '../../features/users/userSlice';

export const SearchDebounce = () => {
    const [query, setQuery] = useState<string>("");
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
    const dispatch = useDispatch<AppDispatch>();
    const {users, loading, error} = useSelector(getUsers);
    
    useEffect(() => {
        const controller = new AbortController();
        if (!query.trim()) {
            dispatch(emptyUsers());
            return;
        }
        const timeoutId = setTimeout(async () => {
           dispatch(fetchUsers(query));
        }, 500)
        return ()=>{
            clearTimeout(timeoutId);
            controller.abort();
        }
    }, [dispatch, query]);

    return (
        <div>
            <h3>Search Debounce</h3>
            <input className='inputSearch' type="text" name="query" id="query" value={query} onChange={handleInput} />
            {loading && (
                <h5>Loading...</h5>
            )}
            {error && (
                <h5>{error}</h5>
            )}
            <div className='horizontalContainer'>
                {users && users.map((user)=>(
                    <div className='Item' key={user.id}>{user.name}</div>
                ))}
            </div>
        </div>
    )
}