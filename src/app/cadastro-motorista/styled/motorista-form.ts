'use client'

import styled from "styled-components";

export const FormContainer = styled.div`
    padding: 20px;
    border-radius: 8px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px; 
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 9px;
    font-size: 16px;
    width: 332px;
    font-family: poppins;
    letter-spacing: 1px;
`;

export const Button = styled.button`
    background-color: #71BCB9;
    color: white;
    border: none;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 90px;
    margin-left: 113px;
`;
