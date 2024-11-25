import styled, { css } from "styled-components/native";

type StyledProps = {
  variant: boolean;
};

export const Container = styled.Modal`
  flex: 1;
`;

export const ModalContent = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const HStack = styled.View`
  flex-direction: row;
`;

export const CloseModal = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.gray_300};

  align-items: center;
  justify-content: center;
`;

export const PaymentView = styled.View`
  padding: 15px 15px 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.colors.white};
  margin-top: auto;
`;

export const SubscriptionPeriodButton = styled.Pressable<StyledProps>`
  min-width: 128px;
  padding: 14px;
  gap: 14px;
  border-radius: 4px;
  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray_300};

  ${({ theme, variant }) =>
    variant &&
    css`
      border-color: ${theme.colors.green_dark};
    `}

  align-items: center;
  justify-content: center;
`;
