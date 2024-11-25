import { TouchableOpacityProps } from "react-native";

import { Typography } from "@components/Typography";
import { Container, MenuButtonIcon } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

import MenuIcon from "../../../assets/icons/menu-icon.png";

type MenuButtonProps = TouchableOpacityProps;

export function MenuButton({ ...rest }: MenuButtonProps) {
  const navigation = useNavigation();

  return (
    <Container
      activeOpacity={0.7}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      {...rest}
    >
      <MenuButtonIcon source={MenuIcon} />
      <Typography size="text_md" font="semi_bold" color="white">
        Menu
      </Typography>
    </Container>
  );
}
