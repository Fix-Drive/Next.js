import { ConteudDashboard, ImgDashboard, Section } from "../styles/ContentDashboard";
import grafico from '../../images/grafico.png'
import Image from "next/image";

export default function ContentDashboard() {
    return (
        <Section>
            <ConteudDashboard>
                <h2>Tenha visão completa de todos os seus veículos em <span>Tempo Real!</span></h2>
                <p>Nosso sistema intuitivo fornece informações detalhadas e gráficos de desempenho para acompanhar o estado de seus automóveis. 
                    Gerencie sua frota com facilidade e tome decisões informadas sobre manutenção. Cadastre-se agora para começar!</p>
            </ConteudDashboard>
            <ImgDashboard>
                <Image src={grafico} alt="Gráfico Dashboard" />
            </ImgDashboard>
        </Section>
    );
}
