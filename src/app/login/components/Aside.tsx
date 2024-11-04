"use client"
import logoFix from '../../../images/logoLogin.png'
import seta from '../../../images/seta.png'
import Link from "next/link";
import { AsideContainer, Button, ImageContainer, SetaContainer } from "../styles/Aside";
import Image from 'next/image';

export default function Aside() {
    return(
        <AsideContainer>
            <ImageContainer>
                <Image src={logoFix} alt="Logo FixDrive" />
            </ImageContainer>
            
           
                <Button name="cadastrar">
                    <Link href={'/cadastro'}>Cadastre-se</Link>
                </Button>
           

            <SetaContainer>
                    <Link href={'/'}>
                        <Image src={seta} alt="Voltar" />
                    </Link>
            </SetaContainer>
        </AsideContainer>
    )
}