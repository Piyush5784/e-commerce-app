import "bootstrap/dist/css/bootstrap.min.css"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";


import styles from "../CSS/productsCart.module.css"

import ProductList from "../Context/ProductList";
import { useData } from "../Context/CartsContext";


export function getLength(count) {
    return count;
}


function ProductsCart() {

    const { products } = useContext(ProductList);

    const { addToCart } = useData();

    let style = {
        color: "white",
        textDecoration: "none"
    }

    const [count, setCount] = useState(0);

    function onClickHandler(item) {
        addToCart(item);
        setCount(count + 1);
        getLength({ count });
    }


    return <>
        {products.map(item =>


            <div key={item.name} className={` ${styles.container}`}>

                <div className="card" style={{ minWidth: "18rem", width: "18rem", margin: "10px" }}>
                    <img src={item.src} className="card-img-top" style={{ maxHeight: "190px" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <img style={{ float: "right" }} src="https://pngset.com/images/iphone-emoji-iphoneemoji-heart-red-small-red-heart-emoji-balloon-female-pillow-cushion-transparent-png-2578007.png" height={27} alt="reload" />
                        <p className="card-text">{item.Rating}</p>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.description}</p>
                        <button className="btn btn-primary" >


                            <Link to={`/details/${item.name}`} style={style}>View Details</Link>


                        </button>
                        <button onClick={() => onClickHandler(item)} className="btn btn-success" style={{ marginLeft: "10px" }} >Add to Cart </button>

                    </div>
                </div>
            </div>)}



    </>
}

export default ProductsCart;