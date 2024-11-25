import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.red_dark};

  justify-content: center;
  align-items: center;
`