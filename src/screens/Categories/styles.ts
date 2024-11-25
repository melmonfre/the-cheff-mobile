import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  margin-top: 13px;
`

export const Title = styled.Text`
  font-size: 18px;
  margin-left: 15px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.gray_800};
  line-height: 27px;
`

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray_200};
`

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  bottom: 55px;
  width: 80px;
  height: 80px;
  z-index: 10;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`