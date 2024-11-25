import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Tables } from "@screens/Tables";
import { StoreProfileRoutes } from "@routes/storeProfile.routes";
import { CustomDrawer } from "@components/CustomDrawer";
import { Casher } from "@screens/Casher";
import { TableMenu } from "@screens/TableMenu";
import { CategoriesScreen } from "@screens/Categories";
import { Signature } from "@screens/Signature";
import { HelpPage } from "@screens/Help";
import { Products } from "@screens/Products";

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawer {...props} />
      )}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { fontFamily: "Poppins_400Regular" },
        drawerActiveBackgroundColor: "#08AE25",
        drawerActiveTintColor: "#fff",
      }}
    >
      <Screen
        name="tables-drawer"
        component={Tables}
        options={{ drawerLabel: "Mesas" }}
      />
      <Screen
        name="tableMenu"
        component={TableMenu}
        initialParams={{ headerTitle: "Venda rápida" }}
        options={{ drawerLabel: "Venda rápida" }}
      />
      <Screen
        name="casher"
        component={Casher}
        options={{ drawerLabel: "Caixa" }}
      />
      <Screen
        name="products"
        component={Products}
        options={{ drawerLabel: "Produtos" }}
      />
      <Screen
        name="categories"
        component={CategoriesScreen}
        options={{ drawerLabel: "Categorias" }}
      />
      <Screen
        name="storeProfile"
        component={StoreProfileRoutes}
        options={{ drawerLabel: "Perfil da loja" }}
      />
      <Screen
        name="signature-drawer"
        component={Signature}
        options={{ drawerLabel: "Assinatura" }}
      />
      <Screen
        name="helpCenter"
        component={HelpPage}
        options={{ drawerLabel: "Central de ajuda" }}
      />
    </Navigator>
  );
}
