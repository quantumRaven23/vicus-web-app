/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 22 2021
 *  File : App.js
 *  Project : Vicus
 *******************************************/

//React
import React from 'react';

//Components
import Header from './Components/Header/header.component';
import FadeText from './Components/FadeText/fadeText.component';

//Views
import HomePage from './Views/homepage/homepage.view';

//Styles
import './App.scss';

 //Misc

function App() {
  return (
    <div>
        <div className='parallax'>
          <Header/>
          <FadeText/>
        </div>
        <HomePage/>
    </div>
  );
}

export default App;
