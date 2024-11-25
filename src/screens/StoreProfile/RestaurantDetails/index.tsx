import { Input } from "@components/Input";
import { Container, AddressContainer, ContactContainer, RestaurantDetailsContainer } from "./styles";
import { Typography } from "@components/Typography";
import { ScrollView } from "react-native";

export function RestaurantDetails() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <RestaurantDetailsContainer>
          <Typography size="text_md" font="medium">Dados do restaurante</Typography>
          <Input placeholder="Nome, razão social" />
          <Input placeholder="CNPJ ou CPF" />
        </RestaurantDetailsContainer>
        <ContactContainer>
          <Typography size="text_md" font="medium">Contato</Typography>
          <Input placeholder="Email" />
          <Input placeholder="Celular/Whatsapp" />
        </ContactContainer>
        <AddressContainer>
          <Typography size="text_md" font="medium">Endereço</Typography>
          <Input placeholder="Rua" />
          <Input placeholder="Número" />
        </AddressContainer>
      </Container>
    </ScrollView>
  )
}