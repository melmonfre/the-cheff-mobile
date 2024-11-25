import { Button } from "@components/Button";
import { Typography } from "@components/Typography";
import React, { useState } from "react";
import { TextInput } from "react-native";
import {
  Container,
  Main,
  RemainingValueView,
  ValueView,
} from "./styles";
import { Header } from "@components/Header";
import { BackButton } from "@components/BackButton";

import { useNavigation, useRoute } from "@react-navigation/native";

export function BillingCheckoutPage() {
  const navigation = useNavigation()

  const route = useRoute();
  const totalValue = route.params?.totalValue || 0;

  const [valorRestante, setValorRestante] = useState(totalValue);
  const [valorDigitado, setValorDigitado] = useState("");

  const formatarMoeda = (valor: string) => {
    const valorFormatado = parseFloat(valor.replace(/[^0-9]/g, ""));

    if (!isNaN(valorFormatado)) {
      const valorEmReais = (valorFormatado / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return valorEmReais;
    }

    return "";
  };

  const handleInputChange = (valor: string) => {
    setValorDigitado(formatarMoeda(valor));
  };

  const handleEndEditing = () => {
    const valorDigitadoNumerico = parseFloat(valorDigitado.replace(/[^\d]/g, ""));
    if (!isNaN(valorDigitadoNumerico)) {
      const novoValorRestante = valorRestante - valorDigitadoNumerico / 100;
      setValorRestante(novoValorRestante);
    }
  };

  const handleSavePayment = () => {
    navigation.goBack();
    navigation.navigate('payment', { RotaAnterior: 'checkout' });
  };

  return (
    <Container>
      <Header
        headerTitle="Pagamento"
        leftButton={<BackButton />}
        variant="secondary"
      />
      <Main>
        <Typography size="text_xl">Digite um valor</Typography>
        <ValueView>
          <TextInput
            keyboardType="numeric"
            style={{
              fontSize: 36,
              textAlign: "center",
              color: "black",
              fontFamily: "Poppins_400Regular"
            }}
            placeholder="R$ 0,00"
            placeholderTextColor="#232121"
            value={valorDigitado}
            onChangeText={handleInputChange}
            onEndEditing={handleEndEditing}
          />
        </ValueView>
        <RemainingValueView>
          <Typography size="text_xl">
            Valor restante:
          </Typography>
          <Typography size="text_xl" font="semi_bold">
            {formatarMoeda(valorRestante.toFixed(2))}
          </Typography>
        </RemainingValueView>
        <Button
          title="Salvar pagamento"
          onPress={handleSavePayment}
        />
      </Main>
    </Container>
  );
}
