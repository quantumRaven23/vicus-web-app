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

export const Card = ({imageurl,name,description,applications}) =>{
    return(
        <div className='card'>
            <img className='card-image'
                alt={name}
                src={`https://firebasestorage.googleapis.com/v0/b/vicus-demo-bb2a5.appspot.com/o/${escape(imageurl)}?alt=media&token=1a5b3697-8847-4fa0-9ade-81b25e611542`}
            />
            <div className='card-body'>
                <div className='card-title'>{name}</div>
                <div className='card-content'>{description}</div>
            </div>
            <div className='card-bottom'>
                <MaterialUses usedFor={applications}/>
            </div>

        </div>
    );
};