import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 15px 15px 65px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};

  align-items: center;
`;

export const Box = styled.View`
  margin: 18px 0px;

  gap: 12px;
`;
