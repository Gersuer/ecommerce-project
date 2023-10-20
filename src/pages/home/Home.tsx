import Container from '../../components/container/Container'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../productContext/context'
const Home = () => {

  const { itens } = useContext(ProductContext);

  return (
    <Container>
      <div className={styles.home_container}>
        <div className={styles.title}>
          <span>AQUI VOCÊ ENCONTRA</span>
        </div>
        <div className={styles.grid}>
          {itens && itens?.amostra.map(item => (
            <div key={item.id} className={styles.item}>
              <span>{item.title}</span>
              <Link className={styles.zoom_container} to={`products/${item.type}`}>
                <img src={item.img} alt={item.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Home