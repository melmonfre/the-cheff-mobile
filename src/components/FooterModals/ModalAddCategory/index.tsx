import { AddButton } from '@screens/Categories/styles';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { CloseButton, TopLine } from './styles';
import { Typography } from '@components/Typography';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export const ModalAddCategory: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <AddButton activeOpacity={0.7} onPress={toggleModal}>
        <Feather name="plus" size={40} color='black' />
      </AddButton>

      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onSwipeComplete={toggleModal}
        swipeDirection={'down'}
        backdropOpacity={0.3}
        statusBarTranslucent
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <TopLine />
          <Typography size='text_lg' style={{ textAlign: 'center', marginTop: 16, marginBottom: 32, }}>Nova categoria</Typography>
          <Input placeholder='Nome da categoria' />
          <Button activeOpacity={0.7} title='Salvar categoria' style={{ marginTop: 30 }} />
          <CloseButton activeOpacity={0.7} onPress={toggleModal}>
            <Entypo name="cross" size={20} color="black" />
          </CloseButton>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    flex: 0.3,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});