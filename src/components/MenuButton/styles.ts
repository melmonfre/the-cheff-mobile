import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const MenuButtonIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
