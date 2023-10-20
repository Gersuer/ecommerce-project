import styles from './ProductsDetails.module.css';
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../productContext/context';

interface productProps {
  id: string
  name: string
  preco: number
  qtd: string
  total: string
  img: string
  type: string
  title: string
}

const ProductsDetails = () => {
  const param = useParams();
  const { itens } = useContext(ProductContext);
  const [productDetail, setProductDetail] = useState<productProps>()

  useEffect(() => {

    if (param.tipo === 'almofadas') {
      console.log('entrou aqui')
      itens?.almofadas?.map(item => {
        if (item.id === param.id) {
          const produto = item;
          setProductDetail(produto)
        }
      })
      
    }

    if (param.tipo === 'camas') {
      console.log('entrou aqui')
      itens?.camas?.map(item => {
        if (item.id === param.id) {
          const produto = item;
          setProductDetail(produto)
        }
      })
      
    }

    if (param.tipo === 'bercos') {
      console.log('entrou aqui')
      itens?.bercos?.map(item => {
        if (item.id === param.id) {
          const produto = item;
          setProductDetail(produto)
        }
      })
      
    }
  }, [param, itens?.almofadas, itens?.camas, itens?.bercos])

  return (
    <>
      {
        productDetail &&
        <main className={styles.details_container}>

          <section className={styles.product_container}>
            <div className={styles.product_img_container}>
              <img src={productDetail.img} alt="#" />
            </div>
          </section>


          <section className={styles.details_section}>
            <div className={styles.product_info}>
              <h1 className={styles.product_name}>Product Name</h1>
              <ul className={styles.product_characteristics}>
                <li>Caracteristica 1</li>
                <li>Caracteristica 2</li>
                <li>Caracteristica 3</li>
                <li>Caracteristica 4</li>
              </ul>
              <div className={styles.product_rating}>
                <span>Avaliações</span>
                <span>* * * * * </span>
              </div>
            </div>

            <div className={styles.button_container}>
              <button>Comprar</button>
            </div>
          </section>

        </main>
      }
    </>
  )
}

export default ProductsDetails