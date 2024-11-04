import styled from "styled-components";

export const FormContainer = styled.div`
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
    width: 80%;
    padding: 20px;
    border-radius: 10px;
    margin-left: 30px;
    

    @media (max-width: 991px) {
        max-width: 264px;
    }

    @media (max-width: 667px) {
        margin-right: 150px;
    }


    @media (min-width: 768px) and (max-width: 1024px) {
        margin-right: 250px;
        
    }

    
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;

    @media (max-width: 667px) {
        flex-direction: column;
        width: 100px;

        input{
            width: 210px;
            font-size: 10px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        input{
            width: 800px;
            
        }
    }

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
        width: 210px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 420px;
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
    width: 30%;
    margin-left: 200px;

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
        width: 110px;
        margin-left: 140px;
    }
`;

export const SearchButton = styled.button`
  background-color: #4db6ac;
  color: white;
  width: 100px;
  border: none;
  height: 40px;
  margin-top: 10px;
  font-size: 15px;
  border-radius: 5px;

  @media (max-width: 667px) {
        width: 60px;
        height: 40px;
        margin-left: 160px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 400px;
        height: 40px;
        margin-left: 200px;
    }
  
`;

