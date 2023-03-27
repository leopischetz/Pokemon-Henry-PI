import "./about.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const images = [
    "/cssimg.png",
    "/html.png",
    "/javascript.png",
    "/node.png",
    "/postgresql.png",
    "/postman.png",
    "/react.png",
    "/redux.png",
    "/sequelize.png",
    "/sql.png",
    ];

const About_Page = ()=>{

    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) =>
        (currentImageIndex + 1) % images.length
      );
    }, 3000);
    return () => clearInterval(interval);
    }, []);
    
  return (
    <div className="div-general">
      <div className="div-flex">
        <div className="div-textos">
      <h1>Henry P-I</h1>
      <h3>Bienvenidos y gracias por ver esta Single Page Aplication diseñada para el Henry P-I (Proyecto Individual).</h3>
      <h3>Mi nombre es Leonardo Iván Pischetz, un FullStack Developer en proceso.</h3>
      <h3>El Henry P-I es un trabajo práctico integrador, en el cual desarrollamos las habilidades adquiridas durante el BootCamp de Soy Henry! de la carrera 
        FullStack Developer. Esto quiere decir que tanto el diseño del esquema de base de datos, el desarrollo del servidor hasta la UX ha sido realizado integramente
        por mi. </h3>
      <h3>Tanto el camino del BootCamp como los 15 días para realizar este proyecto, han sifo muy agitados pero sumamente placenteros ya que he 
        descubierto lo apasionante que puede ser partir desde una página en blanco y poder plasmar mediante la imaginación y la técnica una página con múltiples funcionalidades.</h3>
      <h3>En este camino y en este proyecto, he aprendido desde cero a utilizar las siguientes herramientas:</h3>
      <div className="herramientas">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node Js</li>
        <li>React</li>
        <li>Redux</li>
        <li>Sql</li>
        <li>Sequelize</li>
        <li>Postgresql, Heidisql</li>
        <li>Postman, etc</li>
      </ul>
      <img src={images[currentImageIndex]} alt={`imagen ${currentImageIndex}`} />
      </div>
      <h3>Nuevamente, espero que lo disfrutes y muchas gracias!</h3>
      </div>      
      </div>
      <button onClick={() => navigate("/home")}>Volver al Home</button>
    </div>
  );
};

export default About_Page;