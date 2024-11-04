'use client'

import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    p {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 24px;
        color: #375857;
        letter-spacing: 2px;
    }

    @media (max-width: 991px) {
        p {
            font-size: 18px;
        }
    }

    @media (max-width: 667px) {
        p {
            font-size: 16px;
        }
    }
`;
