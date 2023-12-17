
import ProductsCart, { getLength } from "../Compontents/ProductsCart";
import Navbar from "../Compontents/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from '../CSS/products.module.css'
import ImageSilder from "../Compontents/ImageSilder";
function Home() {

    const length = getLength();

    return <>

        <div style={{ background: "  #FCFCFC linear-gradient(0deg, #FCFCFC,  #010EFF)" }}>
            <Navbar length={length}></Navbar>

            <ImageSilder></ImageSilder>

            <div className={`${styles.container}`}>
                <ProductsCart></ProductsCart>
            </div>

        </div>



    </>
}


export default Home;