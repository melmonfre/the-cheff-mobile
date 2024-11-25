import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { TableMenu } from "@screens/TableMenu";
import { TableBill } from "@screens/TableBill";
import { PaymentScreen } from "@screens/Payment";
import { PaymentConfirmation } from "@screens/PaymentConfirmation";
import { Receipt } from "@screens/Receipt";
import { DrawerRoutes } from "./drawer.routes";
import { Signature } from "@screens/Signature";
import { PlansAndPrice } from "@screens/PlansAndPrice";
import { FormOfPayment } from "@screens/FormOfPayment";
import { PixPayment } from "@screens/PixPayment";
import { PayPix } from "@screens/PayPix";
import { PaymentConfirmed } from "@screens/PaymentConfirmed";
import { PaymentRefused } from "@screens/PaymentRefused";
import { PaymentWithCard } from "@screens/PaymentWithCard";
import { Premium } from "@screens/Premium";
import { CasherDetails } from "@screens/CasherDetails";
import { CategoriesScreen } from "@screens/Categories";
import { BillingCheckoutPage } from "@screens/BillingCheckout";
import { HelpPage } from "@screens/Help";
import { HelpContent } from "@screens/Help/HelpContent";
import { ProductsRoutes } from "./addProducts.routes";
import { Description } from "@screens/Description";
import { AddComplement } from "@screens/Complement";
import { AddComplements } from "@screens/AddProducts/Complements";

type AppRoutesProps = {
  tables: {};
  tableMenu: {
    headerTitle: string;
  };
  plansAndPrice: {};
  formOfPayment: {};
  pixPayment: {};
  payPix: {};
  paymentWithCard: {};
  paymentConfirmed: {};
  paymentRefused: {};
  tableBill: {};
  signature: {};
  productDetails: {},
  payment: {},
  paymentConfirmation: {},
  receipt: {},
  premium: {},
  casherDetails: {},
  categories: {},
  billingCheckout: {},
  help: {},
  helpContent: {},
  addProducts: {},
  productsRoutes: {},
  description: {},
  addcomplement: {}
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesProps>;

const { Screen, Navigator, Group } = createNativeStackNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="tables"
    >
      <Screen name="tables" component={DrawerRoutes} />
      <Screen name="tableMenu" component={TableMenu} />
      <Screen name="tableBill" component={TableBill} />
      <Screen name="plansAndPrice" component={PlansAndPrice} />
      <Screen name="formOfPayment" component={FormOfPayment} />
      <Screen name="pixPayment" component={PixPayment} />
      <Screen name="payPix" component={PayPix} />
      <Screen name="paymentWithCard" component={PaymentWithCard} />
      <Screen name="paymentConfirmed" component={PaymentConfirmed} />
      <Screen name="paymentRefused" component={PaymentRefused} />
      <Group>
        <Screen name="payment" component={PaymentScreen} />
        <Screen name="paymentConfirmation" component={PaymentConfirmation} />
        <Screen name="receipt" component={Receipt} />
        <Screen name="signature" component={Signature} />
      </Group>
      <Screen name="premium" component={Premium} />
      <Screen name="casherDetails" component={CasherDetails} />
      <Screen name="categories" component={CategoriesScreen} />
      <Screen name="billingCheckout" component={BillingCheckoutPage} />
      <Screen name="help" component={HelpPage} />
      <Screen
        name="helpContent"
        component={HelpContent}
        initialParams={{ id: 0, uri: '', cardTitle: '', date: '' }}
      />
      <Screen name="productsRoutes" component={ProductsRoutes} />
      <Screen name="description" component={Description} />
      <Screen name="addcomplement" component={AddComplement} />
    </Navigator >
  );
}
