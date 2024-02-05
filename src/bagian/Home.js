import Layar from "../components/Layar";
import Navbar from "../components/Navbar";
import bg from "../asset/BG1.jpg"
import Division from "../components/Division";
import Product from "../components/Product";
import Footer from "../components/Footer";
import ParallaxComponents from "../components/ParallaxComponents";


function Home(){
    return(
        <>
        <Navbar/>
        <Layar
        cName="layar"
        layarIMG={bg}
        title="UEU ASSET"
        text="Choose Your Favorite ASSET"
        buttonText="RIZKI PRODUCTION"
        url="/"
        btnClass="show"
        />
        <Division/>
        <Product/>
        <ParallaxComponents/>
        <Footer/>
        </>
    );
}

export default Home;