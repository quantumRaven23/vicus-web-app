/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 22 2021
 *  File : homepage.view.jsx
 *  Project : Vicus
 *******************************************/
//React
import React from 'react';

//Components
import CardList from '../../Components/card-list/card-list.component';


//Styles
import './homepage.styles.scss'

//Misc
const HomePage =()=>(
    <div className='homepage'>
        <div className='text-bundle'>
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
                <h3>rectificacion</h3>  
                <p>Lorem ipsum dolor sit
                    amet, consectetuer
                    adipiscing elit, sed diam
                    nonummy nibh</p>
            </div>
            <div className='text-item'>
                <h3>instalacion</h3>  
                <p>Lorem ipsum dolor sit
                    amet, consectetuer
                    adipiscing elit, sed diam
                    nonummy nibh</p>
            </div>
        </div>
        <div className='card-list-container'>
            <CardList className='cardlist'/>
        </div>
    </div>
);

export default HomePage