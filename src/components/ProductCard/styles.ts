import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Typography } from "@components/Typography";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray_200};
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 89px;
  border-radius: 8px;
`;

export const BoxDescription = styled.View`
  margin-top: 6px;

  gap: 2px;
`;

export const ProductName = styled(Typography).attrs(() => ({
  size: "text_md",
  font: "light",
}))``;

export const Price = styled(Typography).attrs(() => ({
  font: "semi_bold",
  size: "text_xs",
}))``;
