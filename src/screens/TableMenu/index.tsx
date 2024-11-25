import { useState } from "react";
import { Dimensions, FlatList, View } from "react-native";

import { Box, Container, FormContainer } from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { ProductCard } from "@components/ProductCard";
import { BackButton } from "@components/BackButton";
import { CategoryCard } from "@components/CategoryCard";
import { ProductModal } from "@components/ProductModal";
import { SaveOrFinish } from "@components/FooterModals/SaveOrFinish";

type ProductProps = {
  name: string;
  price: number;
  image: string;
};

type RouteParams = {
  headerTitle: string;
};

export function TableMenu() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [categories, setCategories] = useState([
    "Todas as Categorias",
    "Sanduiche",
    "Hamburguer",
    "Testando 1",
  ]);

  const [categoryIsActive, setCategoryIsActive] = useState(
    "Todas as Categorias"
  );

  const route = useRoute();
  const { headerTitle } = route.params ? (route.params as RouteParams) : { headerTitle: "Default Title" };

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const products: ProductProps[] = [
    {
      name: "Pizza",
      price: 30,
      image:
        "https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg",
    },
    {
      name: "X-Bacon",
      price: 25,
      image: "https://embutidosbonatti.ind.br/temp/BIN_57_V9Fb0BwK.jpg",
    },
    {
      name: "Burger Master",
      price: 29,
      image:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=all",
    },
    {
      name: "Coca cola 350ml",
      price: 5,
      image: "https://changlee.com.br/wp-content/uploads/2016/09/coca-cola.jpg",
    },
    {
      name: "Heineken 330ml",
      price: 10,
      image:
        "https://www.opovo.com.br/noticiasimages/app/noticia_146418291334/2017/03/22/268590/heineken.jpg",
    },
  ];

  return (
    <Container>
      <Header
        variant="secondary"
        headerTitle={headerTitle}
        hasSearch={true}
        leftButton={<BackButton variant="primary" />}
      />

      <Box>
        <FormContainer>
          <SearchInput placeholder="Buscar produto" />
        </FormContainer>

        <FlatList
          ListHeaderComponent={() => (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={({ item }) => (
                <CategoryCard
                  name={item}
                  isActive={
                    item.toUpperCase() === categoryIsActive.toLocaleUpperCase()
                  }
                  onPress={() => setCategoryIsActive(item)}
                />
              )}
              style={{ paddingTop: 14 }}
              contentContainerStyle={{ gap: 10, paddingBottom: 10 }}
            />
          )}
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({ item }) => (
            <View style={{ width: (Dimensions.get("window").width - 15) / 2 - 20 }}>
              <ProductCard
                data={item}
                onPress={() => { setModalVisible(true); setSelectedProduct(item) }}
              />
            </View>
          )}
          keyExtractor={(item) => item.image}
          numColumns={2}
          columnWrapperStyle={{ gap: 20 }}
          contentContainerStyle={{ gap: 14 }}
          style={{ marginBottom: 20, marginTop: 10 }}
        />
      </Box>
      {isModalVisible && <ProductModal product={selectedProduct} onCloseModal={handleCloseModal} />}
      <SaveOrFinish />
    </Container>
  );
}
