import { Typography } from "@components/Typography";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px 15px;
  min-height: 70px;
`;

export const HStack = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const VStack = styled.View`
  flex: 1;
  gap: 2px;
`;

export const Title = styled(Typography).attrs(() => ({
  font: "semi_bold",
  size: "text_sm",
}))``;

export const Total = styled(Typography).attrs(() => ({
  font: "medium",
  size: "text_sm",
}))``;

export const Subtotal = styled(Typography).attrs(() => ({
  font: "medium",
  size: "text_xs",
}))`
  color: #929292;
`;
