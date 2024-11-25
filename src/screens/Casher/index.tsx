import { FlatList } from "react-native";
import { Container, Content, IconBox, Inner, Item, ItemBold, Row } from "./styles";

import { Octicons } from '@expo/vector-icons';
import { Header } from "@components/Header";
import { MenuButton } from "@components/MenuButton";
import { useNavigation } from "@react-navigation/native";

type InnerItemProps = {
  day: string;
  totalSold: string;
}

const DATA = [
  { day: 'Hoje', totalSold: 'R$ 230,89' },
  { day: 'Ontem', totalSold: 'R$ 450,00' },
  { day: '16 de Agosto', totalSold: 'R$ 130,00' },
  { day: '15 de Agosto', totalSold: 'R$ 700,00' },
  { day: '14 de Agosto', totalSold: 'R$ 1.300,00' },
  { day: '13 de Agosto', totalSold: 'R$ 2.986,00' },
]

export function Casher() {
  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.navigate('casherDetails');
  };

  const InnerItem: React.FC<InnerItemProps> = ({ day, totalSold }) => {
    return (
      <Inner activeOpacity={0.7} onPress={handleItemPress}>
        <Content>
          <Item>{day}</Item>
          <Row>
            <Item>Total vendido: </Item>
            <ItemBold>{totalSold}</ItemBold>
          </Row>
        </Content>
        <IconBox>
          <Octicons name="info" size={16} color="white" />
        </IconBox>
      </Inner>
    )
  }

  return (
    <Container>
      <Header
        leftButton={<MenuButton />}
        headerTitle="Caixa"
        variant="secondary"
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <InnerItem day={item.day} totalSold={item.totalSold} />}
      />
    </Container>
  )
}