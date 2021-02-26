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
                <span className={`${usedFor['Cocinas'] ? 'dot-black':'dot-white'}`}></span>
                <span className='dot-text'>Cocinas</span>
            </div>
            <div className='dot-content'>
                <span className={`${usedFor['Mesas'] ? 'dot-black':'dot-white'}`}></span> 
                <span className='dot-text'>Mesas</span>
            </div>
            <div className='dot-content'>
                <span className={`${usedFor['Exterior'] ? 'dot-black':'dot-white'}`}></span>
                <span className='dot-text'>Exterior</span>
            </div>
            <div className='dot-content'>
                <span className={`${usedFor['Interior'] ? 'dot-black':'dot-white'}`}></span>
                <span className='dot-text'>Interior</span>
            </div>
        </div>
    );
};
