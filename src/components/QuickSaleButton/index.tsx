import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";
import { Typography } from "@components/Typography";

import { FontAwesome } from "@expo/vector-icons";

type QuickSaleButtonProps = TouchableOpacityProps;

export function QuickSaleButton({ ...rest }: QuickSaleButtonProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Typography size="text_xs" font="light">
        Venda rápida
      </Typography>

      <FontAwesome name="bolt" size={18} color="black" />
    </Container>
  );
}
