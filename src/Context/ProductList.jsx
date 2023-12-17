import { createContext, useState } from "react";

const ProductList = createContext({});

function ProductListProvider({ children }) {

    const products = [
        {
            name: "DSLC 850 HD AM",
            description: "This is a very good Camera",
            Rating: "⭐4.5 500 + ratings",
            src: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            price: "$50"
        }, {
            name: "MoistSkin",
            description: "This is a very skin care moisturizer",
            Rating: "⭐4.4 900 + ratings",
            src: "https://media.istockphoto.com/id/1388226392/photo/an-unrecognizable-caucasian-woman-buying-some-cosmetic-products.webp?b=1&s=170667a&w=0&k=20&c=8Ju_pyU_SQze6hGFxZ8QklR7AkihG3W-_QNi0pIZRFc=",
            price: "$30"
        }, {
            name: "Skin Care",
            description: "This is a very good Skin Care Product",
            Rating: "⭐3.0 100 + ratings",
            src: "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price: "$90"
        }, {
            name: "Saving Loation",
            description: "This is a very good  product",
            Rating: "⭐4.2 100 + ratings",
            src: "https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price: "$20"
        }, {
            name: "DSLC 450 Lens",
            description: "This is a very good lens",
            Rating: "⭐4.6 8000 + ratings",
            src: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price: "$620"
        }, {
            name: "Apple Combo",
            description: "This is a very good Apple products",
            Rating: "⭐4.8 5000 + ratings",
            src: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price: "$80"
        }, {
            name: "Beauty ++",
            description: "This is a very good Beauty products",
            Rating: "⭐3.5 400 + ratings",
            src: "https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price: "$220"
        }, {
            name: "Healthy Skin",
            description: "This is a very good product for living healthy",
            Rating: "⭐4.2 700 + ratings",
            src: "https://images.pexels.com/photos/3259593/pexels-photo-3259593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price: "$60"
        }, {
            name: "Packet Cover",
            description: "This is a very good Packets",
            Rating: "⭐4.1 8000 + ratings",
            src: "https://images.pexels.com/photos/4829069/pexels-photo-4829069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price: "$20"
        }
    ]

    return <ProductList.Provider value={{ products }}>
        {children}
    </ProductList.Provider>
}

export default ProductList;

// export function updateData(newdata) {
//     return newdata;
// }

export { ProductListProvider };