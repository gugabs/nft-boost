"use client"

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    gsap.fromTo(header,
      {
        x: 45,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: .75,
        scrollTrigger: {
          trigger: header
        }
      })
  }, [])

  return (
    <div ref={headerRef} className="space-y-1 mb-14 opacity-0">
      <p className="font-inter font-semibold text-sm text-white text-opacity-70 @laptop:text-xl">{subtitle}</p>
      <h2 className="font-poppins font-semibold text-3xl text-white @laptop:text-5xl/tight">{title}</h2>
    </div>
  );
}

export default SectionHeader;