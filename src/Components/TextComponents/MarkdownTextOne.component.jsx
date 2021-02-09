/******************************************
 *  Author : quantumRaven23   
 *  Created On : Mon Feb 08 2021
 *  File : MarkdownTextOne.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
//Styles
//Misc

const MarkdownTextOne=({isTabletOrMobile})=>{
    return(
        <div className={`text-bundle ${isTabletOrMobile ? 'mobile':''}`} id='conocenos'>
            <div className='text-item'>
                <h3>no hassle</h3>  
                <p>Lorem ipsum dolor sit
                    amet, consectetuer
                    adipiscing elit, sed diam
                    nonummy nibh</p>
            </div>
            <div className='text-item'>
                <h3>servicio completo</h3>  
                <p>Lorem ipsum dolor sit
                    amet, consectetuer
                    adipiscing elit, sed diam
                    nonummy nibh</p>
            </div>
            <div className='text-item'>
                <h3>rectificación</h3>  
                <p>Lorem ipsum dolor sit
                    amet, consectetuer
                    adipiscing elit, sed diam
                    nonummy nibh</p>
            </div>
            <div className='text-item'>
                <h3>instalación</h3>  
                <p>Lorem ipsum dolor sit
                    amet, consectetuer
                    adipiscing elit, sed diam
                    nonummy nibh</p>
            </div>
        </div>
    );
};

export default MarkdownTextOne;