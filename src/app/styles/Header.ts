import styled from 'styled-components';

// Container principal do cabeçalho
export const HeaderContainer = styled.header`
  background-color: #000;
  padding: 50px;
  width: 100%;
  display: flex;
  align-items: center;


  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Barra de navegação principal
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .navbar-brand img {
    width: 200px;
  }

  .nav-links {
    display: flex;
    gap: 60px;
    list-style: none;
    margin-left: 800px;

    li a {
      text-decoration: none;
      color: #71BCB9;
    }

    @media (max-width: 768px) {
      display: none; /* Esconder links no mobile */
    }
  }

  /* Esconder os botões no desktop */
  #menu,
  #cross {
    display: none;
  }

  @media (max-width: 768px) {
    .navbar-brand img {
      width: 100px;
    }

    #menu {
      display: block;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

// Botões para ícones
export const ButtonLinks = styled.div`
  display: flex;
  gap: 35px;
  margin-right: 60px;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: none; /* Esconder ícones no mobile */
  }
`;

export const IconCar = styled.image`
  width: 60px;
  height: 60px;
  margin-left: 10px;
`;

export const IconUser = styled.image`
  width: 40px;
  height: 40px;
`;

export const MobileLinks = styled.div<{ menu_open: boolean }>`
  display: ${({ menu_open }) => (menu_open ? 'block' : 'none')};
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    position: absolute;
    top: 60px;
    left: 400px;

    #links {
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: #d3e9e3;
      padding: 0 0 40px 20px;
      width: 150px;
      height: 150px;
      border-radius: 15px;
      
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style: none;

      
      }
    }

`;
