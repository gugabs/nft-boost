"use client"

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import CollectorCard from "@/components/CollectorCard";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

const SectionAppreciation: React.FC = () => {
  const nftsRef = useRef(null);

  useEffect(() => {
    const nfts = nftsRef.current;

    gsap.fromTo(nfts,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: .85,
        scrollTrigger: {
          trigger: nfts
        }
      })
  }, [])

  gsap.registerPlugin(ScrollTrigger);

  return (
    <Container>
      <section ref={nftsRef} className="py-20">
        <SectionHeader title="Bons Negócios" subtitle="Mercado Atual" />

        <div className="flex flex-col gap-4 @laptop:flex-row @laptop:gap-8">
          <div className="w-full flex flex-col gap-4">
            <CollectorCard srcImage={"/images/nfts/5.png"} ranking={1} collectorUsername="Crazy M. #131" minPrice={0.0450} currPrice={0.0854} appreciation={24} />
            <CollectorCard srcImage={"/images/nfts/6.png"} ranking={2} collectorUsername="Alien S. #2211" minPrice={0.0450} currPrice={0.0721} appreciation={20} />
            <CollectorCard srcImage={"/images/nfts/2.png"} ranking={3} collectorUsername="Snike #2331" minPrice={0.0450} currPrice={0.0814} appreciation={32} />
          </div>

          <div className="w-full flex flex-col gap-4">
            <CollectorCard srcImage={"/images/nfts/10.png"} ranking={4} collectorUsername="Durtre #2391" minPrice={0.0450} currPrice={0.0487} appreciation={27} />
            <CollectorCard srcImage={"/images/nfts/11.png"} ranking={5} collectorUsername="Hatter #321" minPrice={0.0450} currPrice={0.0684} appreciation={12} />
            <CollectorCard srcImage={"/images/nfts/12.png"} ranking={6} collectorUsername="Sailor S. #4431" minPrice={0.0450} currPrice={0.0527} appreciation={3} />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default SectionAppreciation;