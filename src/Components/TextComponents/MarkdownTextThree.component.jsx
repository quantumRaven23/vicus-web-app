/******************************************
 *  Author : quantumRaven23   
 *  Created On : Mon Feb 08 2021
 *  File : MarkdownTextThree.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
//Styles
//Misc

const MarkdownTextThree =()=>{
    return(
        <div className='md3-container'>
            <div className='md3-text'>
                <h1>
                    {
                        'Cuentanos\n   tu proyecto'
                    }
                </h1>
                <p>
                    {
                        'Servicios especiales para arquitectos y proyectos de\ngrandes escalas.'
                    }
                </p>
            </div>
            <div className='md3-footer'/>
        </div>
    );
};

export default MarkdownTextThree;