import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 85px;
  flex-direction: row;
  padding: 12px 15px 25px;
  column-gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const IncrementDecrementContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 4px;
  gap: 13px;
  background-color: #${({ theme }) => theme.colors.white};
`;

export const Decrement = styled.TouchableOpacity`
  padding: 6px 12px;
`

export const Increment = styled.TouchableOpacity`
  padding: 6px 12px;
`

export const Inner = styled.TouchableOpacity`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;
