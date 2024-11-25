import { Header } from "@components/Header";
import { Container, Wrapper } from "./styles";
import { BackButton } from "@components/BackButton";
import { PaymentCard } from "./components/PaymentCard";
import { PaymentIcons } from "@components/PaymentIcons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

const DATA = [
  { value: "pix", label: "Pix" },
  { value: "credit-card", label: "Cartão de crédito" },
];

export function FormOfPayment() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  return (
    <Container>
      <Header
        headerTitle="Forma de pagamento"
        variant="secondary"
        leftButton={<BackButton variant="primary" />}
      />

      <Wrapper>
        {DATA.map(({ value, label }) => (
          <PaymentCard
            key={value}
            paymentMethod={label}
            isRecommended={value === "pix"}
            icon={<PaymentIcons value={value} />}
            onPress={() => navigation.navigate(value === "pix" ? "payPix" : "paymentWithCard")}
          />
        ))}
      </Wrapper>
    </Container>
  );
}
