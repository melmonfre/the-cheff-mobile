import { Header } from "@components/Header";
import { BackButton } from "@components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { Popover } from "@components/Popover";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import MakePayment from "../../components/FooterModals/MakePayment";
import { useState } from "react";
import { ChangeQuantity } from "@components/FooterModals/ChangeQuantity";
import {
  AddMoreProductsButton,
  AmountItem,
  Container,
  CurrentPrice,
  HeaderContainer,
  Item,
  MainContainer,
  MoreOptionsContainer,
  PreviousPrice,
  ProductPriceContainer,
  ProductText,
  SubtotalContainer,
  SubtotalText,
  TextAddMoreProducts,
  TotalContainer,
  TotalPrice,
  TotalText,
  WaitersCommissionContainer,
  WaitersCommissionText,
} from "./styles";

type ProductItemProps = {
  id: string;
  amount: string;
  name: string;
  previousPrice?: string;
  currentPrice: string;
  totalPrice: string;
}

type ShowPopoverProps = {
  [id: string]: boolean;
};

const DATA = [
  { id: '1', amount: '2x', name: 'Burguer Bacon Triplo', previousPrice: 'R$ 35,00', currentPrice: 'R$ 26,00', totalPrice: 'R$ 52,00' },
  { id: '2', amount: '0,458', name: 'Açaí', previousPrice: '', currentPrice: 'R$ 45,90kg', totalPrice: 'R$ 21,02' },
  { id: '3', amount: '1x', name: 'Burger Master', previousPrice: 'R$ 56,00', currentPrice: 'R$ 50,00', totalPrice: 'R$ 50,00' }
];

export function TableBill() {
  const [showCommission, setShowCommission] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showPopover, setShowPopover] = useState<ShowPopoverProps>({});
  const [showChangeQuantityModal, setShowChangeQuantityModal] = useState(false);

  const handleWaitersCommissionPress = () => {
    setShowCommission(!showCommission);
  };

  const handleDeleteWaitersCommission = () => {
    setShowDeleteButton(!showDeleteButton);
  };

  const handleShowPopover = (id: string) => {
    setShowPopover(prevState => ({ ...prevState, [id]: !prevState[id] }));
  }

  const toggleChangeQuantityModal = () => {
    setShowChangeQuantityModal(!showChangeQuantityModal);
  }

  const navigation = useNavigation();

  const renderProductItem = ({ item }: { item: ProductItemProps }) => {
    return (
      <Item>
        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
          <AmountItem>{item.amount}</AmountItem>
          <View>
            <ProductText>{item.name}</ProductText>
            <ProductPriceContainer>
              <PreviousPrice>{item.previousPrice}</PreviousPrice>
              <CurrentPrice>{item.currentPrice}</CurrentPrice>
            </ProductPriceContainer>
          </View>
        </View>
        <View style={{ flexDirection: 'row', columnGap: 20 }}>
          <TotalPrice>{item.totalPrice}</TotalPrice>
          <TouchableOpacity
            onPress={() => handleShowPopover(item.id)}
            style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}
          >
            <Entypo name="dots-three-vertical" size={16} color="black" />
          </TouchableOpacity>
        </View>
        {showPopover[item.id] && <Popover toggleChangeQuantityModal={toggleChangeQuantityModal} changeQuantityText="Alterar quantidade" removeFromCartText="Remover do carrinho" />}
      </Item>
    )
  };

  return (
    <Container>
      <HeaderContainer>
        <Header
          leftButton={<BackButton variant="primary" />}
          headerTitle="Pagamento"
          variant="secondary"
        />
      </HeaderContainer>
      <MainContainer>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderProductItem}
        />
        <MoreOptionsContainer>
          <AddMoreProductsButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
            <AntDesign name="plus" size={16} color="#08AE25" />
            <TextAddMoreProducts>Adicionar mais produtos</TextAddMoreProducts>
          </AddMoreProductsButton>
          <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
            <SubtotalContainer>
              <SubtotalText>Subtotal</SubtotalText>
              <SubtotalText>R$ 52,00</SubtotalText>
            </SubtotalContainer>
            {!showCommission ?
              <WaitersCommissionContainer onPress={handleWaitersCommissionPress}>
                <WaitersCommissionText>Adicionar comissão</WaitersCommissionText>
              </WaitersCommissionContainer>
              :
              <WaitersCommissionContainer onPress={handleDeleteWaitersCommission}>
                <WaitersCommissionText>Comissão do garçom</WaitersCommissionText>
                <WaitersCommissionText>R$ 11,00</WaitersCommissionText>
                {showDeleteButton && (
                  <TouchableOpacity style={{ marginLeft: -50 }} onPress={handleWaitersCommissionPress}>
                    <Feather name="x-square" size={18} color="red" />
                  </TouchableOpacity>
                )}
              </WaitersCommissionContainer>
            }
            <TotalContainer>
              <TotalText>Total</TotalText>
              <TotalText>R$ 63,00</TotalText>
            </TotalContainer>
          </View>
          <MakePayment />
        </MoreOptionsContainer>
      </MainContainer>
      <ChangeQuantity
        showChangeQuantityModal={showChangeQuantityModal}
        toggleChangeQuantityModal={toggleChangeQuantityModal}
      />
    </Container>
  );
}
