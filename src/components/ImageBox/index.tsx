import { Typography } from "@components/Typography";
import { ImageContainer, UploadIconBox } from "./styles";
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export function ImageBox() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ImageContainer onPress={pickImage} activeOpacity={0.7}>
      {!image && (
        <>
          <UploadIconBox>
            <Feather name="upload-cloud" size={24} color="black" />
          </UploadIconBox>
          <Typography>Enviar imagem</Typography>
        </>
      )}
      {image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />}
      {image && (
        <View style={styles.overlay}>
          <Feather name="camera" size={24} color="white" />
          <Typography style={{ color: "white" }}>Alterar imagem</Typography>
        </View>
      )}
    </ImageContainer>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
