import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import {
  Container,
  HStack,
  RegularText,
  TextBold,
  Title,
  VStack,
} from "./styles";

type Table = {
  number: string;
  isBusy: boolean;
  time: string;
  subtotal: number;
  total: number;
};

type TableCardProps = TouchableOpacityProps & {
  data: Table;
};

export function TableCard({ data, ...rest }: TableCardProps) {
  const { isBusy, number } = data;
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handlePress = () => {
    if (!isBusy) {
      navigation.navigate('tableMenu', { headerTitle: number });
    }
  };

  return (
    <Container {...rest} isBusy={isBusy} onPress={handlePress} disabled={isBusy}>
      <Title>{number}</Title>

      <VStack>
        <HStack>
          <RegularText>{data.time ? "Tempo:" : ""}</RegularText>

          <TextBold>{data.time}</TextBold>
        </HStack>

        <HStack>
          <RegularText>{data.subtotal ? "Subtotal:" : ""}</RegularText>

          <TextBold>{data.subtotal ? `R$ ${data.subtotal}` : ""}</TextBold>
        </HStack>

        <HStack>
          <RegularText>{data.total ? "Total:" : ""}</RegularText>

          <TextBold>{data.total ? `R$ ${data.total}` : ""}</TextBold>
        </HStack>
      </VStack>
    </Container>
  );
}
