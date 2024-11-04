"use client"
import Aside from "./components/Aside";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import { ContentRight, MainContainer } from "./styles/Page";

export default function Login(){
    return(
        <MainContainer>
            <Aside />
            <ContentRight>
                <Header/>
                <LoginForm />
            </ContentRight>
        </MainContainer>
    )
}