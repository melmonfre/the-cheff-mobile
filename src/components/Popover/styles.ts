import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  right: 45px;

  padding: 10px 22px;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  background-color: ${({ theme }) => theme.colors.white};
`

export const ActionButton = styled.TouchableOpacity``