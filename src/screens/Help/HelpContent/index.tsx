import React, { useState } from "react";
import { Image } from "react-native";
import { Header } from "@components/Header";
import { BackButton } from "@components/BackButton";
import { Typography } from "@components/Typography";
import { AntDesign } from '@expo/vector-icons';
import {
  Container,
  Footer,
  FooterIconBox,
  View2,
  View3,
  View4,
} from "./styles";
import { ModalSupport } from "@components/FooterModals/ModalSupport";

export const HelpContent = ({ route }) => {
  const { id, uri, cardTitle, date } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDislikeClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <Header
        headerTitle="Central de ajuda"
        leftButton={<BackButton />}
        variant="secondary"
      />
      <Image
        id={id}
        resizeMode="cover"
        source={{
          uri,
        }}
        style={{ width: "100%", height: 240 }}
      />
      <View2>
        <View3>
          <Typography font="semi_bold" size="text_sm">{cardTitle}</Typography>
        </View3>
        <View4>
          <Typography size="text_xs" color="gray_400">{date}</Typography>
        </View4>
      </View2>

      <Footer>
        <Typography>Seu problema foi resolvido?</Typography>
        <View4>
          <FooterIconBox onPress={handleDislikeClick}>
            <AntDesign name="dislike1" size={18} color="#ff0000" />
          </FooterIconBox>
          <FooterIconBox>
            <AntDesign name="like1" size={18} color="#08AE25" />
          </FooterIconBox>
        </View4>
      </Footer>

      {isModalVisible && <ModalSupport isVisible={isModalVisible} closeModal={closeModal} />}
    </Container>
  );
};
