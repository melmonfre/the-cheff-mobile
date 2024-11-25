import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 0px 15px;
`;

export const Box = styled.View`
  padding: 0px 12px;
  
  align-items: center;
`;

export const Logo = styled.Image``;
