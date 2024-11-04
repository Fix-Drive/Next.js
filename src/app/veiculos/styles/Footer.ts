import Link from "next/link";
import styled from "styled-components";


export const FooterContainer = styled.footer`
  padding: 20px;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  
 
`;

export const FooterLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit; 
  
  img {
    width: 50px;
  }

  
`;

export const ChatbotImage = styled.div`
  margin-left: 1390px;
  
  img {
    width: 50px;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    margin-left: -100px;
  }
  
`;
