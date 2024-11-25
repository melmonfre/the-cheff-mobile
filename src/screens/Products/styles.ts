import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerWithoutProducts = styled.View`
  flex: 1;
  justify-content: center;
  padding-bottom: 30px;
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: 0px 15px;
  margin-top: -28px;
`;

export const ListContainer = styled.View`
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 30px;
`;

export const BoxContent = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const Separator = styled.View`
  height: 12px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemBox = styled.View`
  flex: 1;
  padding: 24px 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  border-radius: 4px;
`;

export const ItemInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const TextBox = styled.View``;

export const ImageBox = styled.View`
  width: 105px;
  height: 75px;
  border-radius: 4px;
  overflow: hidden;
`;

export const ImageItem = styled.ImageBackground`
  width: 105px;
  height: 75px;
`;

export const AddBoxButton = styled.TouchableOpacity`
  width: 100%;
  padding: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.light_gray};
`;