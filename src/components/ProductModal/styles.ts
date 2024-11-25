import styled from "styled-components/native";

export const Backdrop = styled.View`
  /* flex: 1; */
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  background-color: rgba(0,0,0,0.3);
`

export const ModalContainer = styled.View`
  flex: 0.9;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageContainer = styled.View`
  position: relative;
  width: 100%;
  height: 225px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  overflow: hidden;
`;

export const ImageProduct = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const CloseModalButton = styled.TouchableOpacity`
  position: absolute;
  top: 37px;
  left: 15px;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #fff;
`;

export const CloseModalButtonImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const InfosProduct = styled.View`
  padding: 0 15px;
  gap: 5px;
`;

export const TitleProduct = styled.Text`
  font-family: ${({ theme }) => theme.font_family.semi_bold};
  font-size: 18px;
  color: #232121;
`;

export const SubtitleProduct = styled.Text``;

export const PriceContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const OriginalPrice = styled.Text`
  text-decoration-line: line-through;
  font-size: 16px;
  `;

export const DiscountPrice = styled.Text`
  font-family: ${({ theme }) => theme.font_family.semi_bold};
  font-size: 16px;
`;

export const MandatoryItems = styled.View`
  margin-bottom: 15px;
`;

export const MandatoryHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 11px 15px;
  margin-top: 27px;
  background-color: #f2f2f2;
`;

export const MandatoryItemText = styled.Text`
  line-height: 24px;
  color: #7c7c7c;
`;

export const MandatoryItemTextThin = styled.Text`
  font-size: 12px;
  line-height: 18px;
`;

export const MandatoryTag = styled.View`
  border-radius: 5px;
  padding: 3px 9px;
  background-color: #232121;
`;

export const MandatoryTagText = styled.Text`
  line-height: 15px;
  font-size: 10px;
  color: #fff;
`;

export const ComentaryInput = styled.TextInput`
  font-size: 12px;
  height: 120px;
  padding: 8px 5px 5px;
  margin: 15px 15px 32px;
  border-width: 1px;
  border-color: #e8e8e8;
  border-radius: 5px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
  padding-bottom: 10px;
  margin: 0 15px;
  margin-top: 15px;
`;

export const ItemName = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #232121;
`;

export const ItemPrice = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #757575;
`;

export const IncrementDecrement = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 3px;
  padding: 2px 8px;
  gap: 25px;
  background-color: #fff;
`;

export const FakeCheck = styled.Pressable`
  position: absolute;
  top: 50%;
  transform: translateY(-12px);
  right: 0;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: #d9d9d9;
`;
