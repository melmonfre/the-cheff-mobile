import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Typography } from "@components/Typography";

type StyledProps = {
  isBusy: boolean;
};

export const Container = styled(TouchableOpacity)<StyledProps>`
  flex: 1;
  min-height: 128px;
  height: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray_200};

  ${({ theme, isBusy }) =>
    isBusy &&
    css`
      background-color: ${theme.colors.green_light};
      border-color: ${theme.colors.green_dark};
    `}
`;

export const VStack = styled.View``;

export const HStack = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
`;

export const RegularText = styled(Typography).attrs(() => ({
  font: "light",
  size: "text_sm",
}))``;

export const TextBold = styled(Typography).attrs(() => ({
  font: "medium",
  size: "text_sm",
}))`
  flex: 1;
  text-align: right;
`;

export const Title = styled(Typography).attrs(() => ({
  size: "text_md",
  font: "medium",
}))`
  align-self: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
