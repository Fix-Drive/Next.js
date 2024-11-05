"use client"
import Header from "./components/Header";
import MotoristaForm from "./components/MotoristaForm";
import Navigation from "./components/Navigation";
import { ContentRight, MainContainer } from "./styled/page";

export default function CadastroMotorista() {
    return (
        <MainContainer>
            <Navigation />
            <ContentRight>
                <Header />
                <MotoristaForm />
            </ContentRight>
        </MainContainer>
    );
}
