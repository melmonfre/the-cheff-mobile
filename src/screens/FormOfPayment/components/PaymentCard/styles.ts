import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  padding: 10px 14px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray_300};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const RecommendedBox = styled.View`
  padding: 4px 6px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`;
