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
        border: 1px solid ${props => props.error ? 'red' : '#e1e1e1'};
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

export const Error = styled.p`  
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 3rem;
  border-radius: 1rem;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2.2rem;
  text-align: center;
  width: 100%;
  color: #FFF;
  background-color: red;
  
  @media (min-width:768px) {
      width: auto;
      top: 30px;
      right: 10px;
      left: auto;
}
`;