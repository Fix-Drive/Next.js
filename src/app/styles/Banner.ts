
import styled from 'styled-components';

export const BannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 550px;

  &::before {
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media(max-width: 667px) {
    background-size: 550px; 
    height: 200px;
  }

  @media(min-width: 768px) and (max-width: 1024px){
    background-size: 550px;
    width: 550px;
    height: 200px;
  }

`;

 export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; 
`;


export const BannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  gap: 40px;
  color: #FDFDF5;
  position: absolute;

  @media(max-width: 667px){
    font-size: 10px;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 30px;

  @media(max-width: 667px){
    font-size: 14px;
  }
`;

export const BannerText = styled.p`
  font-size: 16px;
  margin-top: 20px;
  width: 550px;
  
  @media(max-width: 667px){
    font-size: 10px ;
    width: 300px;
  }
`;

export const ButtonBanner = styled.button`
  background-color: #71BCB9;
  width: 200px;
  color: #FFF;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  
  @media(max-width: 667px){
    width: 35px;
    height: 10px;
    font-size: 8px;
    text-align: center;
    margin-top: -20px;
  }
  
  
`;
