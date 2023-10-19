import styles from './Header.module.css'
import logo from '../../assets/svg/logo-color.svg'
import { IoMdSearch } from 'react-icons/io'
import { PiShoppingCart } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../productContext/context'



const Header = () => {
    const { itens } = useContext(ProductContext);
    if (itens) {
        console.log(itens);
    }
    return (
        <div className={styles.header_component}>
            <header className={styles.header}>
                <Link to='/' >
                    <img src={logo} alt="logo" />
                </Link>
                <div className={styles.input_container}>
                    <div className={styles.autocomplete}>
                        <input
                            type="text"
                            placeholder='Procurar'
                            className={styles.search_input}
                        />
                        <button className={styles.search}>
                            <IoMdSearch size={24} />
                        </button>
                    </div>
                    <div className={styles.options}>

                    </div>
                </div>

                <div className={styles.carrinho_container}>
                    {/* {itens && itens.length > 0 ? (
                        <span>{itens.length}</span>

                    ) : ('')} */}
                    <Link to='/carrinho'>
                        <PiShoppingCart className={styles.icon} size={35} />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header