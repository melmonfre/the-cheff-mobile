import { useState } from "react";
import { Text } from "react-native";
import { Header } from "@components/Header";
import { MenuButton } from "@components/MenuButton";
import { StoreProfilePhoto } from "@components/StoreProflePhoto";
import { RestaurantDetails } from "../screens/StoreProfile/RestaurantDetails";
import { Settings } from "../screens/StoreProfile/Settings";

import { Container, FooterButton } from "../screens/StoreProfile/styles";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from "@components/Button";
const Tab = createMaterialTopTabNavigator();

export function StoreProfileRoutes() {
  const [isSaveActive, setSaveActive] = useState(false);

  return (
    <Container>
      <Header
        headerTitle="Perfil da loja"
        leftButton={<MenuButton />}
        variant="secondary"
      />
      <StoreProfilePhoto />
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
        <Tab.Screen name="Dados do restaurante" component={RestaurantDetails} />
        <Tab.Screen name="Configurações" component={Settings} />
      </Tab.Navigator>
      {isSaveActive &&
        <FooterButton>
          <Button title="Salvar" activeOpacity={0.7} />
        </FooterButton>
      }
    </Container>
  )
}