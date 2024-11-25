import { Typography } from "@components/Typography";
import { Container, HStack, PixIcon, TimerBox } from "./styles";

import PixPng from '../../../../../assets/icons/pix.png'

export function PixCard() {
  return (
    <Container>
      <HStack>
        <PixIcon source={PixPng}/>

        <Typography>Pix</Typography>
      </HStack>

      <TimerBox>
        <Typography font="medium" color="white" size="text_sm">
          05:00
        </Typography>
      </TimerBox>
    </Container>
  );
}
