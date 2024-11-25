import styled from "styled-components/native";

interface UnitBoxProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding-top: 25px;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Box = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
`

export const UnitOfMeasurement = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.gray_300};
`

export const UnitBoxUn = styled.TouchableOpacity<UnitBoxProps>`
  flex-grow: 1;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  color: ${({ theme, active }) => (active ? theme.colors.white : theme.colors.gray_800)};
  background-color: ${({ theme, active }) => (active ? theme.colors.green_dark : theme.colors.gray_300)};
`;

export const UnitBoxKg = styled.TouchableOpacity<UnitBoxProps>`
  flex-grow: 1;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  color: ${({ theme, active }) => (active ? theme.colors.white : theme.colors.gray_800)};
  background-color: ${({ theme, active }) => (active ? theme.colors.green_dark : theme.colors.gray_300)};
`;

export const OptionalsButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 45px;
  max-height: 45px;
  padding: 0px 14px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};

  justify-content: space-between;
  align-items: center;
`