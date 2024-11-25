import { Typography } from "@components/Typography";
import { ActionButtons, Container, SubTitle, YesButton, NoButton } from "./styles";

export function ItemDelete({ closeModal }: { closeModal: () => void }) {
  return (
    <Container>
      <Typography font="bold" size="text_2xl">Confirmação</Typography>
      <SubTitle>
        <Typography color="gray_600" size="text_sm">
          Você realmente deseja excluir:
          <Typography color="gray_600" size="text_sm" font="semi_bold"> Nome produto</Typography>
        </Typography>
      </SubTitle>
      <ActionButtons>
        <YesButton>
          <Typography size="text_xs">Sim, quero excluir</Typography>
        </YesButton>
        <NoButton onPress={closeModal}>
          <Typography size="text_xs">Não</Typography>
        </NoButton>
      </ActionButtons>
    </Container>
  )
}