import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 25px 15px;
`;

export const ValueView = styled.View`
  align-self: center;
  width: 90%;
`;

export const RemainingValueView = styled.View`
  position: absolute;
  bottom: 85px;
  flex-direction: row;
  gap: 5px;
`;
