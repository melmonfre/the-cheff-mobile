import { ReactNode } from "react";
import {
  BackButton,
  ButtonRight,
  ButtonTitle,
  Container,
  HeaderStyledProps,
  Title,
} from "./styles";

import { useTheme } from "styled-components/native";

import AntiDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

type DefaultHeaderProps = {
  title?: string;
  children?: ReactNode;
  bgColor?: HeaderStyledProps;
};

export function CustomHeader({
  title,
  children,
  bgColor = "primary",
}: DefaultHeaderProps) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Container variant={bgColor}>
      <BackButton onPress={() => navigation.goBack()}>
        <AntiDesign name="arrowleft" size={14} color={colors.gray_800} />
        <ButtonTitle>voltar</ButtonTitle>
      </BackButton>

      <Title>{title}</Title>

      <ButtonRight>{children}</ButtonRight>
    </Container>
  );
}
