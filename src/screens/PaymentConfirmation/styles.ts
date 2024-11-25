import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 26px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PaymentConfirmationHeader = styled(SafeAreaView)`
  max-height: 85px;
  min-height: 85px;
  padding: 15px 0px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  border: 0.5px solid #c9c9c9;
  border-radius: 999px;

  background-color: ${({ theme }) => theme.colors.gray_800};
`;

export const MainContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const VStack = styled.View`
  width: 100%;
  gap: 16px;
  padding-bottom: 40px;
`;

export const ReceiptBox = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
`;

export const ReceiptIcon = styled.View`
  position: absolute;
  left: 15px;
`;