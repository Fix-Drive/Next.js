"use client"
import Aside from "./components/Aside";
import CadastroForm from "./components/CadastroForm";
import Header from "./components/Header";
import { ContentRight, MainContainer } from "./styles/Page";

export default function CadastroPage() {
    return (
      <MainContainer>
        <Aside />
        <ContentRight>
          <Header/>
          <CadastroForm />
        </ContentRight>
      </MainContainer>
    )
  }
  
  