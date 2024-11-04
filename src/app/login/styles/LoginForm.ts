import styled from "styled-components";

// Container principal para o formulário de login
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100vh;
`;



// Estilo do formulário
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
    

    @media (max-width: 991px) {
        max-width: 264px;
    }

    @media (max-width: 667px) {
        margin-right: 100px;
    }
`;

// Grupo de inputs (nome e senha)
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

// Input personalizado
export const Input = styled.input`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 16px;
    width: 100%;

    @media (max-width: 991px) {
        font-size: 14px;
    }
    
    @media (max-width: 667px) {
        font-size: 12px;
        width: 200px;
    }
`;

// Área de ação com o botão
export const FormAction = styled.div`
    display: flex;
    justify-content: center;
`;

// Botão estilizado
export const Button = styled.button`
    padding: 12px;
    background-color: #71bcb9;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 50%;

    &:hover {
        background-color: #5aa7a3;
    }

    a {
        color: white;
        text-decoration: none;
    }

    @media (max-width: 991px) {
        width: 100px;
    }

    @media (max-width: 667px) {
        width: 120px;
        margin-left: 100px;
    }
`;
