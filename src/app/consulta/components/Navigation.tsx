
import seta from '../../../images/seta.png'
import carro from '../../../images/carro.png'
import { ImageContainer, NavWrapper, SetaContainer } from '../styles/Navigation';
import Link from 'next/link';
import Image from 'next/image';



export default function Navigation() {
    return (
        <NavWrapper>
            <ImageContainer>
                <Image src={carro} alt="Carro" />
            </ImageContainer>


            <SetaContainer>
                <Link id="seta" href={"/"}>
                    <Image src={seta} alt="Voltar" />
                </Link>
            </SetaContainer>


        </NavWrapper>
    );
}
