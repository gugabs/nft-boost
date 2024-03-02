import Image from "next/image";

import Brand from "@/assets/brand.svg"
import Container from "../Container";

const Footer: React.FC = () => {
  return (
    <Container>
      <footer className="py-8 flex flex-col gap-8 @laptop:flex-row @laptop:justify-between">
        <div className="w-80 flex flex-col gap-4">
          <Image
            src={Brand}
            alt=""
          />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="px-6 py-4 rounded-full font-inter text-base font-medium bg-btn-primary">
            Conectar Carteira
          </button>
        </div>
        <div className="flex flex-col gap-8 font-inter text-lg @laptop:gap-16 @laptop:flex-row">
          <ul className="flex flex-col gap-2 text-white text-opacity-70">
            <li className="text-2xl font-bold text-white text-opacity-100">NFT Boost</li>
            <li>Download</li>
            <li>NFTs</li>
            <li>Rank</li>
            <li>FAQ</li>
          </ul>
          <ul className="flex flex-col gap-2 text-white text-opacity-70">
            <li className="text-2xl font-bold text-white text-opacity-100">Links importantes</li>
            <li>Sobre Nós</li>
            <li>Perguntas</li>
            <li>Conferência</li>
            <li>Contato</li>
            <li>Legal</li>
          </ul>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;