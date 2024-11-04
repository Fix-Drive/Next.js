import logoUser from '../../../images/user.png'
import seta from '../../../images/seta.png'
import Link from "next/link";
import { AsideContainer, Button, ImageContainer, SetaContainer } from "../styles/Aside";
import Image from 'next/image';

export default function Aside(){
    return(
    <AsideContainer>
      <ImageContainer>
        <Image src={logoUser} alt="Logo FixDrive" />
      </ImageContainer>

      <Button name="login">
          <Link href={"/login"}>Login</Link>
      </Button>

      <SetaContainer>
        
          <Link href={"/"}>
            <Image src={seta} alt="Seta" />
        </Link>
        
      </SetaContainer>
  </AsideContainer>

  );
}
  