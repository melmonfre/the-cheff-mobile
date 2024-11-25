import { Header } from "@components/Header";
import { Container, CopyButton, HStack, Input, Wrapper } from "./styles";
import { BackButton } from "@components/BackButton";
import { Typography } from "@components/Typography";
import { PixCard } from "./components/PixCard";

const DATA_INFO = [
  "1. Copie a chave PIX",
  "2. Acesse seu banco e procure a aba Pix",
  '3. Selecione "Pix copiar e colar" e cole a nossa chave',
  "4. Agora é só pagar e espera a gente receber o pagamento",
  "5. Ah não se preocupe que assim que recebermos o valor o app irá atualizar sozinho.",
];

export function PayPix() {
  return (
    <Container>
      <Header
        headerTitle="Pix"
        variant="secondary"
        leftButton={<BackButton variant="primary"/>}
      />

      <Wrapper>

        <PixCard />

        <Typography
          font="medium"
          size="text_lg"
          style={{ textAlign: "center" }}
        >
          Valor a ser pago
        </Typography>

        <Typography
          font="semi_bold"
          size="text_2xl"
          style={{ textAlign: "center" }}
        >
          R$ 28,90
        </Typography>

        <Typography
          font="medium"
          size="text_lg"
          style={{ textAlign: "center", marginBottom: 10, marginTop: 20 }}
        >
          É super fácil pagar com o PIX!
        </Typography>

        {DATA_INFO.map((item) => (
          <Typography key={item} size="text_sm">
            {item}
          </Typography>
        ))}

        <HStack style={{ marginTop: 20, gap: 14 }}>
          <Input />

          <CopyButton>
            <Typography font="medium" size="text_sm" color="white">
              Copiar
            </Typography>
          </CopyButton>
        </HStack>
      </Wrapper>
    </Container>
  );
}
