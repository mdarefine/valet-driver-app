import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ImageUploadModalProps {
  visible: boolean;
  onClose: () => void;
  onCameraSelect: () => void;
  onGallerySelect: () => void;
}

const ImageUploadModal = ({
  visible,
  onClose,
  onCameraSelect,
  onGallerySelect
}: ImageUploadModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white rounded-t-3xl p-5">
          <Text className="text-xl font-bold text-center mb-4">Update Profile Picture</Text>

          <TouchableOpacity
            className="py-3 border-b border-gray-100 flex-row items-center"
            onPress={onCameraSelect}
          >
            <Ionicons name="camera" size={24} color="#3870E0" style={{ marginRight: 12 }} />
            <Text className="text-base">Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="py-3 border-b border-gray-100 flex-row items-center"
            onPress={onGallerySelect}
          >
            <Ionicons name="image" size={24} color="#3870E0" style={{ marginRight: 12 }} />
            <Text className="text-base">Choose from Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="py-3 mt-2 items-center"
            onPress={onClose}
          >
            <Text className="text-base text-red-500 font-medium">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImageUploadModal;
