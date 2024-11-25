import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 85px;
  padding: 13px 15px 26px;
  background-color: #fff;
`;

export const Inner = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px;
  border-radius: 8px;
  background-color: #08AE25;
`;

export const Amount = styled.View`
  position: relative;
`;

export const QuantityNumber = styled.View`
  position: absolute;
  top: -5px;
  right: -12px;
  width: 18px;
  height: 18px;
  border-radius: 40px;
  align-items: center;
  background-color: white;
`;

export const QuantityNumberText = styled.Text`
  font-size: 12px;
`;

export const SaveItemsText = styled.Text`
  transform: translateX(30px);
  color: ${({ theme }) => theme.colors.white};
`;

export const PriceText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
