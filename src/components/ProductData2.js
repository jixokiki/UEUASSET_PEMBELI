import "./Product.css";
import { NavLink } from "react-router-dom";
function ProductData2(props){
    return(
        <div className="p-card">
            <div className="product-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <nav>
                <NavLink exact="true" activeclassname="active" className="photoshoot-link" to="/college-photoshoot-data">
                    <button>Clicked Here</button>
                </NavLink>
            </nav>            
        </div>

    );
}

export default ProductData2;