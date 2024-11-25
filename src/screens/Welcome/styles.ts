import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0px 15px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Image = styled.Image``;

export const Form = styled.View`
  flex: 0.25;
  gap: 14px;
  margin-bottom: 50px;
`;
