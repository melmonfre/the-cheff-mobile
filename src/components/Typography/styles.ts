import { TextProps as NativeTextProps } from 'react-native'
import theme from 'src/theme'
import styled, { css } from 'styled-components/native'

export type TextProps = NativeTextProps & {
  font?: keyof typeof theme.font_family
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.font_size
}

export const Text = styled.Text<TextProps>`
  ${({ theme, size, color, font }) => css`
    font-family: ${theme.font_family[font ?? 'regular']};
    font-size: ${theme.font_size[size ?? 'text_md']}px;
    color: ${theme.colors[color ?? 'gray_800']};
  `}
`