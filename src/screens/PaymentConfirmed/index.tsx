import { Typography } from "@components/Typography";
import { Container } from "./styles";

export function PaymentConfirmed() {
  return (
    <Container>
      
      <Typography font="semi_bold" size="text_2xl" color="white">
        Pagamento confirmado
      </Typography>

      <Typography color="white" style={{textAlign: 'center'}}>
        Agora você é um usuário premium, aproveite suas vantagens
      </Typography>
    </Container>
  );
}
