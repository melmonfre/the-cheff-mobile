import { Header } from "@components/Header";
import { MenuButton } from "@components/MenuButton";
import { BillingPeriod, BillingPeriodAndNextBox, Container, Content, ContentBox, ContentHeader, ContentHeaderText, ContentInfos, FooterBox, IconBox, Info, Invoice, NextCharge, PaymentType, PaymentTypeAndAmountBox, PlanInformationBox } from "./styles";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { Typography } from "@components/Typography";
import { Image, ScrollView } from "react-native";
import { Button } from "@components/Button";

export function Premium() {
  return (
    <Container>
      <Header
        leftButton={<MenuButton />}
        headerTitle="Assinatura"
        variant="secondary"
      />
      <ScrollView>
        <Content>
          <ContentHeader>
            <Image source={require('@assets/logo.png')} style={{ width: 315, height: 120 }} />
            <ContentHeaderText>
              <Typography font="bold" size="text_lg">Você é um usuário</Typography>
              <Typography font="semi_bold" color="green_dark" size="text_lg">assinante básico</Typography>
            </ContentHeaderText>
          </ContentHeader>
          <ContentInfos>
            <Info>
              <IconBox>
                <MaterialCommunityIcons name="cash-register" size={24} color="white" />
              </IconBox>
              <ContentBox>
                <Typography font="semi_bold" size="text_md">Vendas ilimitadas</Typography>
                <Typography size="text_sm">
                  Realize quantas vendas quiser por mês, quer seja por mesas ou venda rápida, não limites de vendas.
                </Typography>
              </ContentBox>
            </Info>
            <Info>
              <IconBox>
                <MaterialCommunityIcons name="account-group" size={24} color="white" />
              </IconBox>
              <ContentBox>
                <Typography font="semi_bold" size="text_md">4 usuários simultaneamente</Typography>
                <Typography size="text_sm">
                  Você pode acessar sua conta The Chef em até 4 dispositivos diferentes, independente se ele é Android ou iOS.
                </Typography>
              </ContentBox>
            </Info>
            <Info>
              <IconBox>
                <MaterialIcons name="insert-chart" size={24} color="white" />
              </IconBox>
              <ContentBox>
                <Typography font="semi_bold" size="text_md">Melhor gestão do seu negócio</Typography>
                <Typography size="text_sm">
                  Controle todas as suas venda em um único aplicativo, saiba quanto vendeu e agilize suas vendas.
                </Typography>
              </ContentBox>
            </Info>
          </ContentInfos>
          <PlanInformationBox>
            <PaymentTypeAndAmountBox>
              <PaymentType>
                <Image
                  source={require('../../../assets/icons/pix.png')}
                  style={{ width: 24, height: 24 }}
                />
                <Typography>Pix</Typography>
              </PaymentType>
              <Typography size="text_md" font="medium">R$ 28,90</Typography>
            </PaymentTypeAndAmountBox>
            <BillingPeriodAndNextBox>
              <BillingPeriod>
                <Typography font="medium" size="text_xr" color="gray_400">Período de cobrança:</Typography>
                <Typography size="text_sm" font="semi_bold">Mensal</Typography>
              </BillingPeriod>
              <NextCharge>
                <Typography font="medium" size="text_xr" color="gray_400">Próxima cobrança:</Typography>
                <Typography size="text_sm" font="semi_bold">12/02/2023</Typography>
              </NextCharge>
            </BillingPeriodAndNextBox>
          </PlanInformationBox>
          <Invoice activeOpacity={0.7}>
            <Typography
              color="green_dark"
              font="medium"
              size="text_sm"
              style={{ textAlign: 'center' }}
            >
              Fatura disponível, clique para pagar.
            </Typography>
          </Invoice>
        </Content>
        <FooterBox>
          <Button title="Cancelar meu plano" variant="del-button" />
        </FooterBox>
      </ScrollView>
    </Container>
  )
}