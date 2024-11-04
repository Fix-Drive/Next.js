import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  background-color: #EAF4ED;
  flex-direction: row;
  align-items: center;
  gap: 220px;
  justify-content: space-evenly;

  @media (max-width: 667px) {
    width: 300px;
    
  }
`;

export const ConteudDashboard = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  h2 {
    font-size: 24px;

    span {
      color: #71BCB9;
    }

    @media (max-width: 667px) {
      font-size: 10px;
      width: 200px;
      margin-top: -517px;
      margin-left: 15px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;

    @media (max-width: 667px) {
      font-size: 7px;
      width: 150px;
      margin-left: 15px;
    }
  }

  @media (max-width: 667px) {
    gap: 10px;
  }
`;

export const ImgDashboard = styled.div`
  img {
    width: 500px;
    margin-top: 92px;

    @media (max-width: 667px) {
      width: 150px;
      margin-left: -237px;
      margin-bottom: 975px;
    }
  }
`;