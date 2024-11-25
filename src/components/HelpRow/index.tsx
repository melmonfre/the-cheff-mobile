import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CardText, CardTitle, Row, View2, View3, View4 } from "./styles";
import { Image } from "react-native";

export function HelpRow({
  id,
  uri,
  cardTitle,
  date,
}: {
  id: number;
  uri: string;
  cardTitle: string;
  date: string;
}) {
  const navigation = useNavigation();

  return (
    <Row
      activeOpacity={0.7}
      style={{ flexDirection: "row", gap: 10 }}
      onPress={() => {
        navigation.navigate('helpContent', { id, uri, cardTitle, date });
      }}
    >
      <Image
        resizeMode="contain"
        source={{
          uri: uri,
        }}
        style={{ width: 138, height: 80, borderRadius: 5 }}
      />
      <View2>
        <View3>
          <CardTitle>{cardTitle}</CardTitle>
        </View3>
        <View4>
          <CardText>{date}</CardText>
        </View4>
      </View2>
    </Row>
  );
}
