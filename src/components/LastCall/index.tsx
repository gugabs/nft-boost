"use client"

import gsap from "gsap";

import Image from "next/image";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import AppStore from "@/assets/badges/app-store.png"
import GoolePlay from "@/assets/badges/google-play.png"

import Container from "../Container";

gsap.registerPlugin(ScrollTrigger);

const LastCall: React.FC = () => {
  const lastCallRef = useRef(null);

  useEffect(() => {
    const lastCall = lastCallRef.current;

    gsap.fromTo(lastCall,
      {
        scale: .7,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: lastCall
        }
      })
  }, [])

  return (
    <Container>
      <div ref={lastCallRef} className="w-full h-last-call px-4 py-8 rounded-2xl flex flex-col justify-center items-center gap-6 text-center bg-last-call">
        <h1 className="w-full max-w-last-call-title font-poppins font-semibold text-4xl @laptop:text-5xl">
          Abra as Portas para a Próxima Revolução Digital!
        </h1>
        <p className="w-full max-w-last-call-subtitle font-inter @laptop:text-xl">
          Descubra, adquira e possua os NFTs mais valiosos do universo digital. Sua Oportunidade, sua história.
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