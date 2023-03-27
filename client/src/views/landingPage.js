import "./landingPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [show, setShow] = useState(true);
  const [audio] = useState(new Audio("/pokemon-intro.mp3"));

  const handleClick = () => {
    audio.play();
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  const handleOff = ()=>{
    audio.pause();    
  }

  return (
    <div className="landing">
      <div className={`primer-vista ${show ? "" : "hidden"}`}>
         <img className="logotipo" src="/logotipo.jpg" alt="logo" />
         <img id="primer-img" src="/landingIcon.png" alt="icono landing" />
         <button className="btn-comenzar" onClick={handleClick}>¡Comenzar!</button>
     </div>    
     <div className="audio">
        <audio controls>
          <source src="/pokemon-intro.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <div className={`segundo-${show}`} >
        <img className="logotipo" src="/logotipo.jpg" alt="logo" />
        <h1>¡Bienvenido PokeFan!</h1>
        <h3>Esta es una aplicación para todos los amantes de PoKémon</h3>
        <h3>En ella podrás buscar a tus Pokemones preferidos de la serie o de los juegos, 
          también podrás analizarlos en nuestra Pokedex haciendo click sobre ellos, y no solo eso...</h3>
        <h1>¡También podrás crear el Pokémon que siempre has querido tener!</h1>         
        <Link to="/home"><button className="btn-ingresar" onClick={handleOff} >Ingresar</button></Link>
      </div>
    </div>
  );
};

export default LandingPage;