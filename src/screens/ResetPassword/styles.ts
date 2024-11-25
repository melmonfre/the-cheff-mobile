import { Typography } from "@components/Typography";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.white};
`

export const Box = styled.View`
  flex: 1;
  padding: 0 15px;
`

export const Text = styled(Typography).attrs(({}) => ({
  size: "text_xs",
  color: "gray_600"
}))`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 34px;
`;
