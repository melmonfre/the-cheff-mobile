import { ReactNode } from "react";
import { SafeAreaViewProps } from "react-native-safe-area-context";

import { BoxButton, Container, HeaderStyledProps, Title } from "./styles";

type HeaderProps = SafeAreaViewProps & {
  headerTitle?: string;
  leftButton?: ReactNode;
  rightButton?: ReactNode | React.ReactNode;
  variant?: HeaderStyledProps;
  hasSearch?: boolean;
};

export function Header({
  leftButton,
  rightButton,
  headerTitle,
  variant = "primary",
  hasSearch = false,
  ...rest
}: HeaderProps) {
  return (
    <Container variant={variant} hasSearch={hasSearch} {...rest}>
      <BoxButton hasSearch={hasSearch}>{leftButton}</BoxButton>

      <Title
        hasSearch={hasSearch}
        numberOfLines={1}
        color={variant === "secondary" ? "white" : "gray_800"}
      >
        {headerTitle}
      </Title>

      <BoxButton hasSearch={hasSearch}>{rightButton}</BoxButton>
    </Container>
  );
}
