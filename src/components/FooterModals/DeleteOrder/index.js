import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

export default function DeleteOrder({ isVisible, onClose, children }) {
  return (
    <Modal
      isVisible={isVisible}
      backdropColor="transparent"
      backdropOpacity={0.3}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={onClose}
      style={{
        justifyContent: 'center',
        margin: 0,
      }}
    >
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          borderRadius: 10,
          paddingTop: 70,
          paddingBottom: 52,
          paddingHorizontal: 30,
          backgroundColor: 'white',
        }}
      >
        {children}
      </View>
    </Modal>
  );
}
