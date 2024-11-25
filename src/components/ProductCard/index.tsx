import {
  BoxDescription,
  Container,
  Price,
  ProductImage,
  ProductName,
} from "./styles";

type Product = {
  image: string;
  name: string;
  price: number;
};

type ProductCardProps = {
  data: Product;
  onPress: () => void;
};

export function ProductCard({ data, onPress }: ProductCardProps) {
  return (
    <Container activeOpacity={0.7} onPress={onPress}>
      <ProductImage
        resizeMode="center"
        source={{ uri: data.image, }}
      />

      <BoxDescription>
        <ProductName numberOfLines={1}>{data.name}</ProductName>
        <Price>R$ {data.price}</Price>
      </BoxDescription>
    </Container>
  );
}
