'use client'
import styled from "styled-components";

export const MainContainer = styled.main`
    background-color: #71BCB9;
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    padding: 20px 50px; 
    height: 100vh;

    @media (max-width: 667px) {
        grid-template-columns: 1fr;
        padding: 10px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: 1fr;
        padding: 10px;
    }
`;

export const ContentRight = styled.section`
    height: 70%;
    border-radius: 0 25px 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid black;
    padding: 20px;
    background-color: #D3E9E3;

    @media (max-width: 667px) {
        height: auto;
        width: 100%;
        border-radius: 14px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        height: auto;
        border-radius: 18px;
        margin-left: 0;
    }

    h1 {
        color: var(--title);
        font-weight: 700;
        font-size: var(--title-size);
    }
`;
