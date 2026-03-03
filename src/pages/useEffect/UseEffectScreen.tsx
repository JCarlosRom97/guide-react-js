import { memo, useEffect, useState } from "react";
import { UserList } from "../../components/UserList";
export type User = {
    id: number,
    name: string
}
export const UseEffectScreen = () => {
    console.log("UseEffect Screen render");

    const [search, setSearch] = useState<string>("");
    const [users, setUsers] = useState<User[]>([]);

    const fakeFetchUsers = (search: string): Promise<User[]> => {
        console.log("Fetching users with search:", search);
        return new Promise((resolve) => {
            setTimeout(() => {
                const data: User[] = [
                    { id: 1, name: "Carlos" },
                    { id: 2, name: "Ana" },
                    { id: 3, name: "Luis" },
                    { id: 4, name: "Maria" },
                ];

                resolve(data.filter((u) => u.name.toLowerCase().includes(search)))
            }, 1000);
        })
    }

    useEffect(() => {
        let isMounted = true;
        fakeFetchUsers(search).then((data) => {
            if (isMounted) {
                setUsers(data);
            }
        })
        return () => {
            console.log("🔴 Cleanup ejecutado");
            isMounted = false;
        };
    }, [search])

    return (
        <div>
            <h1>Use Effects</h1>
            <h2>Users</h2>
            <SearchInput search={search} setSearch={setSearch} />
            <div className="horizontalContainer">
                <UserList users={users}/>
            </div>
        </div>
    )
};

const SearchInput = memo(function SearchInput({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  console.log("🔁 SearchInput render");

  useEffect(()=>{
    console.log('Search Input UseEffect');
  },[])

  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search user..."
    />
  );
});