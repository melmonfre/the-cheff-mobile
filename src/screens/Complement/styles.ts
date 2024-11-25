import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Box = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 15px 20px;
  gap: 20px;
`

export const InputBox = styled.View`
  flex-grow: 1;
`

export const InputBox2 = styled.View`
  width: 103px;
`

export const ContainerGroupInputs = styled.View`
  gap: 15px;
  padding: 25px 15px 32px;
`

export const GroupInputs = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

export const ContentBox = styled.View`
  padding: 0px 15px;
`

export const MinMaxQuantity = styled.View`
  gap: 15px;
`

export const Min = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Max = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_100};
`

export const IncrementDecrementContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 4px;
  gap: 13px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Decrement = styled.TouchableOpacity`
  padding: 12px 8px;
`

export const Increment = styled.TouchableOpacity`
  padding: 6px 12px;
`

export const Footer = styled.View`
  width: 100%;
  height: 85px;
  padding: 13px 15px 26px;
  background-color: ${({ theme }) => theme.colors.white};
`