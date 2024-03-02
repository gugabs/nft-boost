import Image from "next/image";

import Container from "@/components/Container";

import Boost from "@/assets/icons/boost.svg"
import Collectibles from "@/assets/icons/collectibles.svg"
import Toggle from "@/assets/icons/toggle.svg"

import AppStore from "@/assets/badges/app-store.png"
import GoolePlay from "@/assets/badges/google-play.png"

import LeftNFTGroup from "@/assets/images/s-hero-left-nfts.png"
import RightNFTGroup from "@/assets/images/s-hero-right-nfts.png"

const SectionHero: React.FC = () => {
  return (
    <section className="py-20 flex flex-col gap-12 overflow-hidden">
      <Container className="flex flex-col items-center gap-9">
        <div className="flex flex-col items-center gap-4 font-inter text-xl text-center">
          <p className="text-sm @laptop:text-xl">
            <span className="mr-2">
              <Image
                className="inline-block"
                src={Boost}
                alt=""
              />
            </span>
            Adentre um reino de possibilidades infinitas
          </p>
          <h1 className="max-w-[1225px] font-poppins text-[40px]/[48px] font-semibold @laptop:text-7xl/[86.4px]">
            Explore

            <span className="mx-2 @laptop:mx-1">
              <Image
                className="inline w-[72px] @laptop:hidden"
                src={Collectibles}
                alt=""
              />
            </span>

            um Universo

            <span className="mx-1 @laptop:mx-2">
              <Image
                className="hidden @laptop:inline"
                src={Toggle}
                alt=""
              />
            </span>

            Digital

            <span className="mx-2 @laptop:mx-1">
              <Image
                className="inline w-[102px] @laptop:hidden"
                src={Toggle}
                alt=""
              />
            </span>

            de

            <span className="mx-1 @laptop:mx-2">
              <Image
                className="hidden @laptop:inline"
                src={Collectibles}
                alt=""
              />
            </span>

            Colecionáveis Únicos!
          </h1>
          <p className="text-sm opacity-85 @laptop:max-w-[648px] @laptop:text-xl">Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFTs, onde a arte, a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.</p>
        </div>
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
      </Container>

      <div className="flex justify-center">
        <Image
          className="translate-x-16"
          src={LeftNFTGroup}
          quality={100}
          alt=""
        />

        <Image
          className="-translate-x-16"
          src={RightNFTGroup}
          quality={100}
          alt=""
        />
      </div>
    </section>
  );
}

export default SectionHero;