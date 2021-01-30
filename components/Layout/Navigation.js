import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Nav = styled.nav`
    padding-left: 2rem;
    min-width: 350px;
    margin-top: .5rem;


    a{
        font-size: 1.8rem;
        margin-left: 2rem;
        color: #6F6F6F;
        font-family: 'PT Sans', sans-serif;

        &:last-of-type{
            margin-right:0;
        }
    }
`;

const Navigation = () => {
    return (
        
        <Nav>
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/populares"><a>Populares</a></Link>
            <Link href="/recetas"><a>Agregar Receta</a></Link>
            <Link href="/my-recipes"><a>Mis Recetas</a></Link>
        </Nav>
    )
}

export default Navigation
