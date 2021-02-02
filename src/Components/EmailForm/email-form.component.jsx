/******************************************
 *  Author : quantumRaven23   
 *  Created On : Sat Jan 30 2021
 *  File : email-form.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
import FormInput from '../form-input/form-input.component';
import TextInput from '../text-input/text-input.component';
import CustomButton from '../custom-button/custom-button.component';

//Styles
import './email-form.styles.scss';

//Misc
import emailjs from 'emailjs-com';

class EmailForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            nombre:'',
            email:'',
            contact:'',
            message:''
        }
    }

    handleSubmit =async event=>{
        event.preventDefault();
        try{
            emailjs.sendForm('', '', event.target, '')
            .then((result)=>{
                console.log(result.text);
            })
            this.setState({email:'',contact:'',message:''})
        }catch(error){
            console.log(error);
        }
    }

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({ [name] : value });

    };

    render(){

        return(
            <div className='email-form'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='name'
                        type='text/plain'
                        handleChange={this.handleChange}
                        value={this.state.name}
                        label='Nombre'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Correo'
                        required
                    />
                    <FormInput
                        name='contact'
                        type='text/plain'
                        handleChange={this.handleChange}
                        value={this.state.contact}
                        label='Contacto'
                        required
                    />
                    <TextInput
                        name='message'
                        type='text/plain'
                        handleChange={this.handleChange}
                        value={this.state.message}
                        label='En que te podemos ayudar?'
                        required
                    />
                    <div className='button-container'>
                        <CustomButton >
                            Enviar
                        </CustomButton>
                    </div>
                </form>
            </div>  
        );
    };
};

export default EmailForm;