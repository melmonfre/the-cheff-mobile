import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 12px 24px;

  border-color: ${({ theme }) => theme.colors.gray_200};
  border-bottom-width: 3px;
  gap: 10px;
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const VStack = styled.View`
  flex: 1;
  gap: 3px;
`;

export const StoreImage = styled.Image`
  width: 103px;
  height: 83px;
  border-radius: 10px;
`;
