import { createContext } from "react";
import { ProductType } from "../Types/ProductType";

type GetProduct ={
    product: ProductType[],
    detail: (p:ProductType) => void,
}

export const ProductContext = createContext<GetProduct | undefined>(undefined)

