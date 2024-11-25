import { Typography } from "@components/Typography";
import { Container, HStack, StoreImage, VStack } from "./styles";

export function ReceiptDetailsCard() {
  return (
    <Container>
      <Typography font="bold" size="text_lg" style={{ alignSelf: "flex-end" }}>
        Recibo #103
      </Typography>

      <HStack>
        <StoreImage
          source={{
            uri: "https://logomakerr.ai/blog/wp-content/uploads/2022/04/Starbucks-logo.png",
          }}
          resizeMode="cover"
        />

        <VStack>
          <Typography font="semi_bold" size="text_md" numberOfLines={1}>
            Sofisticalle Móveis
          </Typography>

          <Typography font="semi_bold" size="text_xs" numberOfLines={2}>
            CNPJ:{" "}
            <Typography font="light" size="text_xs">
              00.000.000/0000-00
            </Typography>
          </Typography>

          <Typography font="semi_bold" size="text_xs" numberOfLines={2}>
            Endereco:{" "}
            <Typography font="light" size="text_xs">
              Rua Fulano de Tal, 123 Setor dos devs - Goiania-GO
            </Typography>
          </Typography>
        </VStack>
      </HStack>
    </Container>
  );
}
