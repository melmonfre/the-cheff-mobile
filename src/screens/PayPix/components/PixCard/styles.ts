import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px 14px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray_300};
  margin-bottom: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PixIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
`

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

export const TimerBox = styled.View`
  padding: 4px 10px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`;
