import styled from "styled-components";

// Container principal
export const AsideContainer = styled.aside`
    height: 70%;
    background-color: var(--secondary);
    border-radius: 25px 0 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid black;

    @media (max-width: 667px) {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
`;

// Imagem da logo
export const ImageContainer = styled.div`
    margin-top: 223px;

    img {
        width: 150px;
    }

 
`;

// Botão de cadastro
export const Button = styled.button`
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: var(--primary);
    color: white;
    font-size: 16px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: inherit;
    }


`;

// Container da seta
export const SetaContainer = styled.span`
    margin-top: 140px;
    margin-right: 300px;

    img {
        width: 30px;
    }


`;
