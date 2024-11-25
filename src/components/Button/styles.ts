import { Typography } from "@components/Typography";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyledProps =
  | "primary"
  | "secondary"
  | "primary-outline"
  | "secondary-outline"
  | "ghost"
  | "del-button";

type StyledProps = {
  variant: ButtonStyledProps;
};

export const Container = styled(TouchableOpacity) <StyledProps>`
  flex: 1;
  max-height: 46px;
  min-height: 46px;
  border-radius: 8px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-top: 5px;

  ${({ theme }) => css`
    font-size: ${theme.font_size.text_md}px;
    color: ${theme.colors.gray_800};
  `}

  ${({ theme, variant }) =>
    variant === "primary" &&
    css`
      background-color: ${theme.colors.green_dark};
    `}

    ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colors.gray_200};
    `}
    
    ${({ theme, variant }) =>
    variant === "primary-outline" &&
    css`
      border: 1.5px solid ${theme.colors.green_dark};
      color: ${theme.colors.green_dark};
      background-color: transparent;
    `}

    ${({ theme, variant }) =>
    variant === "secondary-outline" &&
    css`
      border: 1px solid ${theme.colors.gray_800};
      color: ${theme.colors.gray_800};
      background-color: transparent;
    `}

    ${({ variant }) =>
    variant === "ghost" &&
    css`
      background-color: transparent;
    `}

    ${({ theme, variant }) =>
    variant === "del-button" &&
    css`
      background-color: ${theme.colors.red_dark};
    `}
`;

export const Title = styled(Typography).attrs<StyledProps>(({ }) => ({
  font: "semi_bold",
  color: "white",
}))`
    ${({ theme, variant }) =>
    variant === "primary" &&
    css`
      color: ${theme.colors.white};
    `}

    ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      color: ${theme.colors.gray_800};
    `}

  ${({ theme, variant }) =>
    variant === "ghost" &&
    css`
      color: ${theme.colors.green_dark};
    `}

    ${({ theme, variant }) =>
    variant === "primary-outline" &&
    css`
      color: ${theme.colors.green_dark};
    `}

    ${({ theme, variant }) =>
    variant === "secondary-outline" &&
    css`
      color: ${theme.colors.gray_800};
    `}
`;
