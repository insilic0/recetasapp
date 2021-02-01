import React, {useState} from 'react';
import Router from 'next/router';
import Layout from '../components/Layout/Layout';
import {css} from '@emotion/react';

import { Formulario, StyledField, StyledIcon, StyledSubmit, Error } from '../components/UI/Formulario';

//Validations
import useValidacion from '../hooks/useValidacion';
import validateLogin from '../validation/validateLogin';

import firebase from '../firebase';

const INITIAL_STATE = {
    email:'',
    password: ''
};

const Login = () => {
    
    const {values, errors, handleSubmit, handleChange, handleBlur} = useValidacion(INITIAL_STATE, validateLogin, login);
    const {email, password} = values;

    const [error, setError] = useState(false);


    async function login(){
        try {
            await firebase.userLogin(email, password);
            Router.push('/');
        } catch (error) {

            if(error.code === "auth/user-not-found"){
                setError('El usuario no existe');
            }
            else{
                console.log('Error al iniciar sesión', error.message);
            }
            
            
        }
    }

    return (
        <Layout>
            <>
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 2rem;
                    `}
                >
                    Iniciar Sesión
                </h1>

                <StyledIcon>
                    <img src="static/font-awesome-icons/user-solid.svg"></img>
                </StyledIcon>

                <Formulario
                    onSubmit={handleSubmit}
                >
                    <StyledField
                        error={errors.email ? true : false}
                    >
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="ejemplo@dominio.cl"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            onBlur ={handleBlur}


                        />
                    </StyledField>
                                        
                    <StyledField
                         error={errors.password ? true : false}
                    >
                        <label htmlFor="password">Contraseña</label>
                        <input                
                            type="password"
                            id="password"
                            placeholder="Tu contraseña"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </StyledField>
                 
                    {error && (<Error>{error}</Error>)}


                    <StyledSubmit
                        type="submit"
                        value="Iniciar Sesión"
                    />

                </Formulario>
            </>
        </Layout>
    )
}

export default Login
