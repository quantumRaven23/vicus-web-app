/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 22 2021
 *  File : App.js
 *  Project : Vicus
 *******************************************/

//React
import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Components
import Header from './Components/Header/header.component';

//Views
import Catalogo from './Views/catalogo/catalogo.view';
import HomePage from './Views/homepage/homepage.view';

//Styles
import './App.css';

 //Misc

function App() {
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/catalogo' component={Catalogo}/>
          {/*
          <Route path='/tuproyecto'/>
          <Route path='/contacto'/>
          <Route path='Proyectos'/>
          <Route path='Conocenos'/>
          */}
        </Switch>
    </div>
  );
}

export default App;
