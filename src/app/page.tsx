import Divider from "@/components/Divider";
import LastCall from "@/components/LastCall";
import SectionAppreciation from "@/sections/SectionAppreciation";
import SectionFAQ from "@/sections/SectionFAQ";
import SectionHero from "@/sections/SectionHero";
import SectionHighlights from "@/sections/SectionHighlights";

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

export default function Home() {
  const sectionHighlights: SectionHighlightsProps[] = [
    {
      title: "Coleções Notáveis",
      subtitle: "Destaques",
      highlights: [
        {
          srcImage: "/images/nfts/1.png",
          likesCount: 72,
          collection: "Cartoon Collection",
          tag: "Cat #221",
          price: 0.0723,
          expiresAt: new Date().getTime()
        },
        {
          srcImage: "/images/nfts/2.png",
          likesCount: 84,
          collection: "Cartoon Collection",
          tag: "Snike #2331",
          price: 0.0814,
          expiresAt: new Date().getTime()
        },
        {
          srcImage: "/images/nfts/3.png",
          likesCount: 68,
          collection: "Cartoon Collection",
          tag: "Skull H. #2311",
          price: 0.0965,
          expiresAt: new Date().getTime()
        },
        {
          srcImage: "/images/nfts/4.png",
          likesCount: 22,
          collection: "Cartoon Collection",
          tag: "Nox #2611",
          price: 0.0789,
          expiresAt: new Date().getTime()
        }
      ]
    },
    {
      title: "Destaques do Mês",
      subtitle: "Seleção Mensal",
      highlights: [
        {
          srcImage: "/images/nfts/5.png",
          likesCount: 33,
          collection: "Cartoon Collection",
          tag: "Crazy M. #131",
          price: 0.0854,
          expiresAt: new Date().getTime()
        },
        {
          srcImage: "/images/nfts/6.png",
          likesCount: 71,
          collection: "Cartoon Collection",
          tag: "Alien S. #2211",
          price: 0.0721,
          expiresAt: new Date().getTime()
        },
        {
          srcImage: "/images/nfts/7.png",
          likesCount: 49,
          collection: "Cartoon Collection",
          tag: "Yordlee #1221",
          price: 0.0954,
          expiresAt: new Date().getTime()
        },
        {
          srcImage: "/images/nfts/8.png",
          likesCount: 95,
          collection: "Cartoon Collection",
          tag: "Dragon C. #4401",
          price: 0.0628,
          expiresAt: new Date().getTime()
        }
      ]
    },
    {
      title: "Tendências",
      subtitle: "Seleção Sazonal",
      highlights: [
        {
          srcImage: "/images/nfts/9.png",
          likesCount: 159,
          collection: "Cartoon Collection",
          tag: "Borex #171",
          price: 0.0589,
          expiresAt: new Date().getTime()
        },
        {
          srcImage: "/images/nfts/10.png",
          likesCount: 357,
          collection: "Cartoon Collection",
          tag: "Durtre #2391",
          price: 0.0487,
          expiresAt: new Date().getTime()
        },
        {
          srcImage: "/images/nfts/11.png",
          likesCount: 178,
          collection: "Cartoon Collection",
          tag: "Hatter #321",
          price: 0.0684,
          expiresAt: new Date().getTime()
        },
        {
          srcImage: "/images/nfts/12.png",
          likesCount: 198,
          collection: "Cartoon Collection",
          tag: "Sailor S. #4431",
          price: 0.0527,
          expiresAt: new Date().getTime()
        }
      ]
    }
  ]

  return (
    <>
      <SectionHero />

      <Divider />

      <SectionHighlights
        {...sectionHighlights[0]}
      />

      <Divider />

      <SectionHighlights
        {...sectionHighlights[1]}
      />

      <Divider />

      <SectionAppreciation />

      <Divider />

      <SectionHighlights
        {...sectionHighlights[2]}
      />

      <LastCall />
      <SectionFAQ />
    </>
  );
}
