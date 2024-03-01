import Container from "@/components/Container";
import NFTCard from "@/components/NFTCard";
import SectionHeader from "@/components/SectionHeader";

const SectionHighlights: React.FC = () => {
  return (
    <section className="py-28">
      <Container>
        <SectionHeader title="Coleções Notáveis" subtitle="Destaques em Coleções" />
      </Container>
      <div className="px-4 flex gap-8 overflow-scroll @laptop:justify-center @laptop:overflow-auto">
        <NFTCard srcImage="/images/nfts/nft-card-cover-1.png" likesCount={97} collection="Cartoon Collection" tag="Cat #221" price={0.0721} expiresAt={5} />
        <NFTCard srcImage="/images/nfts/nft-card-cover-2.png" likesCount={105} collection="Cartoon Collection" tag="Snike #2331" price={0.0574} expiresAt={5} />
        <NFTCard srcImage="/images/nfts/nft-card-cover-3.png" likesCount={358} collection="Cartoon Collection" tag="Skull Hatter #2311" price={0.0813} expiresAt={5} />
        <NFTCard srcImage="/images/nfts/nft-card-cover-4.png" likesCount={74} collection="Cartoon Collection" tag="Nox #2611" price={0.0456} expiresAt={5} />
      </div>
    </section>
  );
}

export default SectionHighlights;