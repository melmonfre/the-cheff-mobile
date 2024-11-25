import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInputProps } from "react-native";
import { Container, TextInput, VerticalSeparator } from "./styles";

import { Ionicons } from "@expo/vector-icons";

type SearchInputProps = TextInputProps;

export function SearchInput({ ...rest }: SearchInputProps) {
  const navigation = useNavigation();
  const route = useRoute();

  const isProductsRoute = route.name === 'products';

  const handleAddProducts = () => {
    navigation.navigate('productsRoutes');
  };

  return (
    <Container>
      <TextInput {...rest} />

      <Ionicons name="search-sharp" size={20} color="#7E7E7E" />
      {isProductsRoute && (
        <>
          <VerticalSeparator />
          <Ionicons name="add-circle-outline" size={20} color="#7E7E7E" onPress={handleAddProducts} />
        </>
      )}
    </Container>
  );
}
