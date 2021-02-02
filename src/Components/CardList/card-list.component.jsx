/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 22 2021
 *  File : collection-preview.component.jsx
 *  Project : Vicusa
 *******************************************/


//React
import React from 'react';

//Components
import {Card} from '../card/card.component.jsx'

//Data
import ITEM_DATA from './item.data';

//Styles
import './card-list.styles.scss';

//Misc


class CardList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            items: ITEM_DATA
        }
    }

    render(){
        const {items} = this.state;
        return(
            <div className='card-list'>
                {
                    items
                    .map(({id,...otherCardListProps})=>(
                        <Card key={id} {...otherCardListProps}/>
                    ))
                }
            </div>
        );
    }
}


export default CardList;