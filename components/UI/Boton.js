import styled from '@emotion/styled';

const Boton = styled.a`

    display: block;
    font-weight: 700;
    border-radius: 20px;
    text-transform: uppercase;
    transition: .5s ease;
    padding: .8rem 2rem;
    margin: 2rem;
    text-align: center;
    background-color: ${props => props.bgColor ? 'grey' : '#6A26CD'};
    color: 'white';
    box-shadow: 2px 2px 1px #b6b6b6;
    
   

    &:hover{
        cursor: pointer;
        background-color: ${props => props.bgColor ? '#6A26CD'  : 'grey' };
        color: ${props => props.bgColor ? 'white' : 'white'};
        box-shadow: none;
    }

    @media(min-width:768px){

        &:last-of-type{
        margin-right: 0;
        }
    }
    
`

export default Boton;