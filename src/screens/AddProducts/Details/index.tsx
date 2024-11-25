import { Box, Container, OptionalsButton, UnitBoxKg, UnitBoxUn, UnitOfMeasurement } from "./styles";
import { Input } from "@components/Input";
import { Typography } from "@components/Typography";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

export function DetailsProducts() {
  const navigation = useNavigation();
  const [selectedUnit, setSelectedUnit] = useState('');

  const handleDescriptionScreen = () => {
    navigation.navigate('description');
  }

  const handleCategoriesScreen = () => {
    navigation.navigate('categories');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Input placeholder="Nome do produto" />
        <Box>
          <Typography>Unidade de medida do produto</Typography>
          <UnitOfMeasurement>
            <UnitBoxUn active={selectedUnit === 'un'} onPress={() => setSelectedUnit('un')}>
              <Typography
                style={{ alignSelf: "center", color: selectedUnit === 'un' ? '#FFFFFF' : '#232121' }}
                font="medium"
                size="text_md"
              >
                Un
              </Typography>
            </UnitBoxUn>
            <UnitBoxKg active={selectedUnit === 'kg'} onPress={() => setSelectedUnit('kg')}>
              <Typography
                style={{ alignSelf: "center", color: selectedUnit === 'kg' ? '#FFFFFF' : '#232121' }}
                font="medium"
                size="text_md"
              >
                Kg
              </Typography>
            </UnitBoxKg>
          </UnitOfMeasurement>
        </Box>
        <Input placeholder="Preço de venda" />
        <Box>
          <Typography>Opcionais</Typography>
          <Input placeholder="Preço promocional" />
          <OptionalsButton activeOpacity={0.7} onPress={handleCategoriesScreen}>
            <Typography color="gray_100" style={{ top: 2 }} >Categoria</Typography>
            <AntDesign name="right" size={16} color="#D3D3D3" style={{ top: 2 }} />
          </OptionalsButton>
          <OptionalsButton activeOpacity={0.7} onPress={handleDescriptionScreen}>
            <Typography color="gray_100" style={{ top: 2 }} >Descrição</Typography>
            <AntDesign name="right" size={16} color="#D3D3D3" style={{ top: 2 }} />
          </OptionalsButton>
          <Input placeholder="Código PDV" />
          <Input placeholder="Custo" />
          <Input placeholder="Estoque" />
        </Box>
      </Container>
    </ScrollView>
  )
}