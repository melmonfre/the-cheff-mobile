import { Typography } from "@components/Typography";
import { Box, Container } from "./styles";

import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { Button } from "@components/Button";

const DATA = [
  "Controle de mesas",
  "Venda de balcão",
  "Cadastro de produtos",
  "Relatório de caixa",
  "4 usuários simultâneos",
];

type PlansCardProps = {
  onPlanSelected: () => void;
};

export function PlansCard({ onPlanSelected }: PlansCardProps) {
  return (
    <Container>
      <Typography style={{ textAlign: "center" }} font="bold" size="text_xl">
        Básico
      </Typography>

      <Typography style={{ textAlign: "center" }} size="text_sm">
        A partir de{" "}
        <Typography size="text_sm" font="semi_bold">
          R$ 28,90
        </Typography>
        /mensais
      </Typography>

      <Box>
        {DATA.map((item) => (
          <View
            key={item}
            style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
          >
            <Feather name="check" size={18} color="green" />
            <Typography font="medium">{item}</Typography>
          </View>
        ))}
      </Box>
      <Button
        title="Quero esse"
        style={{ width: "100%" }}
        onPress={onPlanSelected}
      />
    </Container>
  );
}
