import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Modal, Animated } from 'react-native';
import { Checkbox } from 'react-native-paper';
import colors from '@/lib/colors';
import { Text } from '@/components/ui/text';

type SuccessModalProps = {
  visible: boolean;
  title: string;
  message: string;
  buttonText: string;
  onClose: () => void;
};

const SuccessModal = ({
  visible,
  title,
  message,
  buttonText = 'Back to Home',
  onClose
}: SuccessModalProps) => {
  const [modalAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(modalAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(modalAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }).start();
    }
  }, [visible]);

  const handleClose = () => {
    Animated.timing(modalAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
      onClose();
    });
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={handleClose}
    >
      <View className="flex-1 justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <Animated.View 
          style={{
            transform: [{
              translateY: modalAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [300, 0]
              })
            }],
            backgroundColor: colors.textwhite,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
            paddingBottom: 40
          }}
        >
          <View className="items-center">
            <View className="rounded-full p-4 mb-4" style={{ backgroundColor: colors.primary }}>
              <Checkbox status="checked" color={colors.textwhite} />
            </View>
            <Text className="text-xl font-bold mb-2" style={{ color: colors.primary }}>{title}</Text>
            <Text className="text-center mb-4" style={{ color: colors.gray01 }}>
              {message}
            </Text>
            <TouchableOpacity 
              onPress={handleClose}
              className="mt-4 py-2 px-6 rounded-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Text style={{ color: colors.textwhite }}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
