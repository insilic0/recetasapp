import React, {useState} from 'react';
import Router from 'next/router';
import Layout from '../components/Layout/Layout';
import {css} from '@emotion/react';

import { Formulario, StyledField, StyledIcon, StyledSubmit } from '../components/UI/Formulario';

//Validations
import useValidacion from '../hooks/useValidacion';
import validateLogin from '../validation/validateLogin';

const INITIAL_STATE = {
    email:'',
    password: ''
};

const Login = () => {
    
    const {values, errors, handleSubmit, handleChange, handleBlur} = useValidacion(INITIAL_STATE, validateLogin, login);
    const {email, password} = values;

    function login(){
        console.log("Logging in");
    }

    return (
        <Layout>
            <>
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 5rem;
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
                    <StyledField>
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
                    
                    <StyledField>
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
