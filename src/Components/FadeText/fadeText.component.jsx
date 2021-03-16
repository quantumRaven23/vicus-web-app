/******************************************
 *  Author : quantumRaven23   
 *  Created On : Sun Mar 14 2021
 *  File : fadeText.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
//Styles
import './fadeText.styles.scss'

//Misc

const FadeText = ()=>{

    return(
        <ul className='fade'>
            
            <li><h3>Hacemos:</h3></li>
            <li><h3>Cubiertas</h3></li>
            <li><h3>Cocinas</h3></li>
            <li><h3>Barras</h3></li>
            <li><h3>Comedores</h3></li>
        </ul>
    )
}

export default FadeText;