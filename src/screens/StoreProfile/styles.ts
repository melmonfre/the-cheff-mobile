import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`

export const FooterButton = styled.View`
  flex: 0.1;
  padding: 12px 15px 25px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.gray_100};
  background-color: ${({ theme }) => theme.colors.white};
`