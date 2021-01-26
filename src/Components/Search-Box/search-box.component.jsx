/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : search-box.component.jsx
 *  Project : Vicus
 *******************************************/
//React
import React from 'react';

//Components
import CollectionItem from '../collection-item/collection-item.component'

//Styles
import'./search-box.styles.css'

//Misc.


export const SearchBox = ({placeholder,handleChange}) => (
     <input
        className='search' 
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        />
)
