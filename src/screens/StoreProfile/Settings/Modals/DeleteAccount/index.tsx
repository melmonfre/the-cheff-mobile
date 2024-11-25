import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { Typography } from "@components/Typography";
import Modal from "react-native-modal";
import { ActionButtons, Container, SubTitle, YesButton, NoButton } from "./styles";
import { ConfirmDeletionModal } from "../ConfirmDeletion";

export function DeleteAccountModal({ closeModal }: any) {
  const windowDimension = useWindowDimensions();

  const [isConfirmDeletionModalVisible, setConfirmDeletionModalVisible] = useState(false);

  const showConfirmDeletionModal = () => {
    setConfirmDeletionModalVisible(true);
  };

  const hideConfirmDeletionModal = () => {
    setConfirmDeletionModalVisible(false);
  };

  return (
    <Container>
      <Typography font="bold" size="text_2xl">Excluir conta</Typography>
      <SubTitle>
        <Typography color="gray_600" size="text_sm">Você realmente deseja</Typography>
        <Typography color="gray_600" size="text_sm">excluir sua conta?</Typography>
      </SubTitle>
      <ActionButtons>
        <YesButton onPress={showConfirmDeletionModal}>
          <Typography size="text_xs">Sim, quero excluir</Typography>
        </YesButton>
        <NoButton onPress={closeModal}>
          <Typography size="text_xs">Não</Typography>
        </NoButton>
      </ActionButtons>
      <Modal
        deviceHeight={windowDimension.height + 32}
        statusBarTranslucent backdropOpacity={0.2}
        isVisible={isConfirmDeletionModalVisible}
      >
        <ConfirmDeletionModal closeModal={hideConfirmDeletionModal} />
      </Modal>
    </Container>
  )
}