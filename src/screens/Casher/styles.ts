import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 28px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Content = styled.View`
  flex: 1;
`

export const Item = styled.Text`
  font-size: 16px;
`

export const ItemBold = styled.Text`
  font-size: 16px;
  font-weight: 700;
`

export const Inner = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 15px;
  margin: 0px 15px 15px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
`

export const Row = styled.View`
  flex-direction: row;
`

export const IconBox = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green_dark};
`