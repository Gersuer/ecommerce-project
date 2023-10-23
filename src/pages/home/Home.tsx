import Container from '../../components/container/Container'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../productContext/context'
import HoverCarousel from 'hover-carousel'
interface ImageProps {
  img?: string
}
const Home = () => {

  const { menuItems, carousel } = useContext(ProductContext);
  const images: ImageProps[] = [];


  carousel?.map(item => {

    images.push(item.img)
  })
  return (
    <Container>
      <HoverCarousel images={images} />
      <div className={styles.home_container}>
        <div className={styles.title}>
          <span>AQUI VOCÊ ENCONTRA</span>
        </div>
        <div className={styles.grid}>
          {menuItems && menuItems?.map(item => (
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