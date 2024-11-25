import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { BoxImage, Container, Content, ContentBox, ContentHeader, Footer, Header, List, LogoutBox, ProfileImage } from "./styles";
import { Typography } from "@components/Typography";

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const image = { uri: 'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png' };

export function CustomDrawer(props: DrawerContentComponentProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <Header>
          <BoxImage>
            <ProfileImage source={image} />
          </BoxImage>
          <ContentHeader>
            <Typography size="text_xl" font="bold">Starbucks</Typography>
            <Typography size="text_xs" font="medium">CNPJ: 28.940.463/0001-63</Typography>
          </ContentHeader>
        </Header>
        <List>
          <DrawerItemList {...props} />
        </List>
      </DrawerContentScrollView>
      <Footer>
        <LogoutBox>
          <MaterialIcons
            name="logout"
            size={24} color="red"
            style={{ transform: [{ rotateY: '180deg' }] }}
          />
          <Typography color="red_dark">Sair</Typography>
        </LogoutBox>
        <ContentBox>
          <Content>
            <Typography font="semi_bold" size="text_lg" color="green_dark" style={{ marginBottom: -5 }}>
              Seja premium
            </Typography>
            <Typography size="text_xs" color="gray_600">Gerencie melhor seu negócio com uma assinatura premium.</Typography>
            <Typography font="semi_bold" size="text_xs" onPress={() => navigation.navigate('premium')}>
              7 dias para o teste gratuito expirar,
              <Typography font="bold" color="green_dark" size="text_xs"> seja premium!</Typography>
            </Typography>
          </Content>
          <FontAwesome
            name="diamond"
            size={24} color="#08AE25"
            style={{ marginLeft: -5, marginTop: 25 }}
          />
        </ContentBox>
      </Footer>
    </Container>
  )
}