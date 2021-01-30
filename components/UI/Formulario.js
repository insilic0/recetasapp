import styled from '@emotion/styled';

export const Formulario = styled.form`

    max-width: 600px;
    width: 95%;
    display: flex;
    flex-direction: column;
    margin: 4rem auto 0 auto;
`;

export const StyledIcon = styled.div`
    text-align: center;
    img{
        width: 100px;
        height:
    }
`;

export const StyledField = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label{
        flex: 0 0 150px;
        font-size: 1.8rem;
        font-family: 'PT Sans', sans-serif;
    }
    input{
        flex: 1;
        padding: 1rem;
        border: 1px solid #e1e1e1;
        border-radius: 20px;
    }
`;

export const StyledSubmit = styled.input`
    background-color: #e1e1e1;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: black;
    font-size: 1.8rem;
    border: none;
    border-radius: 20px;
    font-weight: 700;
    transition: .5s ease;
    &:hover{
        cursor: pointer;
        background-color: #6a26cd;
        color: white;
    }
`;