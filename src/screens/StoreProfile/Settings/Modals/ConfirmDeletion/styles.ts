import styled from "styled-components/native";

export const Container = styled.View`
  margin: 0px 65px;
  padding: 35px 30px 50px;
  align-self: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`

export const InputBox = styled.View`
  margin-top: -28px;
  margin-bottom: 40px;
  gap: 4px;
`

export const ActionButtons = styled.View`
  width: 100%;
  height: 38px;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`

export const YesButton = styled.TouchableOpacity`
  padding: 0px 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.red_dark};
  border-radius: 50px;
`

export const NoButton = styled.TouchableOpacity`
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`