import { FlatList, View, Dimensions } from "react-native";

import { Box, Container, FormContainer } from "./styles";

import { Header } from "@components/Header";
import { TableCard } from "@components/TableCard";
import { MenuButton } from "@components/MenuButton";
import { QuickSaleButton } from "@components/QuickSaleButton";
import { SearchInput } from "@components/SearchInput";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type TableList = {
  number: string;
  isBusy: boolean;
  time: string;
  subtotal: number;
  total: number;
};

export function Tables() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const tables: TableList[] = [
    {
      number: "Mesa 01",
      time: "01:27",
      subtotal: 70,
      total: 77,
      isBusy: true,
    },
    { number: "Mesa 02", time: "", subtotal: 0, total: 0, isBusy: false },
    { number: "Mesa 03", time: "", subtotal: 0, total: 0, isBusy: false },
    { number: "Mesa 04", time: "", subtotal: 0, total: 0, isBusy: false },
    { number: "Mesa 05", time: "", subtotal: 0, total: 0, isBusy: false },
    {
      number: "Mesa 06",
      time: "01:27",
      subtotal: 15000000,
      total: 145,
      isBusy: true,
    },
    {
      number: "Mesa 07",
      time: "02:18",
      subtotal: 88,
      total: 85,
      isBusy: true,
    },
    {
      number: "Mesa 08",
      time: "00:52",
      subtotal: 1200000,
      total: 10,
      isBusy: true,
    },
    { number: "Mesa 09", time: "", subtotal: 0, total: 0, isBusy: false },
    { number: "Mesa 10", time: "", subtotal: 0, total: 0, isBusy: false },
    { number: "Mesa 11", time: "", subtotal: 0, total: 0, isBusy: false },
    { number: "Mesa 12", time: "", subtotal: 0, total: 0, isBusy: false },
  ];

  return (
    <Container>
      <Header
        variant="secondary"
        hasSearch={true}
        leftButton={<MenuButton  />}
        rightButton={<QuickSaleButton onPress={() => navigation.navigate('tableMenu', {headerTitle: 'Venda rápida'})} />}
      />

      <Box>
        <FormContainer>
          <SearchInput placeholder="Buscar por mesa" />
        </FormContainer>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={tables}
          renderItem={({ item }) => (
            <View
              style={{ width: (Dimensions.get("window").width - 15) / 2 - 20 }}
            >
              <TableCard data={item} onPress={() => navigation.navigate('tableMenu', {headerTitle: item.number})} />
            </View>
          )}
          numColumns={2}
          columnWrapperStyle={{ gap: 20 }}
          contentContainerStyle={{ gap: 14, paddingTop: 18 }}
          style={{  marginTop: 12, marginBottom: 20 }}
        />
      </Box>
    </Container>
  );
}
