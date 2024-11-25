import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 125px;
  height: 125px;
  border-radius: 62.5px;
  overflow: hidden;
  background-color: #dcdcdc;
  align-items: center;
  align-self: center;
  margin-top: 25px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const FallbackContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const UploadIcon = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  background-color: #A7A7A7;
`;

export const FallbackText = styled.Text`
  margin-top: 2px;
`;