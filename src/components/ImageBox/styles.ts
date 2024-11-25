import styled from "styled-components/native"

export const ImageContainer = styled.TouchableOpacity`
  width: 100%;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #DBDBDB;
`

export const UploadIconBox = styled.View`
  padding: 10px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
`