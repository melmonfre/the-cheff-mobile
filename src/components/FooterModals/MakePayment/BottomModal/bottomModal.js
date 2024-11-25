import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

export default function BottomModal({ isVisible, onClose, children }) {
  return (
    <Modal
      isVisible={isVisible}
      backdropColor="black"
      backdropOpacity={0.3}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={onClose}
      statusBarTranslucent
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
    >
      <View
        style={{
          paddingHorizontal: 12,
          paddingTop: 52,
          paddingBottom: 50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
        }}
      >
        {children}
      </View>
    </Modal>
  );
}
