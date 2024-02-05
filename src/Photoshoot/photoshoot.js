import "./photoshoot.css";
import PhotoshootData from "./PhotoshootData";
import Label1 from "../asset/AssetDKV2.png";
import Label2 from "../asset/AssetDKV3.png";
import Label3 from "../asset/AssetDKV4.png";
import Label4 from "../asset/AssetDKV5.png";
import Label5 from "../asset/AssetDKV6.png";
import Label6 from "../asset/AssetDKV7.png";
import Label7 from "../asset/AssetDKV8.png";
import Label8 from "../asset/AssetDKV9.png";
import Label9 from "../asset/AssetDKV10.png";
import Navbar from "../components/Navbar";

function Photoshoot(){
    return(
        <div className="photoshoot">
            <Navbar/>
            <h1>Recent Asset DKV</h1>
            <p>Desain Asset Offer from Faculty DKV</p>
            <div className="photoshoot-card">
                <PhotoshootData
                image={Label1}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <PhotoshootData
                image={Label2}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <PhotoshootData
                image={Label3}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
            </div>
            <div className="photoshoot-card">
                <PhotoshootData
                image={Label4}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
                <PhotoshootData
                image={Label5}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
                <PhotoshootData
                image={Label6}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
            </div>
            <div className="photoshoot-card">
                <PhotoshootData
                image={Label7}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
                <PhotoshootData
                image={Label8}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
                <PhotoshootData
                image={Label9}
                heading = "Photoshoot Food and beverage"
                text="photoshoot by : rafibahtiar"
                />
            </div>
            <div className="photoshoot-card">
                <PhotoshootData
                image={Label1}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <PhotoshootData
                image={Label2}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : rizkimaulana"
                />
                <PhotoshootData
                image={Label3}
                heading = "Website Marketing & Operasional"
                text="DIAM production offers website marketing & opearsional designs from a PT BANGUN CIPTA NUSAKARYA"
                />
            </div>
        </div>
    )
}

export default Photoshoot;