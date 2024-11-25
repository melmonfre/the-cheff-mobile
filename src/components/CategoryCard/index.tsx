import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

type CategoriesCardProps = TouchableOpacityProps & {
  name: string;
  isActive: boolean;
};

export function CategoryCard({ name, isActive = false, ...rest }: CategoriesCardProps) {
  return (
    <Container activeOpacity={0.7} isActive={isActive} {...rest}>
      <Title isActive={isActive}>{name}</Title>
    </Container>
  );
}
