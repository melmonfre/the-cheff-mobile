import { FlatList } from "react-native";
import { Title, Item, Separator, Container } from "./styles";

import { Entypo } from '@expo/vector-icons';
import { CustomHeader } from "@components/CustomHeader";
import { ModalAddCategory } from "@components/FooterModals/ModalAddCategory";
import { Header } from "@components/Header";
import { BackButton } from "@components/BackButton";

const DATA = [
  { id: 1, title: 'Categoria 1', },
  { id: 2, title: 'Categoria 2', },
  { id: 3, title: 'Categoria 3', },
  { id: 4, title: 'Categoria 4', },
  { id: 5, title: 'Categoria 5', },
  { id: 6, title: 'Categoria 6', },
  { id: 7, title: 'Categoria 7', },
  { id: 8, title: 'Categoria 8', },
  { id: 9, title: 'Categoria 9', },
  { id: 10, title: 'Categoria 10', },
];

type ItemProps = { id: number; title: string };

const SeparatorItem = () => (
  <Separator />
)

export function CategoriesScreen() {
  const RenderItem = ({ item }: { item: ItemProps }) => {
    return (
      <Item>
        <Title>{item.title}</Title>
        <Entypo style={{ marginRight: 15 }} name="dots-three-vertical" size={15} color="#929292" />
      </Item>
    )
  };

  return (
    <Container>
      <Header headerTitle="Categorias" leftButton={<BackButton variant="primary" />} variant="secondary" />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={SeparatorItem}
        data={DATA}
        renderItem={RenderItem}
      />
      <ModalAddCategory />
    </Container>
  )
}