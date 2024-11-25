import { Box, Container, Text } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { BackButton } from "@components/BackButton";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const resetPasswordFormSchema = yup.object({
  email: yup.string().required("Por favor, informe o email.").email("Email inválido."),
});

type ResetPasswordFormData = yup.InferType<typeof resetPasswordFormSchema>;

export function ResetPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(resetPasswordFormSchema),
  });

  function handleResetPassword({ email }: ResetPasswordFormData) {
    console.log(email);
  }

  return (
    <Container>
      <Header headerTitle="Redefinir senha" leftButton={<BackButton />} />

      <Box>
        <Text>
          Digite o email que você usa para acessar sua conta, que nós enviaremos
          um link de redefinição da sua senha.
        </Text>

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

        <Button
          title="Redefinir a senha"
          style={{ marginTop: "auto", marginBottom: 25 }}
          onPress={handleSubmit(handleResetPassword)}
        />
      </Box>
    </Container>
  );
}
