import Image from "next/image";
import Link from "next/link";
import carro from "../../../images/carro.png";
import seta from "../../../images/seta.png";
import { ImageContainer, NavWrapper, SetaContainer } from "../styled/navigation";

export default function Navigation() {
    return (
        <NavWrapper>
            <ImageContainer>
                <Image src={carro} alt="Carro" width={150} height={150} />
            </ImageContainer>
            <SetaContainer>
                <Link href="/">
                    <Image src={seta} alt="Voltar" width={30} height={30} />
                </Link>
            </SetaContainer>
        </NavWrapper>
    );
}
