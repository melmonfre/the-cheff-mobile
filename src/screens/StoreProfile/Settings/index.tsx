import { useState } from "react";
import Modal from "react-native-modal";
import { Input } from "@components/Input";
import { Entypo } from '@expo/vector-icons';
import { useWindowDimensions } from "react-native";
import { Typography } from "@components/Typography";
import { DeleteAccountModal } from "./Modals/DeleteAccount";
import { CancelPremiumModal } from "./Modals/CancelPremium";
import { Container, ActionButton, InfosContainer, InputContainer, ItemBox, LineSeparator } from "./styles";
import { ToggleSwitch } from "@components/ToggleSwitch";

export function Settings() {
  const windowDimension = useWindowDimensions();

  const [isDeleteAccountModalVisible, setDeleteAccountModalVisible] = useState(false);
  const [isCancelPremiumModalVisible, setCancelPremiumModalVisible] = useState(false);

  const toggleDeleteAccountModal = () => {
    setDeleteAccountModalVisible(!isDeleteAccountModalVisible);
  };

  const toggleCancelPremiumModal = () => {
    setCancelPremiumModalVisible(!isCancelPremiumModalVisible);
  }

  return (
    <Container>
      <InputContainer>
        <Input placeholder="Quantidade de mesas" />
        <Input placeholder="Comissão do garçom" />
      </InputContainer>
      <InfosContainer>
        <ItemBox>
          <ActionButton>
            <Typography>Estoque negativo</Typography>
            <ToggleSwitch />
          </ActionButton>
          <LineSeparator />
        </ItemBox>
        <ItemBox>
          <ActionButton onPress={toggleCancelPremiumModal}>
            <Typography style={{ color: '#08AE25' }}>Seja premium</Typography>
            <Entypo name="chevron-small-right" size={24} color="#08AE25" />
          </ActionButton>
          <LineSeparator />
        </ItemBox>
        <ItemBox>
          <ActionButton>
            <Typography>Política de privacidade</Typography>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </ActionButton>
          <LineSeparator />
        </ItemBox>
        <ItemBox>
          <ActionButton>
            <Typography>Termo de uso</Typography>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </ActionButton>
          <LineSeparator />
        </ItemBox>
        <ItemBox>
          <ActionButton onPress={toggleDeleteAccountModal}>
            <Typography style={{ color: 'red' }}>Excluir minha conta</Typography>
            <Entypo name="chevron-small-right" size={24} color="red" />
          </ActionButton>
          <LineSeparator />
        </ItemBox>
      </InfosContainer>
      <Modal
        deviceHeight={windowDimension.height + 32}
        statusBarTranslucent backdropOpacity={0.2}
        isVisible={isDeleteAccountModalVisible}
      >
        <DeleteAccountModal
          closeModal={toggleDeleteAccountModal}
          titleText="Excluir conta"
          subTitleText1="Você realmente deseja "
          subTitleText2=" excluir sua conta?"
        />
      </Modal>
      <Modal
        deviceHeight={windowDimension.height + 32}
        statusBarTranslucent backdropOpacity={0.2}
        isVisible={isCancelPremiumModalVisible}
      >
        <CancelPremiumModal closeModal={toggleCancelPremiumModal} />
      </Modal>
    </Container>
  )
}