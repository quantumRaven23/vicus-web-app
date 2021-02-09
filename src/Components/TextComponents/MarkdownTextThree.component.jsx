/******************************************
 *  Author : quantumRaven23   
 *  Created On : Mon Feb 08 2021
 *  File : MarkdownTextThree.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
//Styles
//Misc

const MarkdownTextThree =()=>{
    return(
        <div className='md3-container'>
            <div className='md3-text'>
                <h1>
                    {
                        'Cuentanos\n   tu proyecto'
                    }
                </h1>
                <p>
                    {
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet\ndolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit\nlobortis nisl ut aliquip ex ea commodo consequat.'
                    }
                </p>
            </div>
            <div className='md3-footer'/>
        </div>
    );
};

export default MarkdownTextThree;