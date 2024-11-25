import {
  Box,
  Container,
  CreateAccountButton,
  Footer,
  FormContainer,
  LinkButton,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Typography } from "@components/Typography";
import { BackButton } from "@components/BackButton";

import { AuthNavigatorRoutesprops } from "@routes/auth.routes";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@hooks/useAuth";

const loginFormSchema = yup.object({
  email: yup.string().required("Informe o Email").email("Email inválido."),
  password: yup.string().required("Informe a senha"),
});

type LoginFormData = yup.InferType<typeof loginFormSchema>;

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const navigation = useNavigation<AuthNavigatorRoutesprops>();

  const { signIn } = useAuth();

  function handleLogin({ email, password }: LoginFormData) {
    signIn({
      id: "1",
      name: "Teste",
      whatsapp: "237237237",
      cpfOrCnpj: "192929",
      email,
      password,
    });
  }

  return (
    <Container>
      <Header headerTitle="Entrar" leftButton={<BackButton />} />

      <Box>
        <FormContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                errorText={errors.email?.message}
                keyboardType="email-address"
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                secureTextEntry
                errorText={errors.password?.message}
              />
            )}
            name="password"
          />
        </FormContainer>

        <LinkButton onPress={() => navigation.navigate("resetpassword")}>
          <Typography size="text_xs">Esqueci minha senha</Typography>
        </LinkButton>

        <Button
          style={{ width: "100%" }}
          title="Entrar"
          onPress={handleSubmit(handleLogin)}
        />
      </Box>

      <Footer>
        <Typography size="text_xs">Ainda não tem uma conta?</Typography>

        <CreateAccountButton onPress={() => navigation.navigate("register")}>
          <Typography size="text_xs" color="green_dark" font="semi_bold">
            Crie a conta
          </Typography>
        </CreateAccountButton>
      </Footer>
    </Container>
  );
}
