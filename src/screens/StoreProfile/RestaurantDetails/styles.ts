import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const RestaurantDetailsContainer = styled.View`
  margin-top: 25px;
  gap: 15px;
`

export const ContactContainer = styled.View`
  margin-top: 25px;
  gap: 15px;
`

export const AddressContainer = styled.View`
  margin-top: 25px;
  gap: 15px;
`