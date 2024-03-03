"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

import { useEffect, useRef } from "react";

import Container from "@/components/Container";

import Boost from "@/assets/icons/boost.svg"
import Collectibles from "@/assets/icons/collectibles.svg"
import BgToggle from "@/assets/icons/bg-toggle.svg"
import Toggle from "@/assets/icons/toggle.svg"

import AppStore from "@/assets/images/app-store.svg"
import GoolePlay from "@/assets/images/google-play.svg"

import LeftNFTGroup from "@/assets/images/s-hero-left-nfts.png"
import RightNFTGroup from "@/assets/images/s-hero-right-nfts.png"

gsap.registerPlugin(ScrollTrigger);

const SectionHero: React.FC = () => {
  const headlineRef = useRef(null);
  const googleBtnRef = useRef(null);
  const appleBtnRef = useRef(null);
  const toggleRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const leftCardsRef = useRef(null);
  const rightCardsRef = useRef(null);

  useEffect(() => {
    const headline = headlineRef.current;
    const googleBtn = googleBtnRef.current;
    const appleBtn = appleBtnRef.current;
    const toggle = toggleRef.current;
    const cardsContainer = cardsContainerRef.current;
    const leftCards = leftCardsRef.current;
    const rightCards = rightCardsRef.current;

    const headlineTimeline = gsap.timeline();

    headlineTimeline.fromTo(headline,
      {
        y: 25,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: .85
      }, "start").fromTo(googleBtn,
        {
          x: -25,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: .85
        }, ">-0.85").fromTo(appleBtn,
          {
            x: 25,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: .85
          }, ">-0.85").fromTo(toggle,
            {
              x: 35,
              opacity: 0
            },
            {
              x: 0,
              opacity: 1,
              duration: .85
            }, "start+=0.25");

    const cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainer,
        start: "-=50% center",
        scrub: true
      }
    });

    cardsTimeline.to(leftCards,
      {
        x: 0,
      }, 0).to(rightCards,
        {
          x: 0
        }, 0);

  }, [])

  return (
    <section className="py-20 flex flex-col gap-12 overflow-hidden">
      <Container className="flex flex-col items-center gap-9">
        <div ref={headlineRef} className="flex flex-col items-center gap-4 font-inter text-xl text-center opacity-0">
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

            <span className="mx-1 @laptop:mx-2 @laptop:relative">
              <Image
                className="hidden @laptop:inline"
                src={BgToggle}
                alt=""
              />
              <Image
                ref={toggleRef}
                className="hidden @laptop:inline @laptop:absolute @laptop:left-[4px] @laptop:bottom-[17px]"
                src={Toggle}
                alt=""
              />
            </span>

            Digital de

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
              ref={googleBtnRef}
              className="opacity-0"
              src={GoolePlay}
              quality={100}
              alt=""
            />
          </button>

          <button>
            <Image
              ref={appleBtnRef}
              className="opacity-0"
              src={AppStore}
              quality={100}
              alt=""
            />
          </button>
        </div>
      </Container>

      <div ref={cardsContainerRef} className="flex justify-center">
        <Image
          ref={leftCardsRef}
          className="translate-x-[150px]"
          src={LeftNFTGroup}
          quality={100}
          alt=""
        />

        <Image
          ref={rightCardsRef}
          className="-translate-x-[150px]"
          src={RightNFTGroup}
          quality={100}
          alt=""
        />
      </div>
    </section>
  );
}

export default SectionHero;