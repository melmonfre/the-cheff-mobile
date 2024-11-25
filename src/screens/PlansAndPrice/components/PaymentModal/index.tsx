import { useState } from "react";

import { Dimensions, ScrollView, View, ModalProps } from "react-native";

import { Typography } from "@components/Typography";

import {
  CloseModal,
  Container,
  HStack,
  ModalContent,
  PaymentView,
  SubscriptionPeriodButton,
} from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";
import { SUBSCRIPTION_PERIOD } from "../../../../data/subscriptionPeriod";
import { Button } from "@components/Button";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type PaymentModalProps = ModalProps & {
  onCloseModal: () => void;
};

export function PaymentModal({ onCloseModal, ...rest }: PaymentModalProps) {
  const { colors } = useTheme();

  const [planSelect, setPlanSelect] = useState("Mensal");

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  return (
    <Container transparent statusBarTranslucent animationType="fade" {...rest}>
      <ModalContent>
        <PaymentView>
          <HStack>
            <CloseModal onPress={onCloseModal}>
              <FontAwesome5 name="chevron-down" size={12} color="black" />
            </CloseModal>

            <View style={{ width: Dimensions.get("window").width - 60 - 24 }}>
              <Typography font="semi_bold" style={{ textAlign: "center" }}>
                Período de assinatura
              </Typography>
            </View>
          </HStack>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 45 }}
          >
            <HStack style={{ gap: 14, marginBottom: 45 }}>
              {SUBSCRIPTION_PERIOD.map(({ period, price }) => (
                <SubscriptionPeriodButton
                  key={period}
                  variant={
                    period.toLowerCase() === planSelect.toLocaleLowerCase()
                  }
                  onPress={() => setPlanSelect(period)}
                >
                  <Typography font="medium" size="text_lg">
                    {period}
                  </Typography>
                  <Typography font="medium" color="green_dark">
                    R$ {price}
                  </Typography>
                </SubscriptionPeriodButton>
              ))}
            </HStack>
          </ScrollView>

          <Button title="Ir para forma de pagamento" onPress={() => navigation.navigate('formOfPayment')} />
        </PaymentView>
      </ModalContent>
    </Container>
  );
}
