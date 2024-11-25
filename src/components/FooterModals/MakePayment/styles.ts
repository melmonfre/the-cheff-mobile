import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 85px;
  flex-direction: row;
  padding: 13px 15px 26px;
  border-top-width: 1px;
  border-color: #E5E5E5;
  column-gap: 20px;
  background-color: #fff;
`;

export const MoreButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #F0F0F0;
`;

export const InnerButton = styled.TouchableOpacity`
  position: relative;
  flex-grow: 1;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
  background-color: #08AE25;
`;

export const ArrowRightIcon = styled.View`
  position: absolute;
  right: 15px;
`

export const ContentModal = styled.View`
  align-items: center;
`;

export const TitleModal = styled.Text`
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 20px;
`;

export const SubtitleModal = styled.Text`
  line-height: 21px;
`;

export const ActionButtons = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 35px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  padding: 10px 12px;
  border-radius: 50px;
`;

export const ButtonDelete = styled(Button)`
  border-width: 1px;
  border-color: #f00;
`;

export const ButtonDeleteText = styled.Text`
  font-size: 12px;
  line-height: 18px;
  color: #f00;
`;

export const ButtonNoDelete = styled(Button)`
  background-color: #08AE25;
`;

export const ButtonNoDeleteText = styled.Text`
  font-size: 12px;
  line-height: 18px;
  padding: 0px 26px;
`;