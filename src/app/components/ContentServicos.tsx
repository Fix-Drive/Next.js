import Image from "next/image";
import { ContentServicoContainer, ImageContent, Title } from "../styles/ContentServicos";
import atendimentoMec from '../../images/atendimento.png'
import diagnVirtuais from  '../../images/diagnosticos.png'

export default function ContentServico() {
    return (
        <ContentServicoContainer>
            <Title>
                <h2>Serviços de atendimento mecânico <span>simplificados</span></h2>
            </Title>
            <ImageContent>
                <div>
                    <Image src={atendimentoMec} alt="Atendimento Mecanico"/>
                </div>
                <div>
                    <Image src={diagnVirtuais} alt="Diagnósticos virtuais" />
                </div>
            </ImageContent>
        </ContentServicoContainer>
    );
}
