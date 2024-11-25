import { useState } from "react";
import { ScrollView, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import {
  Box,
  Container,
  FooterContainer,
  HStack,
  Main,
  PaymentButton,
  PercentageIcon,
  PriceIcon,
  Row,
} from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Typography } from "@components/Typography";
import { BackButton } from "@components/BackButton";
import { PaymentIcons } from "@components/PaymentIcons";

import { useNavigation, useRoute } from "@react-navigation/native";

import { PAYMENT_METHODS } from "../../data/paymenMethods";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function PaymentScreen() {
  const route = useRoute();
  const rotaAnterior = route.params?.RotaAnterior
  console.log(rotaAnterior)

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [selectedIcon, setSelectedIcon] = useState("price");

  const handleFinalizarPagamento = () => {
    navigation.navigate("paymentConfirmation");
  };

  return (
    <Container>
      <Header
        leftButton={<BackButton variant="primary"/>}
        headerTitle="Pagamento"
        variant="secondary"
      />

      <Box>
        <Row>
          <Typography size="text_lg">Subtotal</Typography>
          <Typography size="text_lg">R$ 110,00</Typography>
        </Row>
        {rotaAnterior === 'checkout' &&
          <>
            <Row>
              <Typography size="text_lg" color="green_dark">Comissão do garçom</Typography>
              <Typography size="text_lg" color="green_dark">R$ 11,00</Typography>
            </Row>
            <Row>
              <Typography size="text_lg">Desconto</Typography>
              <Typography size="text_lg">-R$ 21,00</Typography>
            </Row>
          </>
        }
        <Row>
          <Typography font="semi_bold" size="text_lg">
            Total
          </Typography>
          <Typography font="semi_bold" size="text_lg">
            R$ 100,00
          </Typography>
        </Row>
        {rotaAnterior === 'checkout' &&
          <Row>
            <Typography size="text_lg">Troco</Typography>
            <Typography size="text_lg">R$ 10,00</Typography>
          </Row>
        }
      </Box>
      <Box style={{ borderBottomWidth: 0 }}>
        {rotaAnterior === 'checkout' &&
          <>
            <Row>
              <Row style={{ justifyContent: 'flex-start', gap: 0 }}>
                <Typography size="text_lg">R$ 50,00</Typography>
                <Entypo name="dot-single" size={24} color="black" />
                <Typography>Cartão de crédito</Typography>
              </Row>
              <FontAwesome5 name="trash" size={18} color="red" />
            </Row>
            <Row>
              <Row style={{ justifyContent: 'flex-start', gap: 0 }}>
                <Typography size="text_lg">R$ 60,00</Typography>
                <Entypo name="dot-single" size={24} color="black" />
                <Typography>Dinheiro</Typography>
              </Row>
              <FontAwesome5 name="trash" size={18} color="red" />
            </Row>
          </>
        }
      </Box>

      <Main>
        <HStack style={{ gap: 16 }}>
          <PriceIcon
            activeOpacity={0.7}
            style={{
              backgroundColor: selectedIcon === 'price' ? '#08AE25' : 'transparent',
            }}
            onPress={() => setSelectedIcon("price")}
          >
            <Typography color={selectedIcon === 'price' ? 'white' : 'gray_800'} font="semi_bold">R$</Typography>
          </PriceIcon>

          <PercentageIcon
            activeOpacity={0.7}
            style={{
              backgroundColor: selectedIcon === 'percentage' ? '#08AE25' : 'transparent',
            }}
            onPress={() => setSelectedIcon("percentage")}
          >
            <Typography color={selectedIcon === 'percentage' ? 'white' : 'gray_800'} font="semi_bold">%</Typography>
          </PercentageIcon>

          <View style={{ flex: 1 }}>
            <Input
              placeholder="Valor do desconto"
              keyboardType="numeric"
            />
          </View>
        </HStack>
      </Main>

      <FooterContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack style={{ gap: 16, paddingHorizontal: 15 }}>
            {PAYMENT_METHODS.map(({ label, value }) => (
              <PaymentButton
                key={value}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('billingCheckout', { totalValue: 50 })}
              >
                <PaymentIcons value={value} />

                <Typography
                  size="text_xs"
                  style={{ textAlign: "center" }}
                  font="medium"
                >
                  {label}
                </Typography>
              </PaymentButton>
            ))}
          </HStack>
        </ScrollView>

        <View style={{ paddingHorizontal: 15, paddingBottom: 40 }} >
          {rotaAnterior === 'checkout' ?
            <Button
              variant="primary"
              title="Finalizar mesa"
              onPress={handleFinalizarPagamento}
            /> :
            <Button
              variant="secondary"
              title="Finalizar mesa"
            />
          }
        </View>
      </FooterContainer>
    </Container>
  );
}
