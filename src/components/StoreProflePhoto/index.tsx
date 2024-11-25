import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Container, FallbackContainer, FallbackText, ProfileImage, UploadIcon } from "./styles";

type StoreProfilePhotoTypes = {
  onImageSelected?: (imageUri: string) => void;
}

export function StoreProfilePhoto({ onImageSelected }: StoreProfilePhotoTypes) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImagePick = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedUri = result.assets[0].uri;
        setSelectedImage(selectedUri);
        if (onImageSelected) {
          onImageSelected(selectedUri);
        }
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  return (
    <Container onPress={handleImagePick}>
      {selectedImage ? (
        <ProfileImage source={{ uri: selectedImage }} />
      ) : (
        <FallbackContainer>
          <UploadIcon>
            <MaterialCommunityIcons name="upload-outline" size={24} color="black" />
          </UploadIcon>
          <FallbackText>Logo da Loja</FallbackText>
        </FallbackContainer>
      )}
    </Container>
  );
}
