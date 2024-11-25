import { ScrollView } from "react-native";

import { Container, FormContent, TermsOfUse, TermsOfUseText } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Typography } from "@components/Typography";
import { CustomHeader } from "@components/CustomHeader";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesprops } from "@routes/auth.routes";
import { useAuth } from "@hooks/useAuth";

const registerFormSchema = yup.object({
  name: yup.string().required("Informe o nome da empresa."),
  cpfOrCnpj: yup.string().required("Informe o CPF ou CNPJ."),
  whatsapp: yup.string().required("Informe o Whatsapp."),
  email: yup.string().required("Informe o Email").email("Email inválido."),
  password: yup.string().required("Informe uma senha"),
});

type RegisterFormData = yup.InferType<typeof registerFormSchema>;

export function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormSchema),
  });

  const { signIn } = useAuth();

  const navigation = useNavigation<AuthNavigatorRoutesprops>();

  function handleSignUp(data: RegisterFormData) {
    signIn({
      id: "1",
      ...data,
    });
  }

  return (
    <Container>
      <CustomHeader>
        <Button
          title="Entrar"
          variant="ghost"
          onPress={() => navigation.navigate("login")}
        />
      </CustomHeader>

      <ScrollView style={{ paddingHorizontal: 15, marginTop: 24 }}>
        <FormContent>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome da empresa"
                onChangeText={onChange}
                value={value}
                errorText={errors.name?.message}
              />
            )}
            name="name"
          />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="CPF/CNPJ"
                onChangeText={onChange}
                value={value}
                errorText={errors.cpfOrCnpj?.message}
                keyboardType="numeric"
              />
            )}
            name="cpfOrCnpj"
          />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Whatsapp"
                onChangeText={onChange}
                value={value}
                errorText={errors.whatsapp?.message}
                keyboardType="numeric"
              />
            )}
            name="whatsapp"
          />

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
        </FormContent>

        <TermsOfUse>
          <Typography size="text_xs" style={{ textAlign: "center" }}>
            Ao se cadastrar você concorda com nossos{" "}
            <TermsOfUseText>termos de uso</TermsOfUseText>
          </Typography>

          <Typography size="text_xs" style={{ textAlign: "center" }}>
            e nossa <TermsOfUseText>política de privacidade</TermsOfUseText>.
          </Typography>
        </TermsOfUse>

        <Button title="Criar conta" onPress={handleSubmit(handleSignUp)} />
      </ScrollView>
    </Container>
  );
}
