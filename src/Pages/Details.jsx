import { useContext, useState } from "react";
import Navbar from "../Compontents/Navbar";
import { Link, useParams } from "react-router-dom";
import ProductList from "../Context/ProductList";
import { useData } from "../Context/CartsContext";

function Details() {

    const { products } = useContext(ProductList);
    const { addToCart } = useData();

    function onclickHandler() {
        addToCart(item)
    }


    const { name } = useParams();

    const filterItem = products.filter(item => item.name === name);

    return <>
        <Navbar></Navbar>

        {filterItem.map(item =>

            <div style={{ background: "  #FCFCFC linear-gradient(10deg, #FCFCFC,  #0FCCFC)" }} className="px-4 py-5  text-center">
                <button className="btn btn-primary" style={{ float: "left" }}><Link style={{ textDecoration: "none", color: "white" }} to={"/"}>Back</Link></button>
                <img className="d-block mx-auto mb-4" src={item.src} alt="" height="270" />
                <h1 className="display-5 fw-bold text-body-emphasis">{item.name}</h1>

                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">{item.description}</p>
                    <p className="lead mb-4">{item.Rating}</p>
                    <p className="lead mb-4">{item.price}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Buy Now</button>
                        <button type="button" className="btn btn-outline-success btn-lg px-4" onClick={() => onclickHandler(item)}>Add to Cart</button>
                    </div>
                </div>
            </div >
        )}


    </>
}

export default Details;