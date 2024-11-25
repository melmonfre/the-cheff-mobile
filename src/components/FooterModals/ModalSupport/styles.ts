import styled from "styled-components/native";

export const TopLine = styled.View`
  align-self: center;
  margin-top: 10px;
  width: 60px;
  height: 6px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray_300};
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 35px 0px 50px;
`

export const IconBox = styled.View`
  position: absolute;
  left: 12%;
  z-index: 5;
`