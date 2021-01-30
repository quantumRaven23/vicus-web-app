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
import MarkdownText from '../../Components/markdown-text/markdown-text.component';

//Styles
import './homepage.styles.scss'

//Misc
const HomePage =()=>(
    <div className='homepage'>
        <MarkdownText/>
        <div  className='motto'>
            <h1>
                {"Acentos  \nque hacen el \nproyecto"}
            </h1>
            <p>
                {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaaliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}
            </p>
        </div>
        <div className='card-list-container'>
            <CardList className='cardlist'/>
        </div>
    </div>
);

export default HomePage;