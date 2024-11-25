import { Typography } from "@components/Typography";
import { ActionButton, Container } from "./styles";

type PopoverProps = {
  toggleChangeQuantityModal?: () => void;
  toggleDeleteItemModal?: () => void;
  changeQuantityText: string;
  removeFromCartText: string;
}

export function Popover({ toggleChangeQuantityModal, toggleDeleteItemModal, changeQuantityText, removeFromCartText }: PopoverProps) {
  return (
    <Container>
      <ActionButton onPress={toggleChangeQuantityModal}>
        <Typography size="text_sm">{changeQuantityText}</Typography>
      </ActionButton>
      <ActionButton onPress={toggleDeleteItemModal}>
        <Typography size="text_sm">{removeFromCartText}</Typography>
      </ActionButton>
    </Container>
  )
}