import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 25px;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const ComplementBox = styled.View`
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  border-radius: 15px;
  padding-bottom: 20px;
`

export const ComplementEditBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  gap: 5px;
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

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray_300};
`