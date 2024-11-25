import { Typography } from "@components/Typography";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "styled-components";

export type HeaderStyledProps = "primary" | "secondary";

type StyledProps = {
  variant?: HeaderStyledProps;
  hasSearch: boolean;
};

export const Container = styled(SafeAreaView) <StyledProps>`
  width: 100%;
  height: 85px;
  padding: 0px 15px;
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.white : theme.colors.green_dark};

  ${({ hasSearch }) =>
    hasSearch &&
    css`
      height: 126px;
    `}

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const BoxButton = styled.View<StyledProps>`
  min-width: 103px;

  ${({ hasSearch }) =>
    hasSearch &&
    css`
      margin-bottom: 26px;
    `}
`;

export const Title = styled(Typography).attrs<StyledProps>(() => ({
  size: "text_lg",
  font: "semi_bold",
}))`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  ${({ hasSearch }) =>
    hasSearch &&
    css`
      margin-bottom: 26px;
    `}
`;
