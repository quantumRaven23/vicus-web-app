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
import HomePage from './Views/homepage/homepage.view';

//Styles
import './App.css';

 //Misc

function App() {
  return (
    <div>
        <div className='parallax'>
          <Header/>
        </div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
    </div>
  );
}

export default App;
