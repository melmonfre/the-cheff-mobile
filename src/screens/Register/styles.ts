import { Typography } from "@components/Typography";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(Typography).attrs(({}) => ({
  size: "text_lg",
  color: "green_dark",
  font: "semi_bold",
}))``;

export const FormContent = styled.View`
  padding-top: 10px;
  margin-bottom: 24px;

  gap: 12px;
`;

export const TermsOfUse = styled.View`
  margin-bottom: 60px;
`;

export const TermsOfUseText = styled(Typography).attrs(() => ({
  color: "green_dark",
  font: "semi_bold",
  size: "text_xs",
}))`
  text-decoration: underline;
`;
