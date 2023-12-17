
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import Carts from "./Pages/Carts";
import Details from "./Pages/Details";
function App() {


  return <>


    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/details/:name" element={<Details />}></Route>

        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Carts />}></Route>
      </Routes>
    </BrowserRouter>


  </>
}

export default App;