/******************************************
 *  Author : quantumRaven23   
 *  Created On : Mon Feb 01 2021
 *  File : text-input.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
//Styles
import './text-input.styles.scss'

//Misc

const TextInput=({handleChange,label,...otherProps})=>(
    <div className='text-input-group'>
        <label className='text-input-label'>{label}</label>
        <textarea className='text-input' onChange={handleChange} {...otherProps}/>
    </div>
);

export default TextInput;