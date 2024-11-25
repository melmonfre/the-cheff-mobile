import styled from "styled-components/native";

export const Container = styled.View`
  height: 245px;
  align-items: center;
  padding: 0px 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const IncrementDecrement = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 35px;
  gap: 30px;
`

export const IconBox = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray_500};
`

export const TopLine = styled.View`
  align-self: center;
  margin-top: 10px;
  width: 60px;
  height: 6px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray_500};
`