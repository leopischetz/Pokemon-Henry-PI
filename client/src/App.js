import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage, Home_Page, Detail_Page, Form_Page, Error_Page, About_Page, Nav_Bar } from './views';
import { useSelector } from 'react-redux';


function App() {

  const location = useLocation();
  const pageActual = useSelector((state) => state.pagina);
  const errores = useSelector((state) => state.errors);
 

  if(errores.length>0){
    alert(errores);
  };  

  return (
    <div className="App">  

        {location.pathname !== "/" && <Nav_Bar />}  

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home_Page pageActual={pageActual} />} />
          <Route path="/detail/:id" element={<Detail_Page />} />
          <Route path="/form" element={<Form_Page />} />
          <Route path="/about" element={<About_Page />} />
          <Route path="*" element={<Error_Page />} />
        </Routes>
      
    </div>
  );
}

export default App;
