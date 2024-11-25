import { useState } from "react";
import { Header } from "@components/Header";
import { PlansCard } from "./components/PlanCard";
import { Container, Wrapper } from "./styles";
import { BackButton } from "@components/BackButton";
import { PaymentModal } from "./components/PaymentModal";

export function PlansAndPrice() {
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  function handleSelectPlan() {
    setShowPaymentModal(true)
  }

  return (
    <Container>
      <Header headerTitle="Planos e preços" variant="secondary" leftButton={<BackButton variant="primary" />} />

      <Wrapper>
        <PlansCard onPlanSelected={handleSelectPlan}/>
      </Wrapper>

      <PaymentModal visible={showPaymentModal} onCloseModal={() => setShowPaymentModal(false)} />
    </Container>
  );
}
