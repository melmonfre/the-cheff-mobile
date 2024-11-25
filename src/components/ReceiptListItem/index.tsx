import { Typography } from "@components/Typography";
import { Container, HStack, Subtotal, Title, Total, VStack } from "./styles";

export function ReceiptListItem() {
  return (
    <Container>
      <HStack>
        <Typography color="gray_400" font="semi_bold">
          2x
        </Typography>

        <VStack>
          <Title>Burguer Master</Title>
          <Subtotal>R$ 25,00</Subtotal>
        </VStack>

        <Total>R$ 50,00</Total>
      </HStack>
    </Container>
  );
}
