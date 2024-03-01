import Image from "next/image";

import { FaBars } from "react-icons/fa6";

import Container from "../Container";

const Header: React.FC = () => {
  return (
    <Container>
      <header className="h-20 flex justify-between items-center font-inter font-medium">
        <Image
          width={160}
          height={35}
          src="/images/brand.svg"
          alt=""
        />
        <div className="hidden @laptop:block">
          <ul className="flex gap-12">
            <li>Download</li>
            <li>NFTs</li>
            <li>Rank</li>
            <li>FAQ</li>
          </ul>
        </div>
        <button className="hidden px-7 py-3 rounded-full bg-btn-primary @laptop:block">Conectar Carteira</button>
        <div className="block p-3 border border-white/[.06] rounded text-2xl bg-white/[.03] @laptop:hidden">
          <FaBars />
        </div>
      </header>
    </Container>
  );
}

export default Header;