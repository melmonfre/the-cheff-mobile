import { useState } from "react";
import { Text } from "react-native";
import { Header } from "@components/Header";

import { Container, FooterButton } from "../screens/StoreProfile/styles";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from "@components/Button";
import { DetailsProducts } from "@screens/AddProducts/Details";
import { AddComplements } from "@screens/AddProducts/Complements";
import { BackButton } from "@components/BackButton";
import { ImageBox } from "@components/ImageBox";
import { useRoute } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export function ProductsRoutes() {
  const [isSaveActive, setSaveActive] = useState(true);
  const route = useRoute();

  return (
    <Container>
      <Header
        variant="secondary"
        leftButton={<BackButton variant="primary" />}
        headerTitle="Novo Produto"
      />
      <ImageBox />
      <Tab.Navigator
        style={{ marginHorizontal: 15, transform: 'lowercase' }}
        screenOptions={({ route }) => ({
          tabBarLabel: () => (
            <Text style={{ textTransform: 'none' }}>
              {route.name.toString()}
            </Text>
          ),
          tabBarIndicatorStyle: { backgroundColor: 'black' },
          tabBarPressColor: 'white',
          swipeEnabled: false,
        })}
      >
        <Tab.Screen name="Detalhes" component={DetailsProducts} />
        <Tab.Screen name="Complementos" component={AddComplements} initialParams={route.params} />
      </Tab.Navigator>
      {isSaveActive &&
        <FooterButton>
          <Button title="Salvar produto" activeOpacity={0.7} />
        </FooterButton>
      }
    </Container>
  )
}