import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Menu from '../menu/Menu'
import styles from './Layout.module.css'
const Layout = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Menu/>
            <Outlet />
        </div>
    )
}

export default Layout