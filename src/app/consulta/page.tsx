"use client"

import FormCadastro from "./components/FormCadastro";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { ContentRight, MainContainer } from "./styles/Page";

export default function CadastroVeiculo() {
    return (
        <MainContainer>
            <Navigation/>
            <ContentRight>
                <Header/>
                <FormCadastro/>
            </ContentRight>
        </MainContainer>
    );
}