import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  gap: 10px;
  width: fit-content;
  padding-bottom: 15px;
  margin: 50px 15px 0px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_100};
`

export const BoxImage = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
`

export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
`

export const ContentHeader = styled.View`
  align-items: flex-start;
  justify-content: center;
`

export const List = styled.View`
  flex: 1;
  padding-top: 35px;
  background-color: #fff;
`

export const Footer = styled.View`
  padding: 20px 0px;
  margin: 0px 15px;
`

export const LogoutBox = styled.View`
  gap: 4px;
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_100};
`

export const ContentBox = styled.View`
  gap: 5px;
  padding-top: 20px;
  flex-direction: row;
`

export const Content = styled.View`
  width: 90%;
`