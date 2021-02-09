/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 22 2021
 *  File : header.component.jsx
 *  Project : Vicus
 *******************************************/
//React and Libraries
import React from 'react';

//Components

//Styles
import './header.styles.scss';

//Misc
import logo from '../../Assets/vicus_logo_alt.png';
import {useMediaQuery} from 'react-responsive';

const Header =()=>{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return(
        <div className={`header${isTabletOrMobile ? '-mobile':''}`} id='home'>
            <a href='#home' className='logo-container'>
                <img alt='Vicus Logo' className='logo' src={logo}/>
            </a>
            <div className='options'>
                <a className='option' href='#catalogo'> CATALOGO</a>
                <a className='option' href='#tuproyecto'>TU PROYECTO</a>
                <a className='option' href='#tuproyecto'> PROYECTOS</a>
                <a className='option' href='#conocenos'> CONOCENOS</a>
            </div>
        </div>
    );
};

export default Header;