import { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

interface ChildrenProps {
    children: ReactNode
}

interface ItensProps {
    amostra: ItemProps[]
    almofadas?: ItemProps[]
    bercos?: ItemProps[]
    camas?: ItemProps[]
}
export interface ItemProps {
    id: string
    name: string
    preco: number
    qtd: string
    total: string
    img: string
    type: string
    title: string
}

interface ContextProps {
    itens?: ItensProps
    loading: boolean
    carrinho: ItemProps[]
    addCart: (item: ItemProps) => void
    totalPurchase: number
}

export const ProductContext = createContext({} as ContextProps);

function ProductsProvider({ children }: ChildrenProps) {
    const [itens, setItens] = useState<ItensProps>();
    const [loading, setLoading] = useState(false);
    const [carrinho, setCarrinho] = useState<ItemProps[]>([]);
    const [totalPurchase, setTotalPurchased] = useState<number>(0)

    useEffect(() => {
        let total = 0;
        carrinho.map(item => {
            total = total + Number(item.total);
        });
        setTotalPurchased(total);
    }, [carrinho])

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

    function addCart(item: ItemProps) {
        //Verificar se o item já foi adicionado.
        const indexItem = carrinho.findIndex(prod => prod.id === item.id);
        //Se o indexitem for diferente de -1 significa que o produto já existe, sendo assim, iremos apenas alterar as propriedades daquele tem.
        if (indexItem !== -1) {
            console.log(`A posição do item é ${indexItem}`)
            const carrinhoList = carrinho;
            carrinhoList[indexItem].qtd = (Number(carrinhoList[indexItem].qtd) + 1).toString();
            carrinhoList[indexItem].total = (Number(carrinhoList[indexItem].qtd) * Number(carrinhoList[indexItem].preco)).toString();
            setCarrinho(carrinhoList);
            console.log(carrinhoList)
            return
        }

        //Caso o valor de indexItem seja -1, significar que o item não existe e está sendo adicionado pela primeira vez.
        //É necessário usar métodos para alterar o tipo das variáveis para se adequar a tipagem estabelecida.
        const newItem = {
            id: item.id,
            name: item.name,
            preco: item.preco,
            qtd: "1",
            img: item.img,
            type: item.type,
            total: (item.preco).toString(),
            title: item.title
        }
        setCarrinho([...carrinho, newItem]);
    }


    return (
        <ProductContext.Provider
            value={{
                itens,
                loading,
                carrinho,
                addCart,
                totalPurchase
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsProvider