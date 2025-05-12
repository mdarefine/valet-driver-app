import React from 'react';
import { View, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Text } from '@/components/ui/text';
import { Ionicons } from '@expo/vector-icons';

interface CompleteTaskModalProps {
  isVisible: boolean;
  description: string;
  setDescription: (text: string) => void;
  onClose: () => void;
  onComplete: () => void;
}

const CompleteTaskModal: React.FC<CompleteTaskModalProps> = ({
  isVisible,
  description,
  setDescription,
  onClose,
  onComplete
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="bg-white rounded-lg w-[90%] p-6">
          <View className="items-center mb-4">
            <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mb-3">
              <Ionicons name="location" size={24} color="white" />
            </View>
            <Text className="text-xl font-bold text-primary mb-2">Confirm Completion</Text>
            <Text className="text-center text-gray-600 mb-4">
              You have reached the final destination. Please ensure all items have been delivered successfully before marking this task as complete.
            </Text>
          </View>
          
          <Text className="text-gray-600 mb-2">Description(optional)</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-3 mb-5 w-full"
            placeholder="Enter additional note"
            multiline
            numberOfLines={2}
            value={description}
            onChangeText={setDescription}
          />
          
          <TouchableOpacity 
            className="bg-primary py-3 rounded-md items-center"
            onPress={onComplete}
          >
            <Text className="text-white font-medium">Mark as complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CompleteTaskModal;
