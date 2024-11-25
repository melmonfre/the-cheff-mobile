import { ScrollView, Text, View, Modal, StatusBar, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { AddItems } from "@components/FooterModals/AddItems";
import {
  Backdrop,
  CloseModalButton,
  CloseModalButtonImage,
  ComentaryInput,
  DiscountPrice,
  FakeCheck,
  ImageContainer,
  ImageProduct,
  IncrementDecrement,
  InfosProduct,
  Item,
  ItemName,
  ItemPrice,
  MandatoryHeader,
  MandatoryItemText,
  MandatoryItemTextThin,
  MandatoryItems,
  MandatoryTag,
  MandatoryTagText,
  ModalContainer,
  OriginalPrice,
  PriceContainer,
  SubtitleProduct,
  TitleProduct,
} from "./styles";

type ProductModalProps = {
  product: any | null;
  onCloseModal: () => void;
}

export function ProductModal({ product, onCloseModal }: ProductModalProps) {

  const productName = product?.name || "Nome do Produto";
  const productPrice = product?.price || "Preço do Produto";
  const productImage = product?.image
    ? { uri: product.image }
    : require("../../../assets/images/master-burger.jpg");

  return (
    <Modal animationType="slide" transparent>
      <StatusBar backgroundColor="rgba(0,0,0,0.3)" />
      <Backdrop>
        <ModalContainer>
          <ImageContainer>
            <ImageProduct
              source={productImage}
            />
            <CloseModalButton onPress={onCloseModal}>
              <CloseModalButtonImage
                source={require("../../../assets/icons/arrow-down.png")}
              />
            </CloseModalButton>
          </ImageContainer>
          <ScrollView>
            <InfosProduct>
              <TitleProduct>{productName}</TitleProduct>
              <SubtitleProduct>
                Lorem ipsum dolor sit amet consectetur. Et tempus at quisque
                lacinia sit a odio enim euismod. Mattis tellus sed leo in vitae
                nullam vestibulum mattis integer.
              </SubtitleProduct>
              <PriceContainer>
                <OriginalPrice>R$ 35,00</OriginalPrice>
                <DiscountPrice>R$ {productPrice}</DiscountPrice>
              </PriceContainer>
            </InfosProduct>
            {/* <View>
              <MandatoryItems>
                <MandatoryHeader>
                  <View>
                    <MandatoryItemText>Dê um up no seu lanche</MandatoryItemText>
                    <MandatoryItemTextThin>0 de 2</MandatoryItemTextThin>
                  </View>
                  <MandatoryTag>
                    <MandatoryTagText>OBRIGATÓRIO</MandatoryTagText>
                  </MandatoryTag>
                </MandatoryHeader>
                <Item>
                  <View>
                    <ItemName>Bacon</ItemName>
                    <ItemPrice>+ R$ 10,00</ItemPrice>
                  </View>
                  <IncrementDecrement>
                    <AntDesign name="minus" size={10} color="black" />
                    <Text>1</Text>
                    <AntDesign name="plus" size={10} color="black" />
                  </IncrementDecrement>
                </Item>
                <Item>
                  <View>
                    <ItemName>Bacon</ItemName>
                    <ItemPrice>+ R$ 10,00</ItemPrice>
                  </View>
                  <FakeCheck />
                  <BouncyCheckbox
                    style={{ width: 25 }}
                    size={25}
                    fillColor="#08AE25"
                    unfillColor="transparent"
                    innerIconStyle={{ borderWidth: 0 }}
                  />
                </Item>
              </MandatoryItems>
            </View> */}
            <ComentaryInput
              multiline={true}
              maxLength={200}
              numberOfLines={4}
              textAlignVertical="top"
              placeholder="Gostaria de deixar uma observação?"
            />
          </ScrollView>
          <AddItems productPrice={productPrice} />
        </ModalContainer>
      </Backdrop>
    </Modal>
  );
}
