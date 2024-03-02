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

const SectionHighlights: React.FC<SectionHighlightsProps> = ({ title, subtitle, highlights }) => {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
      </Container>
      <div className="px-4 py-2 flex gap-8 overflow-scroll @laptop:justify-center @laptop:overflow-auto">
        {
          highlights.map((nft, i) => <NFTCard key={i} {...nft} />)
        }
      </div>
    </section>
  );
}

export default SectionHighlights;