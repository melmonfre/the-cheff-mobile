import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 8px;

  flex-direction: row;
  gap: 12px;
`;

export const IconBox = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 99999px;
  background-color: ${({theme}) => theme.colors.green_dark};

  align-items: center;
  justify-content: center;
`

export const VStack = styled.View`
  flex: 1;
`