import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

type SignatureIconProps = {
  value: string;
};

export function SignatureIcons({ value }: SignatureIconProps) {
  const { colors } = useTheme();

  switch (value) {
    case "sales":
      return (
        <MaterialIcons name="point-of-sale" size={24} color={colors.white} />
      );
    case "users":
      return <FontAwesome name="users" size={18} color={colors.white} />;
    default:
      return (
        <FontAwesome5 name="hand-holding-usd" size={20} color={colors.white} />
      );
  }
}
