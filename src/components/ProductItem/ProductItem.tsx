import { memo } from "react";
import { Product } from "../../types";

type Props = {
    product: Product
}

export const ProductItem = memo(({ product }: Props) => {
    return (
        <div className="Item item--large">
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <p>⭐ {product.rating}</p>
        </div>
    )
})