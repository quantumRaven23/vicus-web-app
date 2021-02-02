/******************************************
 *  Author : quantumRaven23   
 *  Created On : Mon Feb 01 2021
 *  File : custom-button.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
//Styles
import './custom-button.styles.scss'
//Misc

const CustomButton=({children,...otherProps})=>(
    <button 
        className='custom-button' 
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;