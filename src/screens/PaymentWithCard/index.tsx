import { BackButton } from "@components/BackButton";
import { Header } from "@components/Header";
import { Box, Container, FormBox } from "./styles";
import { Button } from "@components/Button";
import { ScrollView, View } from "react-native";
import { Typography } from "@components/Typography";
import { Input } from "@components/Input";

export function PaymentWithCard() {
  return (
    <Container>
      <Header
        headerTitle="Cartão de crédito"
        variant="secondary"
        leftButton={<BackButton variant="primary"/>}
      />

      <ScrollView
        contentContainerStyle={{ paddingTop: 34, paddingHorizontal: 15, paddingBottom: 70 }}
        showsVerticalScrollIndicator={false}
      >
        <Typography size="text_xs" style={{ textAlign: "center" }}>
          Poderemos fazer uma pequena cobraça para verificar se o seu cartão
          está ativo, mas não se preocupe pois estornaremos logo em seguida.
        </Typography>

        <FormBox style={{ marginTop: 35 }}>
          <Typography font="medium">Dados do cartão</Typography>

          <Input placeholder="Nome escrito no cartão" />
          <Input placeholder="Nome escrito no cartão" />

          <View style={{ flexDirection: "row", gap: 14 }}>
            <View style={{ flex: 1 }}>
              <Input placeholder="Validade" />
            </View>

            <View style={{ flex: 1 }}>
              <Input placeholder="CVV" />
            </View>
          </View>

          <Input placeholder="CPF ou CNPJ do titular do cartão" />
        </FormBox>

        <FormBox style={{ marginTop: 20 }}>
          <Typography font="medium">Endereço de cobrança do cartão</Typography>

          <Input placeholder="CEP" />
          <Input placeholder="Rua" />

          <View style={{ flexDirection: "row", gap: 14 }}>
            <View style={{ flex: 1 }}>
              <Input placeholder="Número" />
            </View>

            <View style={{ flex: 1 }}>
              <Input placeholder="Cidade" />
            </View>
          </View>

          <Input placeholder="Bairro" />
        </FormBox>
      </ScrollView>

      <Box>
        <Button title="Pagar com cartão" />
      </Box>
    </Container>
  );
}
