import { Integrante, IntegrantesContainer, SectionIntegrantes, TitleContent } from "../styles/ContentIntegrantes";
import fotoPaolla from '../../images/fotoPaolla.png'
import fotoLaura from '../../images/fotoLaura.png'
import fotoGabi from '../../images/fotoGabi.png'
import Image from "next/image";

export default function ContentIntegrantes() {
    return (
        <SectionIntegrantes>
            <TitleContent>Time de idealização</TitleContent>
            <IntegrantesContainer>
                <Integrante>
                    <h3>Paolla Dionísio Cassiano</h3>
                    <Image src={fotoPaolla} alt="Imagem Paolla" />
                    <h3>RM556430</h3>
                </Integrante>
                <Integrante>
                    <h3>Laura Amadeu Soares</h3>
                    <Image src={fotoLaura} alt="Imagem Laura" />
                    <h3 className="rm">RM556690</h3>
                </Integrante>
                <Integrante>
                    <h3>Gabriela de Sousa Reis</h3>
                    <Image src={fotoGabi} alt="Imagem Gabriela" />
                    <h3>RM558830</h3>
                </Integrante>
            </IntegrantesContainer>
        </SectionIntegrantes>
    );
}
