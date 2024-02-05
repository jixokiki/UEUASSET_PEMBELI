import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


class Navbar extends Component {
    state = {clicked:false};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1  className="navbar-logo">UEU ASSET</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    {/* <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i> */}
                    <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars}/>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return(
                        <li key={index}>
                            {/* <a className={item.cName} href="/"><i className={item.icon}></i>  {item.title}</a> */}
                            <Link className={item.cName} to={item.url}><i className={item.icon}></i>  {item.title}</Link>
                        </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;