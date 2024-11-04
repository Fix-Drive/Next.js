import Link from "next/link";
import carroFundo from '../../images/carroFundo.png'
import { BackgroundImage, BannerContainer, BannerDescription, BannerText, BannerTitle, ButtonBanner,  } from "../styles/Banner";
import Image from "next/image";

export default function Banner() {
    return (
        <BannerContainer>
            <BackgroundImage>
                <Image 
                src={carroFundo} 
                layout="fill" 
                objectFit="cover" 
                alt="Banner background"
                />
            </BackgroundImage>
            <BannerDescription>
                <div>
                    <BannerTitle>Mecânico sem Fronteiras</BannerTitle>
                    <BannerText className="description">Conte com um serviço mecânico que une tecnologia e soluções eficientes.</BannerText>
                </div>
                <Link href={'/consultar'} className="w-10">
                    <ButtonBanner>Cadastrar</ButtonBanner>
                </Link>
            </BannerDescription>
        </BannerContainer>
    );
}
