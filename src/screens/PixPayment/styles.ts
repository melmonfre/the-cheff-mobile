import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.View`
  margin-top: 36px;
  padding: 0 15px;
  gap: 20px;
`;

export const Footer = styled.View`
  padding: 15px 15px 70px;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors.gray_300};
  margin-top: auto;
`;
