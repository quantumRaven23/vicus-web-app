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
import {Confirm,Notify} from 'notiflix';

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
        Confirm.Show(
            'Seguro que quieres continuar?',
            'El correo sera enviado a nuestros ejecutivos al confirmar.',
            'Si',
            'No',
            ()=>{
                console.log('User Pressed Yes')
                try{
                    emailjs.sendForm('service_52b54kw', 'template_m9g5uwg', event.target, 'user_F1XYfaRSVMCsu1itKFJzn')
                    .then((result)=>{
                        result.text==='OK' ? 
                        Notify.Success('Tu correo fue enviado!') 
                        :
                        Notify.Failure('Algo salio mal. Vuelve a intentar despues.')
                    })
                    this.setState({email:'',contact:'',message:''})
                }catch(error){
                    console.log(error);
                }
            },
            ()=>{
                console.log('User Pressed No')
            },
            { 
                titleColor:'#374747', 
                okButtonBackground:'#374747',
            }
        );
    }

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({ [name] : value });

    };

    render(){
        const isTabletOrMobile= this.props.isTabletOrMobile;
        return(
            <div className={`email-form${isTabletOrMobile ? '-mobile':''}`} id='tuproyecto'>
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
                        label='Numero de Telefono/ Contacto'
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
                        <CustomButton isLight>
                            Enviar
                        </CustomButton>
                    </div>
                </form>
            </div>  
        );
    };
};

export default EmailForm;