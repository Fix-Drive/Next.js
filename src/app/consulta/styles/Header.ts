import styled from "styled-components";

export const HeaderWrapper = styled.span`
    display: block;
    margin-top: 48px;
    margin-left: 66px;

    p {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 24px;
        color: #375857;
    }

    @media (max-width: 991px) {
        p {
            font-size: 15px;
        }
    }

    @media (max-width: 667px) {
        margin-left: -5px;
        p {
            font-size: 12px;
            margin-left: 10px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin-left: -100px;
        
        p {
            margin-left: 114px;
            font-size: 15px;
        }
    }
`;
