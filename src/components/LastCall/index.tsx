import Image from "next/image";

import Container from "../Container";

import AppStore from "@/assets/badges/app-store.png"
import GoolePlay from "@/assets/badges/google-play.png"

const LastCall: React.FC = () => {
  return (
    <Container>
      <div className="w-full h-last-call px-4 py-8 rounded-2xl flex flex-col justify-center items-center gap-6 text-center bg-last-call">
        <h1 className="w-full w-max-last-call-title font-poppins font-semibold text-4xl @laptop:text-5xl">
          Abra as Portas para a Próxima Revolução Digital!
        </h1>
        <p className="w-full w-max-last-call-subtitle font-inter @laptop:text-xl">
          Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo Digital. Sua Oportunidade, Sua História.
        </p>
        <div className="flex flex-col items-center gap-4 @laptop:flex-row">
          <button>
            <Image
              src={GoolePlay}
              quality={100}
              alt=""
            />
          </button>

          <button>
            <Image
              src={AppStore}
              quality={100}
              alt=""
            />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default LastCall;