import styles from './Header.module.css'
import logo from '../../assets/svg/logo-color.svg'
import { IoMdSearch } from 'react-icons/io'
import { PiShoppingCart } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ProductContext } from '../../productContext/context'
import { useNavigate } from 'react-router-dom'



const Header = () => {
    const { carrinho } = useContext(ProductContext);
    const [searchItem, setSearchItem] = useState<string>('');
    const navigate = useNavigate()

    function handleSearch(item: string) {
        if (item === 'sala' || item === 'almofadas'){
            navigate(`products/almofadas`)
            return
        }
        else if(item === 'colchões' || item === 'camas' || item === 'quarto'){
            navigate(`products/camas`)
            return
        }
        else if(item === 'berços' || item === 'bercos' || item === 'criança'){
            navigate(`products/bercos`)
            return
        }
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
                            onChange={(e) => setSearchItem(e.target.value)}
                        />
                        <button
                            className={styles.search}
                            onClick={() => handleSearch(searchItem)}
                        >
                            <IoMdSearch size={24} />
                        </button>
                    </div>
                </div>

                <div className={styles.carrinho_container}>
                    {carrinho && carrinho.length > 0 ? (
                        <span>{carrinho.length}</span>

                    ) : ('')}
                    <Link to='/carrinho'>
                        <PiShoppingCart className={styles.icon} size={35} />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header