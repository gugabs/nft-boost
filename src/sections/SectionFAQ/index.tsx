import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

type faqItem = {
  question: string;
  answer: string;
}

const SectionFAQ: React.FC = () => {
  const FAQ: faqItem[] = [
    {
      question: "O que são NFTs?",
      answer: "NFTs, sigla para Tokens Não Fungíveis, são ativos digitais exclusivos que utilizam a tecnologia blockchain para comprovar autenticidade e propriedade de itens digitais como arte, música e vídeos. Cada NFT é único, tornando-o diferente de ativos digitais fungíveis, como criptomoedas, que podem ser trocados por outros de igual valor."
    },
    {
      question: "Como comprar NFTs em nosso site?",
      answer: "Para comprar um NFT em nosso site, primeiro crie uma carteira digital e adicione criptomoeda a ela. Depois, navegue pelo site, escolha o NFT que deseja e finalize a compra com a criptomoeda. O NFT será transferido para sua carteira digital, confirmando sua propriedade."
    },
    {
      question: "Como posso vender meus próprios NFTs?",
      answer: "Para vender seus próprios NFTs, primeiro crie ou conecte sua carteira digital a uma plataforma de mercado de NFTs. Depois, faça o upload do item digital que deseja transformar em NFT, definindo um preço e as condições de venda. Quando alguém comprar seu NFT, a transação será feita na criptomoeda da plataforma, e o NFT será transferido para o comprador. O valor da venda, menos as taxas da plataforma, será depositado na sua carteira digital."
    },
    {
      question: "Os NFTs são seguros e autênticos?",
      answer: "Sim, os NFTs são projetados para serem seguros e autênticos, graças à tecnologia blockchain que os suporta. A blockchain registra todas as transações e transferências de propriedade de forma transparente e imutável, garantindo a autenticidade e a propriedade exclusiva do NFT. No entanto, como com qualquer ativo digital, é importante tomar precauções de segurança, como usar carteiras confiáveis e estar atento a golpes e fraudes no mercado de NFTs."
    },
    {
      question: "Quais são as taxas envolvidas na compra e venda de NFTs em seu site?",
      answer: "Na compra e venda de NFTs em nosso site, as taxas podem incluir taxas de transação da blockchain, taxas do mercado para listar e vender seus NFTs, e possivelmente taxas de conversão de criptomoeda, dependendo da moeda usada para a transação. As taxas de transação da blockchain variam conforme a demanda na rede. Para vendedores, há uma porcentagem cobrada sobre o valor da venda como taxa do mercado. É importante revisar as taxas específicas na plataforma para entender o custo total da transação."
    }
  ]

  return (
    <Container className="py-20">
      <SectionHeader title="Perguntas Frequentes" subtitle="Desvendando os Mistérios dos NFTs" />


      {
        FAQ.map(faqItem => {
          return (
            <Accordion type="single" collapsible>
              <AccordionItem className="py-4 border-white border-opacity-10" value="item-1">
                <AccordionTrigger className="text-left @laptop:text-xl hover:no-underline">{faqItem.question}</AccordionTrigger>
                <AccordionContent className="text-justify @laptop:text-base">{faqItem.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })
      }
    </Container>
  );
}

export default SectionFAQ;