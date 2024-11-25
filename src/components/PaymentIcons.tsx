import { Image } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import pixLogoPng from "../../assets/icons/pix.png";

type PaymentIconProps = {
  value: string
  size?: number
};

export function PaymentIcons({ value, size = 40 }: PaymentIconProps) {
  switch (value) {
    case "cash":
      return   <FontAwesome name="money" size={size} color="black" />
    case "credit-card":
      return <Ionicons name="card-outline" size={size} color="black" />;
    case "debit-card":
      return <MaterialIcons name="credit-card" size={size} color="black" />;
    default:
      return <Image source={pixLogoPng} width={20} height={20} />;
  }
}
