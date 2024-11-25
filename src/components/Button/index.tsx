import { TouchableOpacityProps } from "react-native";
import { ButtonStyledProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: ButtonStyledProps;
};

export function Button({ variant = "primary", title, ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title variant={variant}>{title}</Title>
    </Container>
  );
}
