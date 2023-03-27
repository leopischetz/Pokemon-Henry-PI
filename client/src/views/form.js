import "./form.css";
import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import validacion from "../components/validation";
import createPokemons from "../components/createPokemon";

const Form_Page = ()=>{

    const navigate = useNavigate();
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [errors, setErrors] = useState({});  
    const [createData, setCreateData] = useState({
        name:"",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types:[],
      });      
      
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        let tiposSeleccionados = [...selectedTypes];
        
        if (selectedTypes.includes(value)) {
          tiposSeleccionados = tiposSeleccionados.filter((type) => type !== value);
        } else {
          tiposSeleccionados.push(value);
        }      
        
        if (tiposSeleccionados.length >= 2) {
          const checkboxes = document.getElementsByTagName("input");
          for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type === "checkbox" && !tiposSeleccionados.includes(checkboxes[i].value)) {
              checkboxes[i].disabled = true;
            }
          }
        } else {
          const checkboxes = document.getElementsByTagName("input");
          for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type === "checkbox") {
              checkboxes[i].disabled = false;
            }
          }
        }      
        setSelectedTypes(tiposSeleccionados.slice(0, 2));
        setCreateData({
          ...createData,
          types: tiposSeleccionados
        });
      };
    
    const handleInputChange = (event) => {
        setErrors(
          validacion({
            ...createData,
            [event.target.name]: event.target.value
          })
        );
        
        if (event.target.type === 'number') {
          setCreateData({
            ...createData,
            [event.target.name]: parseInt(event.target.value)
          });
        } else {
          setCreateData({
            ...createData,
            [event.target.name]: event.target.value
          });
        }
      };

    const createDataJson = JSON.stringify(createData);

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (Object.values(errors).some(error => error)) {         
            alert("Debe llenar todos los campos correctamente");
          } else {            
            await createPokemons(createDataJson);
            console.log('createPokemons llamado correctamente');
            navigate('/home');
          };
        }

    console.log(createDataJson);

    const typeClass = createData.types.length > 0 ? createData.types[0] : "grass";
    
    console.log(typeClass);
    

    const renderTypes = (types) => {       
       return types.map((type) => (
         <span key={type} className={type}>{type}</span>
       ));
     };

    return(
        <div className="general-form">
            <h1 id="titulo">¡Crea el Pokemon que siempre has querido!</h1>
          <div className="orden">
          <div className="div-form">
            <form onSubmit={handleSubmit}>                            
                <label>Nombre</label>
                <input className="input-text" name="name" placeholder="Escribe el nombre de tu Pokemon" type="text" onChange={handleInputChange} />                
                <p style={{color:"red"}}>{errors.name}</p>
                <label>Imagen</label>
                <input className="input-text" name="image" placeholder="Inserta un link de tu imagen" type="text" onChange={handleInputChange} />                
                <p style={{color:"red"}}>{errors.image}</p>
                <label>Hp</label>
                <input className="input-text" name="hp" placeholder="Escribe los puntos de vida (1/300)" type="number" onChange={handleInputChange} />                
                <p style={{color:"red"}}>{errors.hp}</p>
                <label>Ataque</label>
                <input className="input-text" name="attack" placeholder="Escribe los puntos de ataque (1/200)" type="number" onChange={handleInputChange} />                
                <p style={{color:"red"}}>{errors.attack}</p>
                <label>Defensa</label>
                <input className="input-text" name="defense" placeholder="Escribe los puntos de defensa (1/250)" type="number" onChange={handleInputChange} />                
                <p style={{color:"red"}}>{errors.defense}</p>
                <label>Velocidad</label>
                <input className="input-text" name="speed" placeholder="Escribe los puntos de velocidad (1/200)" type="number" onChange={handleInputChange} />                
                <p style={{color:"red"}}>{errors.speed}</p>
                <label>Altura</label>
                <input className="input-text" name="height" placeholder="Escribe la altura en cm de tu Pokemon" type="number" onChange={handleInputChange} />                
                <p style={{color:"red"}}>{errors.height}</p>
                <label>Peso</label>
                <input className="input-text" name="weight" placeholder="Escribe el pego en hectogramos de tu Pokemon" type="number" onChange={handleInputChange} />                
                <p style={{color:"red"}}>{errors.weight}</p>
                <label>Tipo(s)</label>
             <div>
                <input type="checkbox" name="normal" value="normal" checked={selectedTypes.includes("normal")} onChange={handleCheckboxChange} />
                <label>Normal</label>
                <input type="checkbox" name="fighting" value="fighting" checked={selectedTypes.includes("fighting")} onChange={handleCheckboxChange} />
                <label>Lucha</label>
                <input type="checkbox" name="flying" value="flying" checked={selectedTypes.includes("flying")} onChange={handleCheckboxChange} />
                <label>Volador</label>
                <input type="checkbox" name="poison" value="poison" checked={selectedTypes.includes("poison")} onChange={handleCheckboxChange} />
                <label>Veneno</label>
                <input type="checkbox" name="ground" value="ground" checked={selectedTypes.includes("ground")} onChange={handleCheckboxChange} />
                <label>Tierra</label>
                <input type="checkbox" name="rock" value="rock" checked={selectedTypes.includes("rock")} onChange={handleCheckboxChange} />
                <label>Roca</label>
                <input type="checkbox" name="bug" value="bug" checked={selectedTypes.includes("bug")} onChange={handleCheckboxChange} />
                <label>Bicho</label>
                <input type="checkbox" name="ghost" value="ghost" checked={selectedTypes.includes("ghost")} onChange={handleCheckboxChange} />
                <label>Fantasma</label>
                <input type="checkbox" name="steel" value="steel" checked={selectedTypes.includes("steel")} onChange={handleCheckboxChange} />
                <label>Acero</label>
                <input type="checkbox" name="fire" value="fire" checked={selectedTypes.includes("fire")} onChange={handleCheckboxChange} />
                <label>Fuego</label>
                <input type="checkbox" name="water" value="water" checked={selectedTypes.includes("water")} onChange={handleCheckboxChange} />
                <label>Agua</label>
                <input type="checkbox" name="grass" value="grass" checked={selectedTypes.includes("grass")} onChange={handleCheckboxChange} />
                <label>Planta</label>     
                <input type="checkbox" name="electric" value="electric" checked={selectedTypes.includes("electric")} onChange={handleCheckboxChange} />
                <label>Eléctrico</label>
                <input type="checkbox" name="psychic" value="psychic" checked={selectedTypes.includes("psychic")} onChange={handleCheckboxChange} />
                <label>Psiquico</label>
                <input type="checkbox" name="ice" value="ice" checked={selectedTypes.includes("ice")} onChange={handleCheckboxChange} />
                <label>Hielo</label>
                <input type="checkbox" name="dragon" value="dragon" checked={selectedTypes.includes("dragon")} onChange={handleCheckboxChange} />
                <label>Dragón</label>
                <input type="checkbox" name="dark" value="dark" checked={selectedTypes.includes("dark")} onChange={handleCheckboxChange} />
                <label>Oscuro</label>
                <input type="checkbox" name="fairy" value="fairy" checked={selectedTypes.includes("fairy")} onChange={handleCheckboxChange} />
                <label>Hada</label>
                <input type="checkbox" name="unknown" value="unknown" checked={selectedTypes.includes("unknown")} onChange={handleCheckboxChange} />
                <label>Desconocido</label>
                <input type="checkbox" name="shadow" value="shadow" checked={selectedTypes.includes("shadow")} onChange={handleCheckboxChange} />
                <label>Sombra</label>
             </div>
                <p style={{color:"red"}}>{errors.types}</p>

                <button type="submit">SUBMIT</button>                
            </form> 
        </div>
           <div className="orden-dos">
            <h1>Vista Previa</h1>
            <div className={`preview ${typeClass}`}>
               <h2>{createData.name}</h2>                                   
               <img  src={createData.image} />
               <div>
                  <div className="types-container">
                     {renderTypes(createData.types)}
                  </div>                      
            </div>
            </div>
           </div>
      </div>     

            <button onClick={() => navigate("/home")}>Volver al Home</button>
            
      </div>       
    )
}

export default Form_Page;
