import { Header } from "@components/Header";
import { MenuButton } from "@components/MenuButton";
import { SearchInput } from "@components/SearchInput";
import { FlatList, TouchableOpacity } from "react-native";
import { Typography } from "@components/Typography";
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
import { Popover } from "@components/Popover";
import { useWindowDimensions } from "react-native";
import Modal from "react-native-modal";
import { ItemDelete } from "./Modal/ItemDelete";
import { useNavigation } from "@react-navigation/native";
import {
  AddBoxButton,
  BoxContent,
  Container,
  ContainerWithoutProducts,
  FormContainer,
  ImageBox,
  ImageItem,
  Item,
  ItemBox,
  ItemInfo,
  ListContainer,
  Separator,
  TextBox
} from "./styles";

const data = [
  { id: '1', name: 'Produto 1', image: { uri: 'https://s2.glbimg.com/GLiUy9qdBo_4Dc5leAevllSZM6s=/e.glbimg.com/og/ed/f/original/2021/09/20/casquinha_ice_creamy.jpg' } },
  { id: '2', name: 'Produto 2', image: { uri: 'https://lh3.googleusercontent.com/proxy/SW-Z58mhrH3Cqa1HXxHikwCCRrg8fMI4DbPhZz9eImYClfEeCfSue-J-Q6UvfTvQc8AzGvJrSMtA83hqlqdRa7sUg3f2f85I5_PX_W1sBFjDpsSS' } },
  { id: '3', name: 'Produto 3', image: { uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/0b2c0f4f7276d5cab9ebf370bc3a4b57_XL.jpg' } },
  { id: '4', name: 'Produto 4', image: { uri: 'https://lh3.googleusercontent.com/proxy/SW-Z58mhrH3Cqa1HXxHikwCCRrg8fMI4DbPhZz9eImYClfEeCfSue-J-Q6UvfTvQc8AzGvJrSMtA83hqlqdRa7sUg3f2f85I5_PX_W1sBFjDpsSS' } },
  { id: '5', name: 'Produto 5', image: { uri: 'https://s2.glbimg.com/GLiUy9qdBo_4Dc5leAevllSZM6s=/e.glbimg.com/og/ed/f/original/2021/09/20/casquinha_ice_creamy.jpg' } },
  { id: '6', name: 'Produto 6', image: { uri: 'https://lh3.googleusercontent.com/proxy/SW-Z58mhrH3Cqa1HXxHikwCCRrg8fMI4DbPhZz9eImYClfEeCfSue-J-Q6UvfTvQc8AzGvJrSMtA83hqlqdRa7sUg3f2f85I5_PX_W1sBFjDpsSS' } },
  { id: '7', name: 'Produto 7', image: { uri: 'https://lh3.googleusercontent.com/proxy/SW-Z58mhrH3Cqa1HXxHikwCCRrg8fMI4DbPhZz9eImYClfEeCfSue-J-Q6UvfTvQc8AzGvJrSMtA83hqlqdRa7sUg3f2f85I5_PX_W1sBFjDpsSS' } },
];

type ShowPopoverProps = {
  [id: string]: boolean;
};

export function Products() {
  const windowDimension = useWindowDimensions();

  const navigation = useNavigation()

  const [showPopover, setShowPopover] = useState<ShowPopoverProps>({});
  const [isDeleteAccountModalVisible, setDeleteAccountModalVisible] = useState(false);
  const [products, setProducts] = useState([]);

  const handleShowPopover = (id: string) => {
    setShowPopover(prevState => ({ ...prevState, [id]: !prevState[id] }));
  }

  const toggleDeleteAccountModal = () => {
    setDeleteAccountModalVisible(!isDeleteAccountModalVisible);
  };

  const closeDeleteItemModal = () => {
    setDeleteAccountModalVisible(false);
  };

  return (
    <Container>
      <Header
        variant="secondary"
        hasSearch={true}
        leftButton={<MenuButton />}
      />
      <FormContainer>
        <SearchInput placeholder="Buscar produto" />
      </FormContainer>
      {products.length === 0 ? (
        <ContainerWithoutProducts>
          <ListContainer>
            <BoxContent>
              <Typography font="bold" size="text_2xl" color="gray_600">Uhhh! 🤔</Typography>
              <Typography
                font="regular"
                size="text_sm"
                color="gray_400"
                style={{ textAlign: "center" }}
              >
                Você não cadastrou nenhum produto.
                Para adicionar seu primeiro produto,
                clique no botão abaixo.
              </Typography>
            </BoxContent>
            <AddBoxButton onPress={() => navigation.navigate('productsRoutes')}>
              <Entypo name="plus" size={48} color="#88B9C9" />
            </AddBoxButton>
          </ListContainer>
        </ContainerWithoutProducts>
      ) : (
        <ListContainer>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ItemBox>
                <Item>
                  <ItemInfo>
                    <ImageBox>
                      <ImageItem source={{ uri: item.image.uri }} />
                    </ImageBox>
                    <TextBox>
                      <Typography font="light" size="text_md">{item.name}</Typography>
                      <Typography font="bold" size="text_xs">R$ 100,00</Typography>
                    </TextBox>
                  </ItemInfo>
                  <TouchableOpacity
                    onPress={() => handleShowPopover(item.id)}
                    style={{ width: "auto", height: 24, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Entypo name="dots-three-vertical" size={16} color="black" />
                  </TouchableOpacity>
                </Item>
                {showPopover[item.id] &&
                  <Popover
                    changeQuantityText="Editar"
                    removeFromCartText="Excluir"
                    toggleDeleteItemModal={toggleDeleteAccountModal}
                  />}
                <Modal
                  deviceHeight={windowDimension.height + 32}
                  statusBarTranslucent
                  backdropOpacity={0.1}
                  isVisible={isDeleteAccountModalVisible}
                >
                  <ItemDelete closeModal={closeDeleteItemModal} />
                </Modal>
              </ItemBox>
            )}
            ItemSeparatorComponent={() => <Separator />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            style={{ marginBottom: 158 }}
          />
        </ListContainer>
      )}
    </Container>
  )
}