import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
