import { useNavigate } from "react-router-dom";

const About_Page = ()=>{

    const navigate = useNavigate();
    
    return(
        <div>
            <h1>Soy el About</h1>
            <button onClick={() => navigate("/home")}>Volver al Home</button>
        </div>       
    )
}

export default About_Page;