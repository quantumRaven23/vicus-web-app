/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 22 2021
 *  File : homepage.view.jsx
 *  Project : Vicus
 *******************************************/
//React
import React from 'react';

//Components
import CardList from '../../Components/CardList/card-list.component';
import MarkdownText from '../../Components/MarkdownText/markdown-text.component';
import EmailForm from '../../Components/EmailForm/email-form.component';

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
        <div className='email-form-container'>
            <EmailForm/>
        </div>
    </div>
);

export default HomePage;