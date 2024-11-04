import seta from '../../../images/seta.png';
import chatbot from '../../../images/chatbot.png'

import { ChatbotImage, FooterContainer, FooterLink } from '../styles/Footer';
import Image from 'next/image';


export default function Footer() {
    return (
        <FooterContainer>
            <FooterLink href={"/"}>
                <Image src={seta} alt="Voltar para Veículos" />
            </FooterLink>
            <ChatbotImage>
                <Image src={chatbot} alt="Chatbot" />
            </ChatbotImage>
        </FooterContainer>
    );
};
