import { Typography } from "@components/Typography";
import { TextInput as NativeTextInput, Animated } from "react-native";
import styled, { css } from "styled-components/native";

type InputErrorStyledProps = string | null;

type StyledProps = {
  errorText?: InputErrorStyledProps;
};

export const Container = styled.View<StyledProps>`
  width: 100%;
  min-height: 45px;
  max-height: 45px;
  padding: 0px 14px;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, errorText }) =>
    !errorText ? theme.colors.gray_100 : theme.colors.red_dark};
  position: relative;
`;

export const LabelContainer = styled(Animated.View)`
  position: absolute;
  left: 6px;
  top: -11px;
  padding: 0px 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Label = styled(Animated.Text) <StyledProps>`
  ${({ theme, errorText }) => css`
    color: ${!errorText ? theme.colors.gray_100 : theme.colors.red_dark};
    font-family: ${theme.font_family.regular};
  `}

  padding: 0px 4px;
`;

export const TextInput = styled(NativeTextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_100,
}))`
  flex: 1;
  height: 100%;

  font-size: ${({ theme }) => theme.font_size.text_md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
`;

export const ErrorMessage = styled(Typography).attrs(({ }) => ({
  color: "red_dark",
  size: "text_xs",
}))`
  padding: 0px 4px;
  margin-top: 4px;
  margin-left: 10px;

  align-self: flex-start;
`;
