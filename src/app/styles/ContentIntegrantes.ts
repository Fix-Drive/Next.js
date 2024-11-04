import styled from "styled-components";


export const SectionIntegrantes = styled.section`
  text-align: center;
  background-color: #EAF4ED;
  height: 550px;
  margin-top: 10px;
`;

export const TitleContent = styled.h2`
  margin-bottom: 10px;

`

export const IntegrantesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Integrante = styled.div`
  text-align: center;
  justify-content: center;
  flex: 1;
  font-size: 20px;
  margin: 0 30px;
  max-width: 33%;
`;

export const Image = styled.image`
  width: 50%;
  height: auto;
  max-width: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

