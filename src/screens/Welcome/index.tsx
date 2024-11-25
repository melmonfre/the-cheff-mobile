import { Box, Container, Form, Image } from "./styles";

import LogoPng from "@assets/logo.png";

import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesprops } from "@routes/auth.routes";

export function WelcomeScreen() {
  const navigation = useNavigation<AuthNavigatorRoutesprops>();

  return (
    <Container>
      <Box style={{ alignItems: "center" }}>
        <Image source={LogoPng} />
      </Box>

      <Box>
        <Form>
          <Button
            title="Criar conta"
            onPress={() => navigation.navigate("register")}
          />

          <Button
            title="Entrar"
            variant="ghost"
            onPress={() => navigation.navigate("login")}
          />
        </Form>
      </Box>
    </Container>
  );
}
