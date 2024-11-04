import Link from "next/link";
import { FooterContainer, FooterMenu, FooterMenuItem, FooterMenuList } from "../styles/Footer";
import logoFooter from '../../images/logoFixDrive.png'
import Image from "next/image";
export default function Footer() {
    return (
        <FooterContainer>
            <Image src={logoFooter} alt="FixDrive Logo" />
            <FooterMenu>
                <FooterMenuList>
                    <FooterMenuItem><Link id='menu-color' href={"/saiba-mais"}>Saiba mais</Link></FooterMenuItem>
                    <FooterMenuItem><Link href={"/manutencao"}>Manutenção</Link></FooterMenuItem>
                    <FooterMenuItem><Link href={"/consultar"}>Veículos</Link></FooterMenuItem>
                </FooterMenuList>
            </FooterMenu>
        </FooterContainer>
    );
}