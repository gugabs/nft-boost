import Container from "../Container";

const Divider: React.FC = () => {
  return (
    <Container>
      <div className="w-full h-[1px] bg-divider opacity-15"></div>
    </Container>
  );
}

export default Divider;