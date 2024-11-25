import { Typography } from "@components/Typography";
import { Container } from "./styles";

export function PaymentRefused() {
  return (
    <Container>
      
      <Typography font="semi_bold" size="text_2xl" color="white">
        Pagamento recusado
      </Typography>

      <Typography color="white" style={{textAlign: 'center'}}>
        Por favor tente novamente
      </Typography>
    </Container>
  );
}
