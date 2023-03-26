import './App.css';
import {BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { LandingPage, Home_Page, Detail_Page, Form_Page, Error_Page, About_Page, Nav_Bar } from './views';
import { useSelector } from 'react-redux';


function App() {

  const pageActual = useSelector((state) => state.pagina);
  const errores = useSelector((state) => state.errors);
 

  if(errores.length>0){
    alert(errores);
  };  

  return (
    <div className="App">  

        <Nav_Bar />  

        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" render={() => <Home_Page pageActual={pageActual} />} />
          <Route exact path="/detail/:id" component={Detail_Page} />
          <Route exact path="/form" component={Form_Page} />
          <Route exact path="/about" component={About_Page} />
          <Route path="*" component={Error_Page} />      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
