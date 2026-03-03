import { useCallback, useMemo, useState } from "react";
import { useGenerateArray } from "../../hooks/useGenerateArray";
import './ListSorting.css';
import { ProductItem } from "../../components/ProductItem/ProductItem";
export const ListSorting = () => {
    const data = useGenerateArray(100);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState<"price" | "rating" | "none">("none");

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }, []);

    const filteredAndSorted = useMemo(() => {
        let filteredData = data;

        if (search.trim()) {
            filteredData = filteredData.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (category !== "All") {
            filteredData = filteredData.filter((p) => p.category === category)
        }

        if (sortBy !== "none") {
            if (sortBy === "price") {
                filteredData.sort((a, b) => a.price - b.price);
            } else if (sortBy === "rating") {
                filteredData.sort((a, b) => b.rating - a.rating);
            }
        }

        return filteredData;
    }, [data, search, category, sortBy])

    return (
        <>
            <h3>List Sorting</h3>
            <div className="containerListSorting">
                <div className="containerFilters">
                    <input type="text" value={search} onChange={handleSearch} />
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Tech">Tech</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Books">Books</option>
                        <option value="Sports">Sports</option>
                    </select>
                    <select onChange={(e) => setSortBy(e.target.value as any)}>
                        <option value="none">No sort</option>
                        <option value="price">Sort by Price</option>
                        <option value="rating">Sort by Rating</option>
                    </select>
                </div>
                <div className="containerProducts">
                    {filteredAndSorted.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </>
    )
}