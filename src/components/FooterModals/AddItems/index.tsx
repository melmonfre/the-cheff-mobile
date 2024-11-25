import { AntDesign } from '@expo/vector-icons';
import { Container, Decrement, Increment, IncrementDecrementContainer, Inner, Text } from "./styles";
import { useState } from "react";

interface AddItemsProps {
  productPrice: number;
}

export function AddItems({ productPrice }: AddItemsProps) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productPrice);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(productPrice * (quantity - 1));
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotalPrice(productPrice * (quantity + 1));
  };

  return (
    <Container style={{ elevation: 10 }}>
      <IncrementDecrementContainer>
        <Decrement onPress={handleDecrement}>
          <AntDesign name="minus" size={10} color="black" />
        </Decrement>
        <Text style={{ color: '#232121' }}>{quantity}</Text>
        <Increment onPress={handleIncrement}>
          <AntDesign name="plus" size={10} color="black" />
        </Increment>
      </IncrementDecrementContainer>
      <Inner activeOpacity={0.7}>
        <Text>Adicionar</Text>
        <Text>R$ {totalPrice}</Text>
      </Inner>
    </Container>
  );
}