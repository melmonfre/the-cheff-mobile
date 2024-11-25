import { Typography } from "@components/Typography";
import { ActionButtons, Container, SubTitle, YesButton, NoButton, Title } from "./styles";

export function CancelPremiumModal({ closeModal }: any) {
  return (
    <Container>
      <Title>
        <Typography font="bold" size="text_2xl">Cancelar o </Typography>
        <Typography font="bold" size="text_2xl" color="green_dark">Premium</Typography>
      </Title>
      <SubTitle>
        <Typography color="gray_600" size="text_sm" style={{ width: 270, textAlign: "center" }}>
          Você realmente deseja cancelar a sua assinatura Premium? Caso cancele você continuará a usar as funcionalidades até <Typography color="gray_800" size="text_sm">27/09/2023.</Typography>
        </Typography>
      </SubTitle>
      <ActionButtons>
        <YesButton onPress={closeModal}>
          <Typography size="text_xs">Sim, quero cancelar</Typography>
        </YesButton>
        <NoButton onPress={closeModal}>
          <Typography size="text_xs">Não</Typography>
        </NoButton>
      </ActionButtons>
    </Container>
  )
}