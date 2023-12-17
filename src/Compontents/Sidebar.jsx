const Sidebar = ({ cartItems }) => {


    return <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "30rem", float: "right", height: "34.375rem", marginRight: "1.25rem" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg className="bi pe-none me-2 " width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            <span className="fs-4" style={{ textAlign: "center" }} > Total</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">

            {cartItems.map(item => <li className="nav-item" >
                <a className={`nav-link text-white`} aria-current="page">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                    {item.name} <span style={{ float: "right" }}>{item.price}</span>
                </a>
            </li>)}

            {/* <li >
                <a  className={`nav-link text-white`}>
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                    Create Post
                </a>
            </li> */}

        </ul>
        <hr />
        <button className="btn btn-primary">Proceed to Checkout</button>
    </div>
}

export default Sidebar;



// onClick={() => selectedTab("create post")}
// onClick={() => selectedTab("create post")}