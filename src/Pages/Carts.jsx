import { useContext, useState } from "react";
import Navbar from "../Compontents/Navbar";
import { useData } from "../Context/CartsContext";
import ProductList from "../Context/ProductList";
import Sidebar from "../Compontents/Sidebar";


function Carts() {

    const { cart } = useData();

    const { removeItems } = useData();

    const [cartItems, setCartItems] = useState(cart);


    const total = cartItems.price;



    function onclickHandler(itemSrc) {
        const filterItem = cartItems.filter(item => item.src !== itemSrc);
        setCartItems(filterItem);
        removeItems(filterItem);
    }


    return <>
        <Navbar ></Navbar>
        <h1>Carts Page</h1>
        <Sidebar cartItems={cartItems} ></Sidebar>

        {cartItems.map((item) => <div class="card" style={{ width: "60%", margin: "20px" }}>
            <div class="card-header">
                {item.name}
            </div>
            <div class="card-body" >
                <span>
                    <img src={item.src} class=" card-img-top" style={{ maxWidth: "200px", float: "left", maxHeight: "200px" }} alt="..." />
                </span>
                <h5 class="card-title" style={{ textAlign: "right" }}>{item.Rating}</h5>
                <p style={{ textAlign: "right" }}>{item.description}</p>

                <p style={{ textAlign: "right" }}>{item.price}</p>

                <a class="btn btn-primary" style={{ float: "right" }} onClick={() => onclickHandler(item.src)}>Remove from Cart</a>
            </div>
        </div>
        )}


    </>
}


export default Carts;