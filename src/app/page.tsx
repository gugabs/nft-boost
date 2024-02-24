import CollectorCard from "@/components/CollectorCard";
import Container from "@/components/Container";
import NFTCard from "@/components/NFTCard";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <Container>
      <SectionHeader title="Coleções Notáveis" subtitle="Destaque em Coleções" />
      <NFTCard likesCount={103} collection="Cartoon Collection" tag="Cat #221" price={0.0721} expiresAt={Date.now()} />
      <CollectorCard ranking={7} collectorUsername="Lorem Ipsum" minPrice={0.754} currPrice={0.478} />
    </Container>
  );
}
