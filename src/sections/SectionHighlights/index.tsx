"use client"

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import Container from "@/components/Container";
import NFTCard from "@/components/NFTCard";
import SectionHeader from "@/components/SectionHeader";

type NFTCardProps = {
  srcImage: string;
  likesCount: number;
  collection: string;
  tag: string;
  price: number;
  expiresAt: number;
};

type SectionHighlightsProps = {
  title: string;
  subtitle: string;
  highlights: NFTCardProps[];
}

gsap.registerPlugin(ScrollTrigger);

const SectionHighlights: React.FC<SectionHighlightsProps> = ({ title, subtitle, highlights }) => {
  const highlightsRef = useRef(null);

  useEffect(() => {
    const highlights = highlightsRef.current;

    gsap.fromTo(highlights,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: .85,
        scrollTrigger: {
          trigger: highlights
        }
      })
  }, [])

  return (
    <section className="py-20">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
      </Container>
      <div ref={highlightsRef} className="px-4 py-2 flex gap-8 overflow-scroll @laptop:justify-center @laptop:overflow-auto">
        {
          highlights.map((nft, i) => <NFTCard key={i} {...nft} />)
        }
      </div>
    </section>
  );
}

export default SectionHighlights;