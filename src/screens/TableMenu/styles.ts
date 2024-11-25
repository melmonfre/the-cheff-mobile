import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.View`
  flex: 1;
  padding: 0 15px;
`;

export const FormContainer = styled.View`
  width: 100%;
  margin-top: -28px;
`;
