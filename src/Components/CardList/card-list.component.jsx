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
// import {database} from '../../firebase/firebase.utils';


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
        // database.ref("ITEM_DATA").once("value").then((snapshot)=>{
        //     // snapshot.forEach((childSnapshot)=>{
        //     //     console.log('value',childSnapshot.val());
        //     // });

        //     console.log(snapshot.map());
        // });
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
                    if (item.applications[filters[i]]===true){
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
                        value='Pulido'
                    >
                        Pulido
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Lether'
                    >
                        Leather
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Natural'
                    >
                        Natural
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Quarzo'
                    >
                        Cuarzo
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Cocinas'
                    >
                        Cocinas
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Mesas'
                    >
                        Mesas
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Exterior'
                    >
                        Exterior
                    </CustomButton>
                    <CustomButton 
                        onClick={this.handleChange}
                        value='Interior'
                    >
                        Interior
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