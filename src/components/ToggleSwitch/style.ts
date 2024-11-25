import styled from "styled-components/native";

export const Container = styled.TouchableHighlight`
  width: fit-content;
  height: 31px;
  padding: 0px 2px;
  border-radius: 25px;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_200};
`