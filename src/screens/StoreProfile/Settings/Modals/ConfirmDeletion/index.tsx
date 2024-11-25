import { Typography } from "@components/Typography";
import { ActionButtons, Container, YesButton, NoButton, InputBox } from "./styles";
import { Input } from "@components/Input";

export function ConfirmDeletionModal({ closeModal }: any) {
  return (
    <Container>
      <Typography
        font="bold"
        size="text_2xl"
        style={{ width: '100%', alignSelf: 'center' }}
      >
        Confirmação
      </Typography>
      <InputBox>
        <Typography size="text_sm">Digite sua senha:</Typography>
        <Input placeholder="********" />
      </InputBox>
      <ActionButtons>
        <YesButton onPress={closeModal}>
          <Typography size="text_xs" color="red_dark">Excluir conta</Typography>
        </YesButton>
        <NoButton onPress={closeModal}>
          <Typography size="text_xs">Cancelar</Typography>
        </NoButton>
      </ActionButtons>
    </Container>
  )
}