import { useEffect, useState } from "react";
import { User } from "../../types";
import { UserList } from "../../components/UserList";
import { Product } from "../../types";
import { ProductItem } from "../../components/ProductItem/ProductItem";

export const Async = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const fakeFetchProducts = (): Promise<Product[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data: Product[] = [{ id: 1, name: 'Refrigerator', price: 100, category: 'Home', rating: 10 }, { id: 2, name: 'Iphone', category: 'Technology', price: 600, rating: 9 }];
                resolve(data)
            }, 1000)
        });
    }

    const fakeFetchUsers = (): Promise<User[]> =>
        new Promise((resolve) => {
            setTimeout(() => {
                const data: User[] = [{ id: 1, name: 'Jose Carlos' }, { id: 2, name: 'Juan Carlos' }, { id: 3, name: 'Luis Carlos' }, { id: 4, name: 'Jose Juan' }];
                resolve(data);
            }, 1000)
        });

    useEffect(() => {
        async function loadData() {
            try {
                const [dataUser, dataProducts] = await Promise.all([
                    fakeFetchUsers(),
                    fakeFetchProducts()
                ])
                setUsers(dataUser);
                setProducts(dataProducts);
            } catch (error) {
                console.error(error);
            }
        }

        loadData();
    }, []);


    return (
        <>
            <h2>Async/Await Promises</h2>
            <h3>Users</h3>
            <div className="verticalContainer marginContainer">
                <UserList users={users} />
            </div>
            <h3>Products</h3>
            <div className="horizontalContainer">
                {products.map((p)=> <ProductItem product={p} />)}
            </div>
        </>
    )
}