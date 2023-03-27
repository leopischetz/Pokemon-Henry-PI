import "./error.css";
import { useNavigate } from "react-router-dom";

const Error_Page = ()=>{

    const navigate = useNavigate();

    return(
        <div className="pagina"> 
            <img src="/luxio.jpg" alt="404" />
            <button onClick={() => navigate("/home")}>Volver al Home</button>
        </div>       
    )
}

export default Error_Page;