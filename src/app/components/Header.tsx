"use client";
import Link from "next/link";
import { ButtonLinks, HeaderContainer, NavbarContainer } from "../styles/Header";
import fixdrive from '../../images/logoFixDrive.png';
import car_icon from '../../images/carIcon.png';
import user_icon from '../../images/userIcon.png';
import Image from "next/image";

export default function Header() {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <div className="navbar-brand">
          <Image src={fixdrive} alt="Logo FixDrive" width={100} height={50} />
        </div>

        <ButtonLinks id="icons">
          <div>
            <Link href={"/consulta"}>
              <Image src={car_icon} alt="Carro" width={70} height={60} />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <Image src={user_icon} alt="Usuário" width={40} height={45} />
            </Link>
          </div>
        </ButtonLinks>
      </NavbarContainer>
    </HeaderContainer>
  );
}
