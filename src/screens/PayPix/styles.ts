import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.View`
  margin-top: 36px;
  padding: 0 15px;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  border-radius: 4px;
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.font_size.text_sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.green_dark};
`;

export const CopyButton = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`;
