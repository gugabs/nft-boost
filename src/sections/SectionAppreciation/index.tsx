import CollectorCard from "@/components/CollectorCard";
import Container from "@/components/Container";
import NFTCard from "@/components/NFTCard";
import SectionHeader from "@/components/SectionHeader";

const SectionAppreciation: React.FC = () => {
  return (
    <Container>
      <section className="py-28">
        <SectionHeader title="Principais Coleções" subtitle="Coleções em Foco" />

        <div className="flex flex-col gap-4 @laptop:flex-row @laptop:gap-8">
          <div className="w-full flex flex-col gap-4">
            <CollectorCard ranking={1} collectorUsername="gugabs" minPrice={54} currPrice={68} />
            <CollectorCard ranking={1} collectorUsername="gugabs" minPrice={54} currPrice={68} />
            <CollectorCard ranking={1} collectorUsername="gugabs" minPrice={54} currPrice={68} />
          </div>

          <div className="w-full flex flex-col gap-4">
            <CollectorCard ranking={1} collectorUsername="gugabs" minPrice={54} currPrice={68} />
            <CollectorCard ranking={1} collectorUsername="gugabs" minPrice={54} currPrice={68} />
            <CollectorCard ranking={1} collectorUsername="gugabs" minPrice={54} currPrice={68} />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default SectionAppreciation;