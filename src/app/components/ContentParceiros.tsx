import Image from "next/image";
import { ConteudParceiros, ImgParceiros, SectionParceiros } from "../styles/ContentParceiros";
import portoSeguro from '../../images/portoSeguro.png'
import fiap from '../../images/fiap.png'

export default function ContentParceiros() {
    return (
        <SectionParceiros>
            <ConteudParceiros>
                <h2>Parceria com <span>empresas</span> renomadas em todo o <span>Brasil.</span></h2>
                <p>Nossas parcerias com a Porto Seguro e a FIAP representam excelência e confiança, 
                    trazendo o melhor em qualidade e inovação para nossos serviços</p>
            </ConteudParceiros>
            
            <ImgParceiros>
                <Image src={portoSeguro} alt="Logo Porto Seguro" />
                <Image src={fiap} alt="Logo FIAP" />
            </ImgParceiros>
        </SectionParceiros>
    );
}
