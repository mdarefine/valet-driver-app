import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/lib/colors';

interface LogoutConfirmModalProps {
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutConfirmModal = ({
  visible,
  onClose,
  onLogout
}: LogoutConfirmModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white rounded-lg w-[90%] max-w-[320px] p-6 items-center">
          <View className="w-14 h-14 rounded-full bg-[#FEE2E2] items-center justify-center mb-4">
            <Ionicons name="log-out-outline" size={28} color={colors.danger} />
          </View>

          <Text className="text-lg font-medium text-default mb-2">Log Out</Text>
          <Text className="text-sm text-center text-subtle mb-6">Are you sure you want to log out?</Text>

          <View className="flex-row w-full">
            <Pressable
              className="flex-1 py-3 px-4 mr-2 rounded-lg border border-[#E0E0E0]"
              onPress={onClose}
            >
              <Text className="text-center text-default">Cancel</Text>
            </Pressable>

            <Pressable
              className="flex-1 py-3 px-4 ml-2 rounded-lg bg-primary"
              onPress={onLogout}
            >
              <Text className="text-center text-white">Logout</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutConfirmModal;
