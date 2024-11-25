import { Typography } from "@components/Typography";
import styled from "styled-components/native";

export const Row = styled.TouchableOpacity`
  align-items: stretch;
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

export const View2 = styled.View`
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  height: 100%;
  margin: 5px;
`;

export const View3 = styled.View`
  width: 90%;
  height: auto;
  white-space: break-spaces;
`;

export const View4 = styled.View`
  color: #a1a1a1;
  white-space: nowrap;
  margin: 4px -20px 0 0;
`;

export const CardTitle = styled(Typography)`
  color: #232121;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;
`;

export const CardText = styled(Typography)`
  color: #a1a1a1;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: left;
`;
