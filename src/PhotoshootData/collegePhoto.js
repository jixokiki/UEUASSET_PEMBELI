import "./collegePhoto.css";
import CollegeDataPhotoshoot from "./collegeDataPhoto";
import Label1 from "../asset/photoshoot1.JPG";
import Label2 from "../asset/photoshoot2.JPG";
import Label3 from "../asset/photoshoot3.JPG";
import Label4 from "../asset/photoshoot4.JPG";
import Label5 from "../asset/label1.jpg";
import Label6 from "../asset/label2.jpg";
import Label7 from "../asset/Logo_DIAM.jpeg";
import Label8 from "../asset/basreng1.jpg";
import Label9 from "../asset/basreng2.jpg";
import Label10 from "../asset/basreng3.jpg";
import Label11 from "../asset/basreng4.jpg";
import Label12 from "../asset/Satay.JPG";
import Label13 from "../asset/Satay2.jpg";
import Label14 from "../asset/Satay3.jpg";
import Label15 from "../asset/Satay4.jpg";




import Navbar from "../components/Navbar";

function CollegePhotoshoot(){
    return(
        <div className="college-photoshoot-data">
            <Navbar/>
            <h1>Recent Asset FIKOM</h1>
            <p>Photoshoot And Asset Offer from Faculty FIKOM </p>
            <div className="college-photoshoot-data-card">
                <CollegeDataPhotoshoot
                image={Label1}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <CollegeDataPhotoshoot
                image={Label2}
                heading = "Photoshoot Model "
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <CollegeDataPhotoshoot
                image={Label3}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
            </div>
            <div className="college-photoshoot-data-card">
                <CollegeDataPhotoshoot
                image={Label4}
                heading = "Photoshoot Model"
                text="photoshoot by : rafibahtiar"
                text2="model by : ghalyarsa"
                />
                <CollegeDataPhotoshoot
                image={Label5}
                heading = "Photoshoot Product"
                text="photoshoot by : rafibahtiar"
                />
                <CollegeDataPhotoshoot
                image={Label6}
                heading = "Model Marketing & Operasional"
                text="DIAM production offers website marketing & opearsional designs from a PT BANGUN CIPTA NUSAKARYA"
                />
            </div>
            <div className="college-photoshoot-data-card">
                <CollegeDataPhotoshoot
                image={Label7}
                heading = "Desaign Logo"
                text="design by : sila dermawan"
                />
                <CollegeDataPhotoshoot
                image={Label8}
                heading = "Photoshoot F&B"
                text="photoshoot by : rafibahtiar"
                text2='spicy chips'
                />
                <CollegeDataPhotoshoot
                image={Label9}
                heading = "Photoshoot F&B"
                text="photoshoot by : rafibahtiar"
                text2='spicy chips'
                />
            </div>
            <div className="college-photoshoot-data-card">
                <CollegeDataPhotoshoot
                image={Label10}
                heading = "Photoshoot F&B"
                text="photoshoot by : rafibahtiar"
                text2='spicy chips'
                />
                <CollegeDataPhotoshoot
                image={Label11}
                heading = "Photoshoot F&B"
                text="photoshoot by : rafibahtiar"
                text2="spicy chips"
                />
                <CollegeDataPhotoshoot
                image={Label12}
                heading = "Photoshoot F&B"
                text="photoshoot by : rafibahtiar"
                text2="satay"
                />
            </div>
            <div className="college-photoshoot-data-card">
                <CollegeDataPhotoshoot
                image={Label13}
                heading = "Photoshoot F&B"
                text="photoshoot by : rafibahtiar"
                text2="satay"
                />
                <CollegeDataPhotoshoot
                image={Label14}
                heading = "Photoshoot F&B"
                text="photoshoot by : rafibahtiar"
                text2="satay"
                />
                <CollegeDataPhotoshoot
                image={Label15}
                heading = "Photoshoot F&B"
                text="photoshoot by : rafibahtiar"
                text2="satay"
                />
            </div>

        </div>
    )
}

export default CollegePhotoshoot;