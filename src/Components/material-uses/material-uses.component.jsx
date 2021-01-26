/******************************************
 *  Author : quantumRaven23   
 *  Created On : Sun Jan 24 2021
 *  File : material-uses.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components    
//Styles
import './material-uses.styles.scss'

//Misc

export const MaterialUses =({usedFor})=>{
    return(

        <div className='dots'>
            <div className='dot-content'>
                <span className={`${usedFor[0] ? 'dot-black':'dot-white'}`}></span>
                <span className='dot-text'>Cocina</span>
            </div>
            <div className='dot-content'>
                <span className={`${usedFor[1] ? 'dot-black':'dot-white'}`}></span> 
                <span className='dot-text'>Exterior</span>
            </div>
            <div className='dot-content'>
                <span className={`${usedFor[2] ? 'dot-black':'dot-white'}`}></span>
                <span className='dot-text'>Limpio</span>
            </div>
            <div className='dot-content'>
                <span className={`${usedFor[3] ? 'dot-black':'dot-white'}`}></span>
                <span className='dot-text'>Barras</span>
            </div>
            <div className='dot-content'>
                <span className={`${usedFor[4] ? 'dot-black':'dot-white'}`}></span>
                <span className='dot-text'>Pulido</span>
            </div>
        </div>
    );
};
