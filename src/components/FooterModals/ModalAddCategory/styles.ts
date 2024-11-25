import styled from "styled-components/native";

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 15px;

  width: 25px;
  height: 25px;

  align-items: center;
  justify-content: center;

  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`

export const TopLine = styled.View`
  align-self: center;
  margin-top: 10px;
  width: 60px;
  height: 6px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray_300};
`