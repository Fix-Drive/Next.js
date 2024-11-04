import styled from "styled-components";

export const SectionParceiros = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

export const ConteudParceiros = styled.div`
  padding: 200px 95px;
  display: flex;
  text-align: right;
  flex-direction: column;
  margin-right: 70px;

  @media (max-width: 667px) {
    font-size: 10px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    span {
      color: #71BCB9; /* Destaque com a cor primária */
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

 
`;

export const ImgParceiros = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;

  img {
    width: 200px;
    &:first-child {
      margin-right: 30px; /* Espaçamento entre as imagens */
    }
  }
`;
