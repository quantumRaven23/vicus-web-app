/******************************************
 *  Author : quantumRaven23   
 *  Created On : Mon Feb 01 2021
 *  File : form-input.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components

//Styles
import './form-input.styles.scss';

//Misc


const FormInput =({handleChange,label,...otherProps}) => (
    <div className='input-group'>
        <label className='form-input-label'>{label}</label>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
    </div>
);

export default FormInput;