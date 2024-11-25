import { TouchableOpacityProps } from "react-native";

import { Typography } from "@components/Typography";
import { Container } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native'

type BackButtonProps = TouchableOpacityProps & {
  variant?: 'default' | 'primary'
}

export function BackButton({ variant = 'default', ...rest }: BackButtonProps) {
  const navigation = useNavigation()

  return (
    <Container activeOpacity={0.7} onPress={() => navigation.goBack()} {...rest}>
      <AntDesign name="arrowleft" size={16} color={variant === 'default' ? "black" : "white"} />
      <Typography size="text_xs" font="medium" color={variant === 'default' ? 'gray_800' : 'white'}>
        Voltar
      </Typography>
    </Container>
  );
}
