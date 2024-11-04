import styled from 'styled-components';

// Estilização do container principal da seção
export const ContentServicoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 80px;
  height: 600px;

  @media (max-width: 667px) {
    width: 375px;
    height: 160px;
    padding: 5px;
  }
`;

// Estilização do título da seção
export const Title = styled.div`
  margin-left: 920px;

  h2 {
    text-align: right;
    width: 500px;
    
    span {
      color: #71BCB9;
    }

    @media (max-width: 667px) {
      font-size: 10px;
      width: 200px;
      margin-left: -761px;
      margin-top: -54px;
    }

    
  }

  @media(min-width: 768px) and (max-width: 1024px){
    font-size: 10px;
    margin-left: 30px;
    
  }
`;

// Estilização do container de imagens
export const ImageContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 300px;
  transition: transform 0.3s ease;

  div:hover {
    transform: scale(1.1);
  }

  @media (max-width: 667px) {
    gap: 50px;
    margin-top: -60px;
  }

  @media(min-width: 768px) and (max-width: 1024px){
    gap: 1px;
    margin-left: -200px;
  }
`;

// Estilização das imagens
export const Image = styled.img`
  width: auto;
  height: auto;

  @media (max-width: 667px) {
    width: 150px;
  }

  @media(min-width: 768px) and (max-width: 1024px){
    width: 150px;
  }
`;
