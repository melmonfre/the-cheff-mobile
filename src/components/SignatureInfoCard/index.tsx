import { SignatureIcons } from "@components/SignatureIcons";
import { Container, IconBox, VStack } from "./styles";
import { Typography } from "@components/Typography";

type Item = {
  key: string;
  title: string;
  description: string;
};

type SignatureInfoCardProps = {
  data: Item;
};

export function SignatureInfoCard({ data }: SignatureInfoCardProps) {
  return (
    <Container>
      <IconBox>
        <SignatureIcons value={data.key} />
      </IconBox>

      <VStack>
        <Typography font="semi_bold" >{data.title}</Typography>

        <Typography size="text_sm" >{data.description}</Typography>
      </VStack>
    </Container>
  );
}
