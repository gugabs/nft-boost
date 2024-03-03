import data from "@/app/data.json";

import Divider from "@/components/Divider";
import LastCall from "@/components/LastCall";
import SectionAppreciation from "@/sections/SectionAppreciation";
import SectionFAQ from "@/sections/SectionFAQ";
import SectionHero from "@/sections/SectionHero";
import SectionHighlights from "@/sections/SectionHighlights";

export default function Home() {
  const sectionHighlights: SectionHighlightsProps[] = data;

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
