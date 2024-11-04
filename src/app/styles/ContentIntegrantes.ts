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
  flex: 1;
  margin: 0 10px;
  max-width: 33%;
`;

export const Image = styled.image`
  width: 100%;
  height: auto;
  max-width: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImgLaura = styled(Image)`
  width: 400px;
  height: 360px;
`;

export const ImgGabriela = styled(Image)`
  width: 300px;
  height: 370px;
`;

export const ImgPaolla = styled(Image)`
  width: 300px;
  height: 370px;
`;
