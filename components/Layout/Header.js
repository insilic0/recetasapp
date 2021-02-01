import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Link from 'next/link';

import Navigation from '../Layout/Navigation';

import Buscar from '../UI/Buscar';
import Boton from '../UI/Boton';

import {FirebaseContext} from '../../firebase';

const ContenedorHeader = styled.div`
    margin: 0 auto;
    padding: 0 .5rem;

    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.img`
    width: 5rem;
    height: 5rem;

    &:hover{
        cursor: pointer;
    }
`;

const StyledBurgerButton = styled.div`
    width: 40px;
    display: block;
    text-align: right;
    margin: 1rem 0 2rem 0;
    background-color: black;

    span{
        height: 8px;
        margin-bottom: 6px;
        background-color: white;
        display: block;
    }
    &:hover{
        cursor: pointer;
    }
    @media(min-width:768px){
        display: none;
    }
`;

const Header = () => {

    const {usuario, firebase} = useContext(FirebaseContext);

    const [selected, setSelected] = useState(false);



    return (
        <header>
            <ContenedorHeader>
                <div
                    css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    @media(max-width: 768px){
                        display: flex;
                        flex-direction: column;
                      
                    }
                `}
                >
                    <Link href="/"><Logo src="favicon.ico"></Logo></Link>

                    <StyledBurgerButton onClick={()=>setSelected(!selected)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </StyledBurgerButton>
     
                    {selected ? (null) :                   
                        <>
                        <Buscar />
                        
                        <Navigation />
                        </>
                   }
                
                </div>

                <div
                     css={css`
                     display: flex;
                     align-items: center;
                     justify-content: space-evenly;
                     min-height: 1rem;            
                 `}
                >
                    {selected ? (null) : 
                    
                        <>
    
                        { usuario ? (
                        <>
                         
                                <p
                                css={css`
                                    margin-right: 2rem;
                                    margin-left: 2rem;
                                    display: flex;                                                  
                                `}
                            >Hola: {usuario.displayName}</p>
                           
                            <Boton
                                bgColor="true"
                                 onClick={()=> firebase.logOut()}
                            >Cerrar Sesión</Boton>
                        </>
                    ) : (
                        <>
                        <Link href="/login">
                            <Boton
                                
                        >   Login</Boton>
                         </Link>

                    <Link href="/register">
                        <Boton
                            bgColor="false"
                        >Crear Cuenta</Boton>
                    </Link>
                        </>
                    ) }
                    </>   
                     }
                </div>
            </ContenedorHeader>
        </header>
    )
}

export default Header;
