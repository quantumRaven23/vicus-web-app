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
import CustomButton from '../custom-button/custom-button.component';
//Data
import ITEM_DATA from './item.data';

//Styles
import './card-list.styles.scss';

//Misc


class CardList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            items: ITEM_DATA,
            filterCategories:['']
        }
    }

    componentDidMount(){
        console.log()
    }

    handleChange=(e)=>{
        
        this.setState({'filterCategories':[e.target.value]});
    }

    handleFilter=(items)=>{
        const filters = this.state.filterCategories;
        if(filters.includes('')){
            return items
        }else{
            return items
            .filter((item)=>{
                for(var i=0;i<filters.length;i++){
                    if (item.applications.includes(filters[i])){
                        continue;
                    }else{
                        return false;
                    } 
                }
                return true;
            });
        }
    }

    render(){
        const items = this.state.items;
        const filteredItems = this.handleFilter(items);
        return(
            <div className='card-list' id='catalogo'>
                <div className='filter-button-container'>
                    <CustomButton 
                        onClick={this.handleChange} 
                        value=''
                    >
                        All
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Cocina'
                    >
                        Cocina
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Exterior'
                    >
                        Exterior
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Limpio'
                    >
                        Limpio
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Barras'
                    >
                        Barras
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Pulido'
                    >
                        Pulido
                    </CustomButton>
                </div>
                <div className='cards-container'>
                {
                    filteredItems
                    .map(({id,...otherCardListProps})=>(
                        <Card key={id} {...otherCardListProps}/>
                    ))
                }
                </div>
            </div>
        );
    }
}


export default CardList;