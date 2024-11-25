import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from '@components/Button';
import { FontAwesome } from '@expo/vector-icons';
import { IconBox, Row, TopLine } from './styles';

export function ModalSupport({ isVisible, closeModal }) {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onSwipeComplete={closeModal}
      swipeDirection={'down'}
      backdropOpacity={0.3}
      statusBarTranslucent
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <TopLine />
        <Row>
          <IconBox>
            <FontAwesome name="whatsapp" size={24} color="white" />
          </IconBox>
          <Button activeOpacity={0.7} title='Conversar com o suporte' />
        </Row>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});