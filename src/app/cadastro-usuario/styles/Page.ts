import styled from "styled-components";

export const MainContainer = styled.main`
    background-color: var(--primary);
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100%;
    align-items: center;
    padding: 0 200px;

    @media (max-width: 667px) {
        grid-template-columns: 1fr;
        padding: 100px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: 1fr;
        padding: 10px;
    }
`;

export const ContentRight = styled.section`
    height: 70%;
    background-color: var(--primary-light);
    border-radius: 0 25px 25px 0;
    display: flex;
    margin-bottom: 120px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid black;

    @media (max-width: 667px) {
        height: 650px;
        width: 300px;
        margin-left: -60px;
        border-radius: 14px;
        margin-top: -50px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 600px;
        height: 800px;
        border-radius: 18px;
        margin-left: 10px;
    }

    h1 {
        color: var(--title);
        font-weight: 700;
        font-size: var(--title-size);
        margin-top: 10px;
    }
`
