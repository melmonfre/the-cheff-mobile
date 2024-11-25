import { Box, ComplementBox, ComplementEditBox, Container, InputBox, InputBox2, Separator } from "./style";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ToggleSwitch } from "@components/ToggleSwitch";
import { Typography } from "@components/Typography";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";

export function AddComplements() {
  const navigation = useNavigation();
  const route = useRoute();
  const [showComplementBox, setShowComplementBox] = useState(false);

  useEffect(() => {
    if (route.params && route.params.screen === 'complementadded') {
      setShowComplementBox(true);
    }
  }, [route.params]);

  const handleAddComplementScreen = () => {
    navigation.navigate('addcomplement');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
      <Container>
        <Button
          variant="primary-outline"
          title="+  Adicionar grupo de complemento"
          onPress={handleAddComplementScreen}
        />

        {showComplementBox && (
          <ComplementBox>
            <Box>
              <InputBox>
                <Input
                  placeholder="Nome"
                  defaultValue={"Dê um up no seu lanche"}
                  value={"Dê um up no seu lanche"}
                />
              </InputBox>
              <ToggleSwitch initialValue={true} />
            </Box>
            <Separator />
            <Box style={{ paddingTop: 10, paddingBottom: 10 }}>
              <InputBox>
                <Typography>Bacon</Typography>
              </InputBox>
              <InputBox2>
                <Input
                  placeholder="Valor"
                  defaultValue={"10,00"}
                  value={"10,00"}
                />
              </InputBox2>
            </Box>
            <Separator />
            <Box style={{ paddingTop: 10, paddingBottom: 10 }}>
              <InputBox>
                <Typography>Mussarela</Typography>
              </InputBox>
              <InputBox2>
                <Input
                  placeholder="Valor"
                  defaultValue={"15,00"}
                  value={"15,00"}
                />
              </InputBox2>
            </Box>
            <Separator />
            <Box style={{ paddingTop: 10, paddingBottom: 10 }}>
              <InputBox>
                <Typography>Farrofa de bacon</Typography>
              </InputBox>
              <InputBox2>
                <Input
                  placeholder="Valor"
                  defaultValue={"0,00"}
                  value={"0,00"}
                />
              </InputBox2>
            </Box>
            <Separator />
            <ComplementEditBox>
              <Feather name="edit" size={20} color="#08AE25" />
              <Typography style={{ top: 2.5 }} color="green_dark" font="medium">
                Editar complemento
              </Typography>
            </ComplementEditBox>
          </ComplementBox>
        )}
      </Container>
    </ScrollView>
  )
}