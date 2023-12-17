
import { Link } from "react-router-dom";
import { useData } from "../Context/CartsContext";
function Navbar() {

    const { cart } = useData();

    const length = cart.length;


    return (
        <>

            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Pamazon</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/wishlist">Wishlist</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/cart">Carts<sup>{length == 0 ? "" : length}</sup></Link>

                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar;




{/* <nav className="navbar  navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
<div className="container-fluid">
    <a className="navbar-brand" href="#">Pamazon</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/wishlist">Wishlist</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/cart">Carts<sup>{length == 0 ? "" : length}</sup></Link>

            </li>


        </ul>
        <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        </form>
    </div>
</div>
</nav> */}