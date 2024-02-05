import "./Product.css";
import ProductData from "./ProductData";
import ProductData2 from "./ProductData2";
import Label1 from "../asset/AssetDKV1.png";
import Label2 from "../asset/label2.jpg";
import Label3 from "../asset/label3.jpg";


function Product(){
    return(
        <div className="product">
            <h1>Recent Product</h1>
            <p>Product Offer from DIAM Production</p>
            <div className="product-card">
                <ProductData
                image={Label1}
                heading = "DKV"
                text="Desain Komunikasi Visual"
                />
                <ProductData2
                image={Label2}
                heading = "FIKOM"
                text="Fakultas Ilmu Komunikasi"
                />
                <ProductData
                image={Label3}
                heading = "FASILKOM"
                text="Fakultas Ilmu Komputer"
                />
            </div>
        </div>
    )
}

export default Product;