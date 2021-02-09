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
                {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaaliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}
            </p>
        </div>
    );
};

export default MarkdownTextTwo;