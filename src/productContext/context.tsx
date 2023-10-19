import { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

export interface ItemProps {
    id: number
    name: string
    preco: number
    qtd: string
    total: string
    img: string
    type: string
    title?: string
}

interface ChildrenProps {
    children: ReactNode
}

interface ItensProps {
    amostra: ItemProps[]
    almofadas: ItemProps[]
    bercos: ItemProps[]
    camas: ItemProps[]
}

interface ContextProps {
    itens?: ItensProps
    loading: boolean
}

export const ProductContext = createContext({} as ContextProps);

function ProductsProvider({ children }: ChildrenProps) {
    const [itens, setItens] = useState<ItensProps>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchItems() {
            setLoading(true)
            await axios.get("http://localhost:3000/produtos")
                .then(itens => {
                    setItens(itens.data)
                    setLoading(false)
                }).catch(err => {
                    console.log(err.message)
                })
        }
        fetchItems();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                itens,
                loading
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsProvider