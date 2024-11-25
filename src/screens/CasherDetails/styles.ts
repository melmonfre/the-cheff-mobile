import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 25px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Content = styled.View`
  gap: 3px;
  margin: 0px 15px;
`

export const Item = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray_800};
`

export const ItemBold = styled.Text`
  font-size: 16px;
  font-weight: 600;
`

export const ItemLight = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray_400};
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
  justify-content: space-between;
`

export const IconBox = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green_dark};
`

export const InfosContent = styled.View`
  gap: 10px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_200};
`

export const TotalOfPaymentType = styled.View`
  gap: 10px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_200};
`