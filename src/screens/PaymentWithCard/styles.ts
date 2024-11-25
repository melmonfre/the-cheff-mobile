import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FormBox = styled.View`
  gap: 14px;
`


export const Box = styled.View`
  border-top-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray_200};
  padding: 15px 15px 60px;
  margin-top: 20px;
`