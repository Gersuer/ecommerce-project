import styles from './ProductsDetails.module.css';

const ProductsDetails = () => {

  return (
    <main className={styles.details_container}>

      <section className={styles.product_container}>
        <div className={styles.product_img_container}>
          <img src="" alt="#" />
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
  )
}

export default ProductsDetails