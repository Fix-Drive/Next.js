import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: black;
`;

export const FooterImage = styled.img`
  width: 200px;
  height: 80px;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterMenuItem = styled.li`
  a {
    color: white;
    display: flex;
    text-align: right;
    transition: color 0.3s ease;
    
    &:hover {
      color: #71BCB9;
    }
  }

  #menu-color {
    color: #71BCB9;
  }
`;
