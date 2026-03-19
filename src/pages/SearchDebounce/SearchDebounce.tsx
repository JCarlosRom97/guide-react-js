import './index.css';
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { getUsers } from '../../features/users/userSelector';
import { fetchUsers } from '../../features/users/userSlice';
import { emptyUsers } from '../../features/users/userSlice';
import { useDebounce } from '../../hooks/useDebounce';

export const SearchDebounce = () => {
    const [search, setSearch] = useState<string>("");
    const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), [setSearch]);
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error } = useSelector(getUsers);

    const debouncedValue = useDebounce(search, 500);

    useEffect(() => {
        const controller = new AbortController();
        if (!debouncedValue.trim()) {
            dispatch(emptyUsers());
            return;
        }

        dispatch(fetchUsers({ query: debouncedValue, signal: controller.signal }));

        return () => {
            controller.abort();
        }
    }, [dispatch, debouncedValue]);

    return (
        <div>
            <h3>Search Debounce</h3>
            <input className='inputSearch' type="text" name="query" id="query" value={search} onChange={handleInput} />
            {loading && (
                <h5>Loading...</h5>
            )}
            {error && (
                <h5>{error}</h5>
            )}
            <div className='horizontalContainer'>
                {users && users.map((user) => (
                    <div className='Item' key={user.id}>{user.name}</div>
                ))}
            </div>
        </div>
    )
}