import { ReactNode } from "react"
import styles from './Container.module.css'
interface childrenProps{
    children: ReactNode
}
const Container = ({ children }: childrenProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container