import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import DeleteOrder from "../DeleteOrder";
import BottomModal from "./BottomModal/bottomModal";
import {
  ActionButtons,
  ArrowRightIcon,
  ButtonDelete,
  ButtonDeleteText,
  ButtonNoDelete,
  ButtonNoDeleteText,
  Container,
  ContentModal,
  InnerButton,
  MoreButton,
  SubtitleModal,
  TitleModal
} from "./styles";
import { Typography } from "@components/Typography";

export default function MakePayment() {
  const [visibleDeleteOrder, setVisibleDeleteOrder] = useState(false);
  const [visibleBottomModal, setVisibleBottomModal] = useState(false);

  const navigation = useNavigation();

  const openDeleteOrder = () => {
    setVisibleDeleteOrder(true);
  };

  const closeDeleteOrder = () => {
    setVisibleDeleteOrder(false);
  };

  const openBottomModal = () => {
    setVisibleBottomModal(true);
  };

  const closeBottomModal = () => {
    setVisibleBottomModal(false);
  };

  return (
    <Container>
      <MoreButton activeOpacity={0.5} onPress={openBottomModal}>
        <Entypo name="dots-three-vertical" size={16} color="black" />
      </MoreButton>
      <InnerButton activeOpacity={0.7} onPress={() => navigation.navigate('payment')}>
        <Typography color="white">Realizar pagamento</Typography>
        <ArrowRightIcon>
          <AntDesign name="arrowright" size={24} color="white" />
        </ArrowRightIcon>
      </InnerButton>
      <BottomModal isVisible={visibleBottomModal} onClose={closeBottomModal}>
        <TouchableOpacity onPress={openDeleteOrder}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: '#FF3737',
            }}
          >
            Excluir mesa
          </Text>
        </TouchableOpacity>
      </BottomModal>
      <DeleteOrder isVisible={visibleDeleteOrder} onClose={closeDeleteOrder}>
        <ContentModal>
          <TitleModal>Confirmação</TitleModal>
          <SubtitleModal>Você realmente deseja</SubtitleModal>
          <SubtitleModal>excluir: Pedido</SubtitleModal>
        </ContentModal>
        <ActionButtons>
          <ButtonDelete
            activeOpacity={0.7}
            onPress={() => {
              closeDeleteOrder();
              closeBottomModal();
            }}
          >
            <ButtonDeleteText>Sim, quero excluir</ButtonDeleteText>
          </ButtonDelete>
          <ButtonNoDelete
            activeOpacity={0.7}
            onPress={() => {
              closeDeleteOrder();
              closeBottomModal();
            }}
          >
            <ButtonNoDeleteText>Não</ButtonNoDeleteText>
          </ButtonNoDelete>
        </ActionButtons>
      </DeleteOrder>
    </Container>
  );
}
