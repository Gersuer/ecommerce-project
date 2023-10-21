import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './Products.module.css'
import Cards from "../../components/cards/Cards"
import { useContext } from "react"
import { ProductContext } from "../../productContext/context"
import { ItemProps } from "../../productContext/context"

const Products = () => {
  const { itens, loading } = useContext(ProductContext)
  const [products, setProducts] = useState<ItemProps[]>();
  const params = useParams();

  console.log(params)

  useEffect(() => {
    const itemFilter = itens?.filter(item => item.type === params.id);
    setProducts(itemFilter);
  }, [params, itens]);

  return (
    <div className={styles.products}>
      {products && products.map(item => (
        <div className={styles.card_container} key={item.id}>
          <Cards
            id={item.id}
            img={item.img}
            name={item.name}
            preco={item.preco}
            qtd={item.qtd}
            total={item.total}
            title={item.title}
            type={item.type}
          />
        </div>
      ))}
      {loading && (
        <div>
          <h1>LOADING</h1>
        </div>
      )}
    </div>
  )
}

export default Products