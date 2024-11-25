import { Typography } from "@components/Typography";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const Row = styled.View`
  align-items: stretch;
  display: flex;
  width: 100%;
`;

export const View2 = styled.View`
  align-items: stretch;
  align-self: left;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 10px 15px 0px;
`;

export const View3 = styled.View``;

export const View4 = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const Footer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 5px;
`;

export const FooterIconBox = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
`
