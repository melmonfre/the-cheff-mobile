import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.View`
  flex: 1;
  padding: 0 15px;

  justify-content: center;
  align-items: center;
`;

export const LinkButton = styled.TouchableOpacity`
  margin-top: 12px;
  margin-bottom: 30px;
  align-self: flex-end;
`;

export const FormContainer = styled.View`
  width: 100%;
  gap: 16px;
`;


export const Footer = styled.View`
  padding: 0 15px;
  margin-top: auto;
  margin-bottom: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const CreateAccountButton = styled.TouchableOpacity``;
