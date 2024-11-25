import { TouchableOpacityProps } from "react-native";
import { ReactNode } from "react";
import { Container, HStack, RecommendedBox } from "./styles";
import { Typography } from "@components/Typography";

type PaymentCardProps = TouchableOpacityProps & {
  icon: ReactNode;
  paymentMethod: string;
  isRecommended?: boolean;
};

export function PaymentCard({
  icon,
  paymentMethod,
  isRecommended = false,
  ...rest
}: PaymentCardProps) {
  return (
    <Container activeOpacity={0.8} {...rest} >
      <HStack>
        {icon}

        <Typography font="medium">{paymentMethod}</Typography>
      </HStack>

      {isRecommended && (
        <RecommendedBox>
          <Typography font="semi_bold" color="white" size="text_sm">
            Recomendado
          </Typography>
        </RecommendedBox>
      )}
    </Container>
  );
}
