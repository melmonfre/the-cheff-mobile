import { Typography } from "@components/Typography";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type StyledProps = {
  isActive: boolean;
};

export const Container = styled(TouchableOpacity)<StyledProps>`
  padding: 10px 30px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray_200};
  border-radius: 999px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border-color: ${theme.colors.green_dark};
      background-color: rgba(240, 214, 130, 0.1);
    `}
`;

export const Title = styled(Typography).attrs<StyledProps>(({ isActive }) => ({
  font: isActive ? "bold" : "regular",
  color: isActive ? "green_dark" : "gray_600",
}))`
`;
