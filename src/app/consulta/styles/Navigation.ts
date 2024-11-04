import styled from "styled-components";

export const NavWrapper = styled.div`
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


export const ImageContainer = styled.div`
    margin-top: 223px;

    img {
        width: 150px;
    }

   
`;


export const SetaContainer = styled.span`
    margin-top: 140px;
    margin-right: 300px;

    img {
        width: 30px;
    }

`;
