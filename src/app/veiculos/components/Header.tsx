
import fixdrive from '../../../images/logoLogin.png'
import Link from "next/link";
import Image from 'next/image';
import { HeaderContainer, NavbarContainer } from '../styles/Header';

export default function Header() {
  
    return (
    <HeaderContainer>
        <NavbarContainer>
            <div className='navbar-brand'>
                <Image src={fixdrive} alt="Logo FixDrive" />
            </div>
            <ul className='nav-links'>
                <li>
                    <Link href={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link href={'/manutencao'}>Manutenção</Link>
                </li>
                <li>
                    <Link href={'/consultar'} className='active'>Veículos</Link>
                </li>
            </ul>
            <div className='perfil-usuario'>
                <span>Laura</span>
                <div className='icone-usuario'>L</div>
            </div>
    </NavbarContainer>
    </HeaderContainer>
    );
};


