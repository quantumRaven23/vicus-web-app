/******************************************
 *  Author : quantumRaven23   
 *  Created On : Sat Jan 30 2021
 *  File : email-form.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
//Styles
//Misc



class EmailForm extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    handleSubmit =()=>{

    }

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({ [name] : value });
    };

    render(){

        return(
            <div>
                <h2>{'Cuentanos\ntu proyecto.'}</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <form>
                    <FormInput
                        name='correo'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Correo'
                        required
                    />
                    <FormInput
                        name='contacto'
                        type='text/plain'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Contacto'
                        required
                    />
                    <FormInput
                        name='comentario'
                        type='text/plain'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='En que te podemos ayudar'
                        required
                    />
                </form>
            </div>  
        );
    };
};

export default EmailForm;