/******************************************
 *  Author : quantumRaven23   
 *  Created On : Mon Feb 08 2021
 *  File : MarkdownTextTwo.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
//Styles
import './markdown.styles.scss';

//Misc

const MarkdownTextTwo=({isTabletOrMobile})=>{
    return(
        <div  className={`md-2${isTabletOrMobile ? '-mobile':''}`}>
            <h1>
                {"Acentos  \nque hacen el \nproyecto"}
            </h1>
            <p>
                {"Los detalles hacen el diseño.\nMateriales de alta calidad para realizar cualquier\ndiseño."}
            </p>
        </div>
    );
};

export default MarkdownTextTwo;