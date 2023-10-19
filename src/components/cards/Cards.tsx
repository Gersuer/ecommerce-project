import { Link } from 'react-router-dom'
import styles from './Cards.module.css'
interface productProps {
    id: number,
    name: string,
    preco: number,
    qtd: string,
    total: string,
    img: string,
    type: string,
    title: string
}
const Cards = (produto: productProps) => {
    return (
        <div key={produto.id} className={styles.card}>
            <Link className={styles.link} to={`/details/${produto.id}`}>
                <img src={produto.img} alt={produto.name} />
                <div className={styles.product_info}>
                    <span>{produto.name}</span>
                    <span> Preço: R${produto.preco.toLocaleString('pt-br', {
                        style: 'curreny',
                        currency: 'BRL'
                    })} </span>
                </div>
                <div className={styles.btn}>
                    <button className={styles.buy_btn}>Comprar</button>
                </div>
            </Link>
        </div>
    )
}

export default Cards