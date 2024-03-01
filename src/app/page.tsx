import Divider from "@/components/Divider";
import SectionAppreciation from "@/sections/SectionAppreciation";
import SectionHero from "@/sections/SectionHero";
import SectionHighlights from "@/sections/SectionHighlights";

export default function Home() {
  return (
    <>
      <SectionHero />
      <Divider />
      <SectionHighlights />
      <Divider />
      <SectionAppreciation />
    </>
  );
}
