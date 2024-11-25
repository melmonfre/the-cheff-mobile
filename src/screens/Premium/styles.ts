import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Content = styled.View`
  flex: 1;
`

export const ContentHeader = styled.View`
  align-self: center;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const ContentHeaderText = styled.View`
  align-items: center;
  gap: -8px;
`

export const ContentInfos = styled.View`
  padding: 0px 28px;
  gap: 10px;
`

export const Info = styled.View`
  width: 325px;
  height: auto;
  flex-direction: row;
  gap: 12px;
  `

export const ContentBox = styled.View`
  gap: -5px;
`

export const IconBox = styled.View`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.green_dark};
`

export const PlanInformationBox = styled.View`
  gap: 4px;
  padding: 10px;
  margin-top: 40px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
`

export const PaymentTypeAndAmountBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PaymentType = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
`

export const BillingPeriodAndNextBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const BillingPeriod = styled.View`
  align-items: flex-start;
  gap: -5px;
`

export const NextCharge = styled.View`
  align-items: flex-end;
  gap: -5px;
`

export const Invoice = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 75px;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green_light};
`

export const FooterBox = styled.View`
  width: 100%;
  padding: 0px 15px 40px;
`