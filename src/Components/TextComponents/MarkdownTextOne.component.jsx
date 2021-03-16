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
        <div>
            <div className={`text-bundle ${isTabletOrMobile ? 'mobile':''}`} id='conocenos'>
                <h3 className='top-text'>Un lugar, la solucion.</h3>
                <div className='text-item'>
                    <h3>Planos/Diseño</h3>  
                    <p>Con un equipo de expertos 
                        te ayudamos a diseñar el 
                        acento perfecto para tu 
                        proyeco y/o los planos.</p>
                </div>
                <div className='text-item'>
                    <h3>Rectificacion</h3>  
                    <p>Para que salga todo a la 
                        primera. Rectificamos 
                        medidas y otros detalles 
                        en obra.</p>
                </div>
                <div className='text-item'>
                    <h3>Instalacion</h3>  
                    <p>Cuidando los detalles, 
                    limpieza y calidad.</p> 
                </div>
            </div>
        </div>
    );
};

export default MarkdownTextOne;