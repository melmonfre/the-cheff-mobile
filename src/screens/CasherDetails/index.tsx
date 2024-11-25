import { FlatList } from "react-native";
import { CustomHeader } from "@components/CustomHeader";
import { Container, Content, IconBox, InfosContent, Inner, Item, ItemBold, ItemLight, Row, TotalOfPaymentType } from "./styles";

import { Octicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const DATA = [
  { paymentType: 'Varias formas de pagamento', totalSold: 'R$ 100,00' },
  { paymentType: 'Cartão de crédito', totalSold: 'R$ 50,00' },
  { paymentType: 'Dinheiro', totalSold: 'R$ 50,00' },
  { paymentType: 'Varias formas de pagamento', totalSold: 'R$ 150,00' },
  { paymentType: 'Dinheiro', totalSold: 'R$ 50,00' },
  { paymentType: 'Pix', totalSold: 'R$ 50,00' },
]

type InnerItemProps = {
  paymentType: string;
  totalSold: string;
}

export function CasherDetails() {
  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.navigate('receipt');
  };

  const InnerItem: React.FC<InnerItemProps> = ({ paymentType, totalSold }) => {
    return (
      <Inner activeOpacity={0.7} onPress={handleItemPress}>
        <Content>
          <Item>{paymentType}</Item>
          <ItemBold>{totalSold}</ItemBold>
        </Content>
        <IconBox>
          <Octicons name="info" size={16} color="white" />
        </IconBox>
      </Inner>
    )
  }

  return (
    <Container>
      <CustomHeader bgColor="secondary" title="Caixa" />
      <Content>
        <InfosContent>
          <Row>
            <ItemBold>Data da abertura</ItemBold>
            <Item>17/08/2022 00:00</Item>
          </Row>
          <Row>
            <ItemBold>Data do fechamento</ItemBold>
            <Item>17/08/2022 23:59</Item>
          </Row>
          <Row>
            <ItemBold>Comissão arrecadada</ItemBold>
            <Item>R$ 45,00</Item>
          </Row>
          <Row>
            <ItemBold>Desconto</ItemBold>
            <Item>-R$ 10,00</Item>
          </Row>
        </InfosContent>
        <TotalOfPaymentType>
          <Row>
            <ItemLight>Cartão de crédito</ItemLight>
            <ItemLight>R$ 250,00</ItemLight>
          </Row>
          <Row>
            <ItemLight>Cartão de débito</ItemLight>
            <ItemLight>R$ 50,00</ItemLight>
          </Row>
          <Row>
            <ItemLight>Pix</ItemLight>
            <ItemLight>R$ 50,00</ItemLight>
          </Row>
          <Row>
            <ItemLight>Dinheiro</ItemLight>
            <ItemLight>R$ 100,00</ItemLight>
          </Row>
          <Row>
            <ItemBold style={{ color: '#08AE25' }}>Total de vendas</ItemBold>
            <ItemBold style={{ color: '#08AE25' }}>R$ 450,00</ItemBold>
          </Row>
        </TotalOfPaymentType>
      </Content>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <InnerItem paymentType={item.paymentType} totalSold={item.totalSold} />}
      />
    </Container>
  )
}