import { Box, Container, Logo, Wrapper } from "./styles";

import { Header } from "@components/Header";
import { MenuButton } from "@components/MenuButton";

import logoPng from "@assets/logo.png";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";

import { SIGNATURE_INFO } from "../../data/signatureInfo";
import { SignatureInfoCard } from "@components/SignatureInfoCard";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Signature() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  return (
    <Container>
      <Header
        variant="secondary"
        headerTitle="Assinatura"
        leftButton={<MenuButton />}
      />

      <Wrapper>
        <Box>
          <Logo source={logoPng} alt="Logo do The Chef" />

          <Typography
            font="bold"
            size="text_lg"
            style={{ textAlign: "center", marginBottom: 20 }}
          >
            Vantagens de ser usuário{"\n "}
            <Typography font="bold" color="green_dark" size="text_lg">
              assinante
            </Typography>
          </Typography>

          {SIGNATURE_INFO.map((item) => (
            <SignatureInfoCard data={item} key={item.key} />
          ))}
        </Box>

        <Button
          title="Escolher meu plano"
          style={{ marginTop: "auto", marginBottom: 40 }}
          onPress={() => navigation.navigate('plansAndPrice')}
        />
      </Wrapper>
    </Container>
  );
}
