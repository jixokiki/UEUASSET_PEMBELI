import "./collegePhoto.css";
import { NavLink } from "react-router-dom";

function CollegeDataPhotoshoot(props){

        const addToCart = async() => {
           try{
                const response = await fetch('/add-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image: props.image,
                    heading: props.heading,
                    text: props.text,
                    text2: props.text2,
                }),
            });
            const data = await response.json();
            if (data.success) {
                console.log('Success:', data);
                // Lakukan sesuatu setelah berhasil seperti menampilkan notifikasi
            }else{
                console.error('Failled', data);
            }
            } catch(error)  {
                console.error('Error:', error);
                // Lakukan sesuatu setelah gagal seperti menampilkan pesan error
            }
        };

    return(
        <div className="cp-card">
            <div className="college-photoshoot-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <p>{props.text2}</p>
            {/* <nav>
                <NavLink exact="true" activeclassname="active" className="college-photoshoot-data-link" to="/college-photoshoot-data">
                    <button>Clicked Here</button>
                </NavLink>
            </nav> */}
            <button onClick={addToCart}>Add Cart</button>
        </div>

    );
}

export default CollegeDataPhotoshoot;