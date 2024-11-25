import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CloseButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  align-self: flex-end;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.green_dark};

  align-items: center;
  justify-content: center;
`;

export const VStack = styled.View`
  padding: 24px 15px 10px;
  border-top-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.View`
  border-top-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;

  flex-direction: row;
  align-items: center;
`;

export const FooterButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  flex: 1;
  height: 132px;
  border-right-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;

  justify-content: center;
  align-items: center;
`;
