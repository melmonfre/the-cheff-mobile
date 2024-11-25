import styled from "styled-components/native";
import { Typography } from "@components/Typography";
import { SafeAreaView } from "react-native-safe-area-context";

export type HeaderStyledProps = "primary" | "secondary";

type StyledProps = {
  variant: HeaderStyledProps;
};

export const Container = styled(SafeAreaView) <StyledProps>`
  flex: 1;
  max-height: 85px;
  min-height: 85px;
  padding: 0px 15px;
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.white : theme.colors.green_dark};

  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 60px;

  flex-direction: row;
  align-items: center;
  gap: 4px;
  `;

export const ButtonTitle = styled(Typography).attrs(({ }) => ({
  size: "text_xs",
}))``;

export const Title = styled(Typography).attrs(({ }) => ({
  size: "text_lg",
  font: "semi_bold",
}))`
  flex: 1;
  text-align: center;
  line-height: 20px;
  `;

export const ButtonRight = styled.View`
  min-width: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  `;
