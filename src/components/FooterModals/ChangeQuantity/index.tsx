import { Typography } from "@components/Typography";
import Modal from "react-native-modal";
import { Entypo } from '@expo/vector-icons';
import { Container, IconBox, IncrementDecrement, TopLine } from "./styles";
import { Button } from "@components/Button";

type ChangeQuantityProps = {
  showChangeQuantityModal: boolean;
  toggleChangeQuantityModal: () => void;
}

export function ChangeQuantity({
  showChangeQuantityModal,
  toggleChangeQuantityModal
}: ChangeQuantityProps) {
  return (
    <Modal
      isVisible={showChangeQuantityModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onSwipeComplete={toggleChangeQuantityModal}
      swipeDirection={'down'}
      backdropOpacity={0.3}
      statusBarTranslucent
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <Container>
        <TopLine />
        <Typography style={{ marginTop: 30 }}>Coca-cola 2L</Typography>
        <IncrementDecrement>
          <IconBox>
            <Entypo name="minus" size={18} color="#232121" />
          </IconBox>
          <Typography>1</Typography>
          <IconBox>
            <Entypo name="plus" size={18} color="#232121" />
          </IconBox>
        </IncrementDecrement>
        <Button title="Salvar alteração" />
      </Container>
    </Modal>
  )
}