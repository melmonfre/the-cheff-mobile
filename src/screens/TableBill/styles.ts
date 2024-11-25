import { Typography } from "@components/Typography";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const HeaderContainer = styled(View)`
  padding-inline: 15px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`;

export const MainContainer = styled(View)`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Item = styled(View)`
  position: relative;
  flex-direction: row;
  margin-top: 20px;
  padding: 0px 15px 25px;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_200};
`

export const AmountItem = styled(Typography).attrs(() => ({
  size: "text_lg",
  font: "bold",
}))`
  width: 60px;
`;

export const ProductText = styled(Typography).attrs(() => ({
  size: "text_sm",
  font: "light",
}))``;

export const ProductPriceContainer = styled(View)`
  flex-direction: row;
  gap: 5px;
`;

export const PreviousPrice = styled(Typography).attrs(() => ({
  size: "text_xs",
  font: "light",
}))`
  text-decoration-line: line-through;
`;

export const CurrentPrice = styled(Typography).attrs(() => ({
  size: "text_xs",
  font: "medium",
}))`
  color: ${({ theme }) => theme.colors.gray_400};
`;

export const TotalPrice = styled(Typography).attrs(() => ({
  size: "text_sm",
  font: "semi_bold",
}))``;

export const AddMoreProductsButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 11px;
  margin: 0px 15px;
  border-radius: 8px;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.colors.green_dark};
`;

export const TextAddMoreProducts = styled(Typography).attrs(() => ({
  size: "text_md",
  font: "semi_bold",
}))`
  color: ${({ theme }) => theme.colors.green_dark};
`;

export const MoreOptionsContainer = styled(View)``;

export const SubtotalContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubtotalText = styled(Typography).attrs(() => ({
  size: "text_lg",
  font: "regular",
}))``;

export const WaitersCommissionContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WaitersCommissionText = styled(Typography).attrs(() => ({
  size: "text_lg",
  font: "regular",
  color: "green_dark",
}))``;

export const TotalContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalText = styled(Typography).attrs(() => ({
  size: "text_lg",
  font: "semi_bold",
}))``;