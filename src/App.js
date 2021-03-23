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
import Typical from 'react-typical'

//Views
import HomePage from './Views/homepage/homepage.view';

//Styles
import './App.scss';

 //Misc
 import {useMediaQuery} from 'react-responsive';

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  
  return (
    <div>
        <div className='parallax'>
          <Header/>
          {/* <FadeText/> */}
          <div className={`bgText${isTabletOrMobile ? '-mobile':''}`}>
            <p className='notTypical'>Hacemos:</p>
            <Typical className='typical'
              steps={
                [
                  'Cubiertas', 2000, 
                  'Cocinas', 2000,
                  'Barras',2000,
                  'Comedores',2000
                ]
              }
              loop={Infinity}
              wrapper="p"
            />
          </div>
        </div>
        <HomePage/>
    </div>
  );
}

export default App;
