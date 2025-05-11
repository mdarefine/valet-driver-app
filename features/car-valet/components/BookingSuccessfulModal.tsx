import React, { forwardRef } from 'react'
import { View, Modal, TouchableOpacity } from 'react-native'
import { Text } from '@/components/ui/text'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '@/lib/colors'

interface BookingSuccessfulModalProps {
  visible: boolean
  onClose: () => void
  onDone: () => void
}

const BookingSuccessfulModal = forwardRef<View, BookingSuccessfulModalProps>(
  ({ visible, onClose, onDone }, ref) => {
    return (
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={onClose}>
        <View className="flex-1 bg-black/50 justify-center items-center p-6">
          <View
            ref={ref}
            className="bg-white w-full rounded-xl overflow-hidden">
            {/* Content area with padding */}
            <View className="p-6 items-center">
              {/* Success Icon */}
              <View className="w-16 h-16 rounded-full bg-primary items-center justify-center mb-5">
                <MaterialIcons name="check" size={32} color="white" />
              </View>

              {/* Title */}
              <Text className="text-xl font-semibold text-primary mb-2 text-center">
                Booking Successful
              </Text>

              {/* Message */}
              <Text className="text-gray-600 text-center text-sm mb-6">
                Your booking has been successful. Please wait for approval before
                proceeding.
              </Text>
            </View>

            {/* Buttons - no padding on the container */}
            <View className="flex-row w-full border-t border-gray-200">
              <TouchableOpacity
                onPress={onClose}
                className="flex-1 h-14 items-center justify-center">
                <Text className="text-gray-500">Cancel</Text>
              </TouchableOpacity>
              <View className="w-[1px] bg-gray-200" />
              <TouchableOpacity
                onPress={onDone}
                className="flex-1 h-14 items-center justify-center">
                <Text className="text-primary">Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
)

export default BookingSuccessfulModal
