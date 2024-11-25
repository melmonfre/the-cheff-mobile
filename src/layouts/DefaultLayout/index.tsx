import { ReactNode } from "react";
import { Container } from "./styles";

type DefaultLayoutProps = {
  children: ReactNode;
  backgroundTransparent?: boolean;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return <Container>{children}</Container>;
}
