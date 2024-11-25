import { FlatList } from "react-native";

import {
  CloseButton,
  Container,
  Footer,
  FooterButton,
  HStack,
  VStack,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";

import { ReceiptDetailsCard } from "@components/ReceiptDetailsCard";
import { Header } from "@components/Header";
import { BackButton } from "@components/BackButton";

import { useNavigation } from "@react-navigation/native";
import { Typography } from "@components/Typography";

import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReceiptListItem } from "@components/ReceiptListItem";

export function Receipt() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        leftButton={<BackButton />}
        rightButton={
          <CloseButton>
            <AntDesign name="close" size={16} color="black" />
          </CloseButton>
        }
      />

      <FlatList
        ListHeaderComponent={() => <ReceiptDetailsCard />}
        data={[1, 2, 3]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <ReceiptListItem />}
        ListFooterComponent={() => (
          <VStack>
            <HStack>
              <Typography size="text_lg">Subtotal</Typography>
              <Typography size="text_lg">R$ 50,00</Typography>
            </HStack>

            <HStack>
              <Typography size="text_lg" font="semi_bold">
                Total
              </Typography>
              <Typography size="text_lg" font="semi_bold">
                R$ 50,00
              </Typography>
            </HStack>

            <HStack>
              <Typography size="text_sm" font="light" color="gray_400">
                Dinheiro
              </Typography>
              <Typography size="text_sm" font="light" color="gray_400">
                R$ 50,00
              </Typography>
            </HStack>

            <Typography
              style={{ marginVertical: 20, alignSelf: "center" }}
              size="text_sm"
            >
              app.
              <Typography size="text_sm" font="semi_bold">
                gerencie
              </Typography>
              .me
            </Typography>
          </VStack>
        )}
      />

      <Footer>
        <FooterButton>
          <Feather name="share-2" size={50} color="black" />
        </FooterButton>

        <FooterButton style={{ minWidth: 80, width: "100%" }}>
          <Feather name="printer" size={50} color="black" />
        </FooterButton>

        <FooterButton>
          <MaterialCommunityIcons name="file-pdf-box" size={60} color="black" />
        </FooterButton>
      </Footer>
    </Container>
  );
}
