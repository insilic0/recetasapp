import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import {css} from '@emotion/react';
import firebase from '../firebase';

import {StyledField, StyledSubmit, Formulario, Error} from '../components/UI/Formulario';

import useValidacion from '../hooks/useValidacion';
import validateRegister from '../validation/validateRegister';
import Router from 'next/router';

const INITIAL_STATE = {
    username:'',
    email:'',
    password:'',
    repeatPass: ''
}

const Register = () => {

    const {values, errors, handleSubmit, handleChange, handleBlur} = useValidacion(INITIAL_STATE, validateRegister, register );
    
    const {username, email, password, repeatPass}= values;

    const [error, setError] = useState(false);

    async function register(){
        try {
            await firebase.userRegister(username, email, password);
            Router.push('/');
        } catch (error) {
            console.error('Hubo un error al crear el usuario', error.message);
            setError(error.message);
        }
    }

    return (
        <Layout>
            <h1
                css={css`
                    text-align: center;
                `}
            >Regístrate</h1>

            <div
                css={css`
                    text-align: center;
                `}
            >
                <img width="170" src="static/font-awesome-icons/users-solid.svg"></img>
            </div>

            <Formulario
                onSubmit={handleSubmit}
            >

                <StyledField
                    error={errors.username ? true : false}
                >
                    <label htmlFor="username">Nombre</label>
                        <input
                            type="username"
                            id="username"
                            placeholder="Tu Nombre uwu"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            onBlur ={handleBlur}
                        />
                </StyledField>

                {errors.username && (<Error>{errors.username}</Error>)}
                {error && (<Error>{error}</Error>)}

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

                {errors.email && (<Error>{errors.email}</Error>)}

                <StyledField
                    error={errors.password ? true : false}
                >
                    <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            onBlur ={handleBlur}
                        />
                </StyledField>

                {errors.password && (<Error>{errors.password}</Error>)}

                <StyledField
                    error={errors.repeatPass ? true : false}
                >
                    <label htmlFor="repeatPass">Repite tu contraseña</label>
                        <input
                            type="password"
                            id="repeatPass"
                            name="repeatPass"
                            value={repeatPass}
                            onChange={handleChange}
                            onBlur ={handleBlur}
                        />
                </StyledField>

                {errors.repeatPass && (<Error>{errors.repeatPass}</Error>)}

                <StyledSubmit
                    type="submit"
                    value="Regístrame nomá bby"
                >
                   
                </StyledSubmit>

            </Formulario>
            

        </Layout>
    )
}

export default Register;
