
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #4db6ac;
  border-radius: 20px;
  padding: 20px;
  margin-top: 10px;
  margin-left: 50px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px){
      width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 1024px){
    width: 700px;
    margin-left: 10px;
  }

  @media (max-width: 667px){
    width: 300px;
    height: 80px;
  }

`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-radius: 15px;
  margin-left: 10px;

  #menu img{
    display: none;
  }

  #cross img{
    display: none;
  }

  button img{
    display: none;
  }

  .navbar-brand img {
    width: 50px;
  }

  .nav-links {
    display: flex;
    margin-left: 350px;
    gap: 120px;
    list-style-type: none;

    li a {
      text-decoration: none;
      color: #000;
      font-weight: bold;

      &.active {
        color: #282e2e;
        background-color: #d3e9e3;
      }
    }
  }

  .perfil-usuario {
    display: flex;
    align-items: center;
    color: #000;
    margin-left: 310px;
    gap: 20px;

    .icone-usuario {
      background-color: #d3e9e3;
      border-radius: 15px;
      width: 15px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #71bcb9;
    }

   
  }
  

  @media (max-width: 768px) {
    .nav-links {
      display: none; /* Esconde o menu padrão em telas pequenas */
    }

    .perfil-usuario {
      display: none; /* Esconde o perfil do usuário em telas pequenas */
    }

    #menu img{
      display: block;
       /* Exibe o botão do menu para telas pequenas */
    }

    button {
      width: 50px;
      height: 60px;
      margin-left: 60px;
    }

    img {
      width: 50px;
      height: 60px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px){
    button {
      width: 50px;
      height: 60px;
      margin-left: 300px;
    }

    @media (max-width: 667px){
      button {
      width: 50px;
      height: 60px;
      margin-left: 10px;
    }
    }
  }
`;
export const MobileLinks = styled.div<{ menuOpen: boolean }>`
  display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none')};

  @media (max-width: 768px) {
    margin: 0 30px 20px;
    

    #links {
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: #d3e9e3;
      padding: 0 0 40px 20px;
      width: 100px;
      height: 70px;
      border-radius: 15px;
      margin-left: -50px;
    }

  }
`;