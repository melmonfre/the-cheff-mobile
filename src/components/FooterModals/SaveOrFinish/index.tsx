import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  Amount,
  Container,
  Inner,
  PriceText,
  QuantityNumber,
  QuantityNumberText,
  SaveItemsText
} from './styles';

type SaveOrFinishProps = {
  title?: string;
}

type SaveOrFinishNavigationProp = NavigationProp<any, 'TableBill'>;

export function SaveOrFinish({ title }: SaveOrFinishProps): JSX.Element {
  const navigation = useNavigation<SaveOrFinishNavigationProp>();

  const titleToDisplay = title ? title : 'Salvar itens';

  return (
    <Container style={{ elevation: 10 }}>
      <Inner
        activeOpacity={0.7}
        onPress={() => navigation.navigate('tableBill')}
      >
        <Amount>
          <FontAwesome5 name="shopping-basket" size={18} color="white" />
          <QuantityNumber>
            <QuantityNumberText>1</QuantityNumberText>
          </QuantityNumber>
        </Amount>
        <SaveItemsText>{titleToDisplay}</SaveItemsText>
        <PriceText>R$ 50,00</PriceText>
      </Inner>
    </Container>
  );
}
