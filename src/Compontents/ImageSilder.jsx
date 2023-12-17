import { Carousel } from "bootstrap";
import "../CSS/ImageSilder.css"

function ImageSilder() {
    const styles = { display: "flex", justifyContent: "center", alignItems: "center" };



    const src1 = "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg";

    const src2 = "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/LIGHTING-GWUNRECPC._CB570774247_.jpg";

    const src3 = "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img21/Watches2023/Dec/GW/MFD/Unrec/499/U_3000._CB571197641_.jpg";

    const src4 = "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Toys/HTL2023/GW/Homepage_DesktopHeroTemplate_3000x1200-Toy-Fiesta-APAY_2x_unrec._CB570529351_.jpg";

    return <>

        <div id="carouselExampleCaptions" style={{ height: "300px", marginTop: "56px" }} className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={src1} className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                    <img src={src2} className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                    <img src={src3} className="d-block w-100" alt="..." />

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    </>
}


export default ImageSilder;