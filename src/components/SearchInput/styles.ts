import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray_200};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const TextInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: "#7E7E7E",
}))`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.font_family.light};
    font-size: ${theme.font_size.text_md}px;
  `}
`;

export const VerticalSeparator = styled.View`
  width: 1px;
  height: 100%;
  background-color: #D3D3D3;
;
`;
