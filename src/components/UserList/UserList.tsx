import { memo, useEffect } from "react";
import { User } from "../../types";

export const UserList = memo(({ users }: { users: User[] }) =>{
    console.log("🔁 UserList render");
    
    useEffect(() => {
        console.log('User List UseEffect');
    }, [])

    return (
        <>
            {users.map((u) => (
                <div key={u.id} className="Item item--xsmall">
                    <h4>{u.name}</h4>
                </div>
            ))}
        </>
    );
});