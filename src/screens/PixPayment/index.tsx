import { Input } from "@components/Input";
import { Container, Footer, Wrapper } from "./styles";
import { Header } from "@components/Header";
import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";

export function PixPayment() {
  return (
    <Container>
      <Header
        headerTitle="Pix"
        variant="secondary"
        leftButton={<BackButton variant="primary" />}
      />

      <Wrapper>
        <Input placeholder="Nome completo" />
        <Input placeholder="CNPJ ou CPF" />
      </Wrapper>

      <Footer>
        <Button title="Pagar com pix" />
      </Footer>
    </Container>
  );
}
