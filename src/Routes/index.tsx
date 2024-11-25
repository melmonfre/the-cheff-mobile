import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "@hooks/useAuth";

export function Routes() {
  const { company } = useAuth();

  return (
    <NavigationContainer>
      {company.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
