import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles.bar}>
        <li>
          <Link to='products/bercos'>
            Berços
          </Link>
        </li>
        <li>
          <Link to='/products/almofadas'>
            Sala
          </Link>
        </li>
        <li>
          <Link to='products/camas'>
              Quarto
          </Link>
        </li>
        <li>Promoções</li>
        <li>Suporte</li>
      </ul>
    </div>
  )
}

export default Menu