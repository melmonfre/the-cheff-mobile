import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const InputContainer = styled.View`
  margin-top: 25px;
  margin-bottom: 15px;
  gap: 15px;
`

export const InfosContainer = styled.View`
  gap: 10px;
`

export const ItemBox = styled.View``

export const ActionButton = styled.TouchableOpacity`
  height: 24px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const LineSeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray_100};
`