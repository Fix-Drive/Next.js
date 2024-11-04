"use client"
import Footer from "../components/Footer";
import Header from "../components/Header";
import DetalhesVeiculo from "./components/DetalhesVeiculo";
import ListaPrecos from "./components/ListaPrecos";

export default function Consultar(){
    return(
        <main>
            <Header />
            
                <DetalhesVeiculo />
                <ListaPrecos/>
            
            <Footer />
        </main>
    )
}