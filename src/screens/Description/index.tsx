import React, { useEffect, useRef } from 'react';
import { Header } from "@components/Header";
import { Container } from "./styles";
import { BackButton } from "@components/BackButton";
import { TextInput } from "react-native";

export function Description() {
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);

  return (
    <Container>
      <Header
        variant="secondary"
        leftButton={<BackButton variant="primary" />}
        headerTitle="Descrição"
      />
      <TextInput
        ref={textInputRef}
        placeholder="Digite aqui sua descrição"
        style={{ marginTop: 25, marginLeft: 15, fontSize: 16 }}
        autoFocus={true}
        placeholderTextColor="#D3D3D3"
      />
    </Container>
  )
}
