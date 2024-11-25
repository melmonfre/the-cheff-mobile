import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { LoginScreen } from "@screens/Login";
import { RegisterScreen } from "@screens/Register";
import { ResetPassword } from "@screens/ResetPassword";
import { WelcomeScreen } from "@screens/Welcome";

type AuthRoutesProps = {
  welcome: undefined;
  login: undefined;
  register: undefined;
  resetpassword: undefined;
};

export type AuthNavigatorRoutesprops =
  NativeStackNavigationProp<AuthRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="welcome" component={WelcomeScreen} />
      <Screen name="login" component={LoginScreen} />
      <Screen name="register" component={RegisterScreen} />
      <Screen name="resetpassword" component={ResetPassword} />
    </Navigator>
  );
}
