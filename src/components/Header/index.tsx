import Image from "next/image";

import { FaBars } from "react-icons/fa6";

import Brand from "@/assets/brand.svg";

import Container from "@/components/Container";

const Header: React.FC = () => {
  return (
    <Container>
      <header className="h-20 flex justify-between items-center font-inter font-medium">
        <Image
          src={Brand}
          alt=""
        />
        <div className="hidden @laptop:block">
          <ul className="flex gap-12">
            <li className="default-hover">Download</li>
            <li className="default-hover">NFTs</li>
            <li className="default-hover">Rank</li>
            <li className="default-hover">FAQ</li>
          </ul>
        </div>
        <button className="hidden px-7 py-3 rounded-full bg-btn-primary @laptop:block default-hover">Conectar Carteira</button>
        <div className="block p-3 border border-white/[.06] rounded text-2xl bg-white/[.03] @laptop:hidden">
          <FaBars />
        </div>
      </header>
    </Container>
  );
}

export default Header;