/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 22 2021
 *  File : header.component.jsx
 *  Project : Vicus
 *******************************************/
//React and Libraries
import React from 'react';
import {Link} from 'react-router-dom';

//Components

//Styles
import './header.styles.scss';

//Misc
import logo from '../../Assets/vicus_logo_alt.png';

const Header =()=>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <img alt='Vicus Logo' className='logo' src={logo}/>
        </Link>
        <div className='options'>
            <Link className='option' to='/catalogo'>
                CATALOGO
            </Link>
            <Link className='option' to='/'>
                TU PROYECTO
            </Link>
            <Link className='option' to='/'>
                PROYECTOS
            </Link>
            <Link className='option' to='/'>
                CONOCENOS
            </Link>

        </div>
    </div>
);

export default Header;