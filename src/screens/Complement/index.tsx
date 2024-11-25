import { Header } from "@components/Header";
import { Box, Container, ContainerGroupInputs, ContentBox, Decrement, Footer, GroupInputs, Increment, IncrementDecrementContainer, InputBox, InputBox2, Max, Min, MinMaxQuantity, Separator } from "./styles";
import { BackButton } from "@components/BackButton";
import { Input } from "@components/Input";
import { ToggleSwitch } from "@components/ToggleSwitch";
import { Typography } from "@components/Typography";
import { AntDesign, Feather } from '@expo/vector-icons';
import { useState } from "react";
import { Button } from "@components/Button";
import { ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function AddComplement() {
  const navigation = useNavigation();
  const [minQuantity, setMinQuantity] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [groupsVisible, setGroupsVisible] = useState(0);
  const [deleteIconsVisible, setDeleteIconsVisible] = useState(false);
  const [excluirGrupoVisible, setExcluirGrupoVisible] = useState(true);
  const [complementAdded, setComplementAdded] = useState(false);
  const [inputValueNome, setInputValueNome] = useState("");
  const [inputValueValor, setInputValueValor] = useState("");

  const handleMinDecrement = () => {
    if (minQuantity >= 1) {
      setMinQuantity(minQuantity - 1);
    }
  };

  const handleMinIncrement = () => {
    setMinQuantity(minQuantity + 1);
  };

  const handleMaxDecrement = () => {
    if (maxQuantity > 1) {
      setMaxQuantity(maxQuantity - 1);
      if (groupsVisible > maxQuantity - 1) {
        setGroupsVisible(maxQuantity - 1);
      }
    }
  };

  const handleMaxIncrement = () => {
    setMaxQuantity(maxQuantity + 1);
  };

  const handleAddGroup = () => {
    if (groupsVisible < maxQuantity) {
      setGroupsVisible(groupsVisible + 1);
      setComplementAdded(true);
    }
  };

  const toggleDeleteIcons = () => {
    setDeleteIconsVisible(!deleteIconsVisible);
    setExcluirGrupoVisible(!excluirGrupoVisible);
  };

  const handleInputChangeNome = (text) => {
    setInputValueNome(text);
  };

  const handleInputChangeValor = (text) => {
    setInputValueValor(text);
  };

  const handleSaveComplement = () => {
    navigation.navigate('productsRoutes', { screen: 'Complementos', params: { screen: 'complementadded' } });
  };

  return (
    <Container>
      <Header
        variant="secondary"
        headerTitle="Complemento"
        leftButton={<BackButton variant="primary" />}
        rightButton={<Feather name="edit" size={20} color="white" style={{ right: -80 }} onPress={toggleDeleteIcons} />}
      />

      <ScrollView>
        <Box>
          <InputBox>
            <Input placeholder="Nome" value={inputValueNome} onChangeText={handleInputChangeNome} />
          </InputBox>
          <ToggleSwitch />
        </Box>

        <ContentBox>
          <Typography font="semi_bold" size="text_md">Quantidade</Typography>
          <Typography font="regular" size="text_sm">Indique quantos itens podem ser selecionados</Typography>
          <MinMaxQuantity>
            <Min>
              <Typography>Quantidade Mínima</Typography>
              <IncrementDecrementContainer>
                <Decrement onPress={handleMinDecrement}>
                  <AntDesign name="minus" size={16} color="black" />
                </Decrement>
                <Typography color="gray_800">{minQuantity}</Typography>
                <Increment onPress={handleMinIncrement}>
                  <AntDesign name="plus" size={16} color="black" />
                </Increment>
              </IncrementDecrementContainer>
            </Min>
            <Separator />
            <Max>
              <Typography>Quantidade Máxima</Typography>
              <IncrementDecrementContainer>
                <Decrement onPress={handleMaxDecrement}>
                  <AntDesign name="minus" size={16} color="black" />
                </Decrement>
                <Typography color="gray_800">{maxQuantity}</Typography>
                <Increment onPress={handleMaxIncrement}>
                  <AntDesign name="plus" size={16} color="black" />
                </Increment>
              </IncrementDecrementContainer>
            </Max>
            <Separator />
          </MinMaxQuantity>
        </ContentBox>

        <ContainerGroupInputs>
          <Button title="+  Adicionar complemento" variant="primary-outline" onPress={handleAddGroup} />
          {[...Array(groupsVisible)].map((_, index) => (
            <GroupInputs key={index}>
              <InputBox>
                <Input
                  placeholder="Nome do complemento"
                  value={inputValueNome}
                  onChangeText={handleInputChangeNome}
                />
              </InputBox>
              <InputBox2>
                <Input
                  placeholder="Valor"
                  value={inputValueValor}
                  onChangeText={handleInputChangeValor}
                  keyboardType="numeric"
                />
              </InputBox2>
              {deleteIconsVisible && ( // Renderiza o ícone de lixeira condicionalmente
                <Feather name="trash-2" size={24} color="#FF0000" />
              )}
            </GroupInputs>
          ))}
        </ContainerGroupInputs>
        {excluirGrupoVisible && groupsVisible === maxQuantity && maxQuantity !== 0 && (
          <Typography
            color="red_dark"
            style={{ alignSelf: 'center', textDecorationLine: 'underline' }}
          >
            Excluir grupo de complementos
          </Typography>
        )}
      </ScrollView>
      <Footer style={{ elevation: 10 }}>
        <Button activeOpacity={0.7} title="Salvar complemento" variant={complementAdded ? "primary" : "secondary"} onPress={handleSaveComplement} />
      </Footer>
    </Container>
  )
}