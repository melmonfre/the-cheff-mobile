import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;
  border-color: ${({ theme }) => theme.colors.gray_200};
  border-style: solid;
  border-bottom-width: 1px;
  margin-top: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const Main = styled.View`
  flex: 1;
  padding: 20px 15px;
  border-color: ${({ theme }) => theme.colors.gray_200};
  border-style: solid;
  border-bottom-width: 1px;

  justify-content: flex-end;
`;

export const FooterContainer = styled.View`
  margin-top: 20px;
  gap: 20px;
`;

export const PaymentButton = styled.TouchableOpacity`
  width: 97px;
  min-height: 97px;
  max-height: 97px;
  border: 0.4px solid ${({ theme }) => theme.colors.gray_200};
  border-radius: 12px;
  background-color: #fcfcfc;

  align-items: center;
  justify-content: center;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PriceIcon = styled.TouchableOpacity`
  width: 35px;
  height: 34px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.green_dark};

  justify-content: center;
  align-items: center;
`;

export const PercentageIcon = styled.TouchableOpacity`
  width: 35px;
  height: 34px;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`

export const Item = styled.View`
  width: 97px;
  height: 97px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;
