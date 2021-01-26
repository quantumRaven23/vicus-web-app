/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : card.component.jsx
 *  Project : Vicus
 *******************************************/

//React
import React from 'react';

//Components
import './card.styles.scss'
import {MaterialUses} from '../material-uses/material-uses.component';

//Styles

//Misc

export const Card = ({id,imageurl,name,description,application}) =>(
    <div className='card'>
        <img className='card-image'
            alt={name}
            src={imageurl}
        />
        <div className='card-body'>
            <div className='card-title'>{name}</div>
            <div className='card-content'>{description}</div>
        </div>
        <div className='card-bottom'>
            <MaterialUses usedFor={application}/>
        </div>

    </div>
);