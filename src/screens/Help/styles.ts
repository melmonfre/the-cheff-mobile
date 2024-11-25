import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 32px;
  padding: 0px 15px;
`;

export const TitleContainer = styled.View`
  height: 50px;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const Image1 = styled.Image`
  overflow: hidden;
  position: relative;
  display: flex;
  width: 138;
  flex-shrink: 0;
  max-width: 100%;
  flex-direction: column;
  aspect-ratio: 1.73;
`;

export const FormContainer = styled.View`
  width: 100%;
  margin-top: -28px;
  padding: 0px 15px;
`;
