import styled from "styled-components/native";

export const Container = styled.View`
  margin: 0px 65px;
  padding: 50px 30px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Title = styled.View`
  flex-direction: row;
  margin-bottom: -20px;
`

export const SubTitle = styled.View`
  align-items: center;
  margin: 20px 0px 35px;
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
  border: 1px solid ${({ theme }) => theme.colors.gray_800};
  border-radius: 50px;
`

export const NoButton = styled.TouchableOpacity`
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`