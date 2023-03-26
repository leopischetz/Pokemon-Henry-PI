import "./home.css";
import Nav_Bar from "./navBar";
import CardContainer from "../components/CardContainer";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { getPokemons, setPagina, getTypes } from "../redux/actions";



const Home_Page = ({ pageActual })=>{
    const dispatch = useDispatch();
    let allPokemons = useSelector((state) => state.allPokemons);
    const allTypes = useSelector((state) => state.types);
    const [paginaActual, setPaginaActual] = useState(pageActual?pageActual:1);   
    const pokemonsPagina = 12;
    const allTypeNames = allTypes.map((a) => a.name);
    const [tipeFilter, setTipeFilter] = useState(allTypeNames);
    const [ordenOrigen, setOrdenOrigen] = useState('todos');
    const [ordenNombre, setOrdenNombre] = useState('id');
    const [ordenAttack, setOrdenAttack] = useState('original');
    const [filtroTipoOn, setFiltroTipoOn] = useState(false);
    const buscado = useSelector((state) => state.ultimoBuscado);
    
    console.log("Buscado",buscado);
         
    useEffect(()=>{     
      console.log("montado");
      dispatch(getPokemons())          
    }, []);

    useEffect(()=>{     
      dispatch(getTypes())          
    }, []);
         
    useEffect(() => {
      dispatch(setPagina(paginaActual));
    }, [dispatch, paginaActual]);

    const handleCheckboxChange = (event) => {
      const type = event.target.value;
      const checked = event.target.checked;
      if (checked) {
        setTipeFilter([...tipeFilter, type]);
      } else {
        setTipeFilter(tipeFilter.filter((t) => t !== type));
      };
    };  
    
    const handleFiltros = (event) =>{
      if(filtroTipoOn){
        setFiltroTipoOn(false);
      } else{
        setFiltroTipoOn(true);
      }
    }

    // console.log("estado tipeFilter",tipeFilter);
          
    // console.log("Filtrados", pokemonsFiltrados);

    if(filtroTipoOn){
      allPokemons = allPokemons.filter(pokemon => {
        return pokemon.types.some(type => tipeFilter.includes(type));
      });
    }else{
      allPokemons= allPokemons;
    }
    
    console.log(allPokemons); 

    if(ordenOrigen === "todos"){
      allPokemons = allPokemons;
    } else if(ordenOrigen === "fromDb"){
      allPokemons = allPokemons.filter(a => a.id > 1281);
    } else if(ordenOrigen === "fromApi"){
      allPokemons = allPokemons.filter(a => a.id <= 1281);
    }
    
    if(ordenNombre === 'id'){
      allPokemons = allPokemons.sort((a, b)=> a.id - b.id);
    } else if (ordenNombre === 'ascendente') {
      allPokemons = allPokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (ordenNombre === 'descendente') {
      allPokemons = allPokemons.sort((a, b) => b.name.localeCompare(a.name));
    };
    
    if (ordenAttack === 'ascendente'){
      allPokemons = allPokemons.sort((a, b)=> a.attack - b.attack);
    } else if (ordenAttack === 'descendente'){
      allPokemons = allPokemons.sort((a, b)=> b.attack - a.attack);
    };

    // console.log(pokemonsFiltrados);  

    const indiceUltimoItem = paginaActual * pokemonsPagina;
    const indicePrimerItem = indiceUltimoItem - pokemonsPagina;
    const itemActual = allPokemons.slice(indicePrimerItem, indiceUltimoItem);

    const paginasTotales = Math.ceil(allPokemons.length / pokemonsPagina);
    
    const numeroDePagina = [];
    const paginaAnterior = paginaActual - 1;
    const paginaSiguiente = paginaActual + 1;
   
    if (paginaActual > 1) {
      numeroDePagina.push(paginaAnterior);
    };   
    numeroDePagina.push(paginaActual);   
    if (paginaActual < paginasTotales) {
      numeroDePagina.push(paginaSiguiente);
    };   
    
    const renderNumeroDePagina = numeroDePagina.map((number) => {
        return (
            <li
                key={number}
                onClick={() => setPaginaActual(number)}
                className={paginaActual === number ? "active" : ""}
            >
                {number}
            </li>
        );
    });

    const handleNextPage = () => {
        if (paginaActual < paginasTotales) {
          setPaginaActual(paginaActual + 1);
        }
      };
    
      const handlePrevPage = () => {
        if (paginaActual > 1) {
          setPaginaActual(paginaActual - 1);
        }
      };

      const ultimoSearch= buscado;

    if(itemActual.length === 0 && filtroTipoOn===false){
      return(
        <div className="div-carga">
        <img src="/cargando.png" alt="Cargando..." />
        </div>
      )
    };

    return(
        <div className="home">         

        <div className="div-vistas">

          <div className={`blanco ${filtroTipoOn}`}>            
          </div>  

          <div className={`filtros ${filtroTipoOn}`}>
            <button id="boton-filtro" onClick={()=> handleFiltros()}>Filtrar por tipo</button>
            {filtroTipoOn && (<div>
               {allTypes.map((type, index) => (
               <React.Fragment key={index}>
               <input type="checkbox" name={type.name} value={type.name} checked={tipeFilter.includes(type.name)} onChange={handleCheckboxChange} />
               <label>{type.name[0].toUpperCase() + type.name.slice(1)}</label>
               <hr />
               </React.Fragment>
               ))}
            </div>)}
            <div>
            <label>Filtrar por Origen</label>
            <select value={ordenOrigen} onChange={(e) => setOrdenOrigen(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="fromApi">Api</option>
            <option value="fromDb">Data Base</option>
            </select>
            </div>
            <div>
            <label>Filtrar Alfabéticamente</label>
            <select value={ordenNombre} onChange={(e) => setOrdenNombre(e.target.value)}>
            <option value="id">ID</option>
            <option value="ascendente">Nombre Ascendente</option>
            <option value="descendente">Nombre Descendente</option>
            </select>
            </div>
            <div>
            <label>Filtrar por ataque</label>
            <select value={ordenAttack} onChange={(e) => setOrdenAttack(e.target.value)} disabled={ordenNombre !== "id"}>
            <option value="id">ID</option>
            <option value="ascendente">Ataque Ascendente</option>
            <option value="descendente">Ataque Descendente</option>
            </select>
            </div>
            <hr />
            </div>
          
          <div className="renders">
          <div className="first-card-container" >
            <CardContainer pokemons={ultimoSearch} />
          </div>
          <hr />       
            <CardContainer pokemons={itemActual} className="renderizado" />
            <div className={itemActual.length>0?"paginado":"oculto"}>
                <button className="boton-paginado" onClick={handlePrevPage} disabled={paginaActual === 1}>Anterior</button>
                <ul className="numero-paginas">{renderNumeroDePagina}</ul>
                <button className="boton-paginado" onClick={handleNextPage} disabled={paginaActual === paginasTotales}>Siguiente</button>
            </div>
          </div>          
        </div>   
      </div>
    )
}

export default Home_Page;