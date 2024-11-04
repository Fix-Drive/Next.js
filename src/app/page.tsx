"use client"
import Banner from "./components/Banner";
import ContentDashboard from "./components/ContentDashboard";
import ContentIntegrantes from "./components/ContentIntegrantes";
import ContentParceiros from "./components/ContentParceiros";
import ContentServico from "./components/ContentServicos";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home(){



  return(
      <div>
          <Header/>
          <Banner/>
          <ContentServico/>
          <ContentDashboard/>
          <ContentParceiros/>
          <ContentIntegrantes/>
          <Footer/>    
      </div>

  )
}