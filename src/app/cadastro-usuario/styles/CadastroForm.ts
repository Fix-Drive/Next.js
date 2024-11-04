import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20%;
  

  
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 120px;
    

    @media (max-width: 991px) {
        max-width: 264px;
    }

    @media (max-width: 667px) {
        margin-left: -100px;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

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

export const Button = styled.button`
    padding: 12px;
    background-color: #71bcb9;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 50%;
    margin-left: 130px;

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
        margin-left: 120px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin-left: 100px;
    }
`;
