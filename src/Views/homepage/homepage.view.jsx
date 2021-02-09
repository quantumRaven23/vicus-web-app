/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 22 2021
 *  File : homepage.view.jsx
 *  Project : Vicus
 *******************************************/
//React
import React from 'react';

//Components
import MarkdownTextOne from '../../Components/TextComponents/MarkdownTextOne.component';
import MarkdownTextTwo from '../../Components/TextComponents/MarkdownTextTwo.component';
import CardList from '../../Components/CardList/card-list.component';
import MarkdownTextThree from '../../Components/TextComponents/MarkdownTextThree.component';
import EmailForm from '../../Components/EmailForm/email-form.component';

//Styles
import './homepage.styles.scss'

//Misc
import {useMediaQuery} from 'react-responsive';

const HomePage =()=>{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return(
    <div className='homepage'>
        <MarkdownTextOne isTabletOrMobile ={isTabletOrMobile}/>
        <MarkdownTextTwo isTabletOrMobile ={isTabletOrMobile}/>
        <div className='card-list-container'>
            <CardList className='cardlist'/>
        </div>
        <MarkdownTextThree />
        <div className='email-form-container'>
            <EmailForm isTabletOrMobile ={isTabletOrMobile}/>
        </div>
    </div>
    );
};

export default HomePage;