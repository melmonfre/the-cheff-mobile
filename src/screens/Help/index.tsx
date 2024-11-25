import React from "react";
import { Container, FormContainer, Main } from "./styles";
import { HelpRow } from "@components/HelpRow";
import { Text } from "react-native";
import { Header } from "@components/Header";
import { MenuButton } from "@components/MenuButton";
import { SearchInput } from "@components/SearchInput";

const HelpCards = [
  {
    id: 1,
    uri: "https://i.ytimg.com/vi/ey5hs2S5z-M/mqdefault.jpg",
    cardTitle: "Como cadastrar um produto novo?",
    date: "1 semana atrás",
  },
  {
    id: 2,
    uri: "https://i.ytimg.com/vi/ey5hs2S5z-M/mqdefault.jpg",
    cardTitle: "Como alterar um produto?",
    date: "2 semana atrás",
  },
  {
    id: 3,
    uri: "https://i.ytimg.com/vi/ey5hs2S5z-M/mqdefault.jpg",
    cardTitle: "Como deletar um produto?",
    date: "3 semana atrás",
  },
  {
    id: 4,
    uri: "https://i.ytimg.com/vi/ey5hs2S5z-M/mqdefault.jpg",
    cardTitle: "Como cadastrar um produto novo?",
    date: "1 semana atrás",
  },
  {
    id: 5,
    uri: "https://i.ytimg.com/vi/ey5hs2S5z-M/mqdefault.jpg",
    cardTitle: "Como alterar um produto?",
    date: "2 semana atrás",
  },
];

export function HelpPage() {
  return (
    <Container>
      <Header
        headerTitle="Central de ajuda"
        leftButton={<MenuButton />}
        variant="secondary"
        hasSearch={true}
      />
      <FormContainer>
        <SearchInput placeholder="Pesquisar por assunto" />
      </FormContainer>
      <Main>
        {HelpCards.map((item) => (
          <Text key={item.id}>
            <HelpRow
              id={item.id}
              uri={item.uri}
              cardTitle={item.cardTitle}
              date={item.date}
            />
          </Text>
        ))}
      </Main>
    </Container >
  );
}
