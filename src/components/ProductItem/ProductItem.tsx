import { memo } from "react";
import { Product } from "../../types/ListSorting";

type Props = {
    product: Product
}

export const ProductItem = memo(({ product }: Props) => {
    return (
        <div className="Item">
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <p>⭐ {product.rating}</p>
        </div>
    )
})