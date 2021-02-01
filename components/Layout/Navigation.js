import React, {useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import {FirebaseContext} from '../../firebase';

const Nav = styled.nav`

    min-width: 350px;
    margin-top: .5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    @media(min-width:768px){
        padding-left: 2rem;
        flex-direction: row;;
    }


    a{
        font-size: 1.8rem;
        color: #6F6F6F;
        font-family: 'PT Sans', sans-serif;

        &:last-of-type{
            margin-right:0;
        }
        @media(min-width:768px){
            margin-left: 2rem;
        }
    }
`;

const Navigation = () => {

    const {usuario} = useContext(FirebaseContext);

    return (
        
        <Nav>
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/populares"><a>Populares</a></Link>
            {usuario && (<><Link href="/recetas"><a>Agregar Receta</a></Link>
            <Link href="/my-recipes"><a>Mis Recetas</a></Link></>)}
        </Nav>
    )
}

export default Navigation
