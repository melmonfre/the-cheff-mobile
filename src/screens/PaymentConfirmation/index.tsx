import { MaterialIcons } from '@expo/vector-icons';
import {
  CloseButton,
  Container,
  MainContent,
  PaymentConfirmationHeader,
  ReceiptBox,
  ReceiptIcon,
  VStack,
} from "./styles";

import { Button } from "@components/Button";
import { Typography } from "@components/Typography";

import { useNavigation } from "@react-navigation/native";

import { Octicons } from "@expo/vector-icons";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function PaymentConfirmation() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container>
      <PaymentConfirmationHeader>
        <CloseButton
          activeOpacity={0.8}
          onPress={() => navigation.navigate("tables")}
        >
          <Octicons name="x-circle-fill" size={24} color="#F6F4EA" />
        </CloseButton>
      </PaymentConfirmationHeader>

      <MainContent>
        <Typography style={{ fontSize: 72 }}>🤑</Typography>
        <Typography size="text_lg" font="medium">
          Venda concluída
        </Typography>

        <Typography size="text_5xl" font="light" style={{ marginTop: 16 }}>
          R$ 50,00
        </Typography>
      </MainContent>

      <VStack>
        <ReceiptBox>
          <ReceiptIcon>
            <MaterialIcons name="receipt" size={24} color="black" />
          </ReceiptIcon>
          <Button
            variant="secondary-outline"
            title="Recibo"
            activeOpacity={0.7}
            onPress={() => navigation.navigate("receipt")}
          />
        </ReceiptBox>
        <Button
          title="Ir para mesas"
          activeOpacity={0.7}
          onPress={() => navigation.navigate("tables-drawer")}
        />
      </VStack>
    </Container>
  );
}
