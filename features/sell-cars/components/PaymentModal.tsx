import React from 'react'
import { View, Text, Modal, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'

const PaymentModal = ({ visible, onClose, onPayment }: { visible: boolean, onClose: () => void, onPayment: () => void }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.18)' }}>
        <View className="rounded-t-2xl p-6 items-center" style={{ backgroundColor: colors.textwhite }}>
          <View className="rounded-full w-[60px] h-[60px] justify-center items-center mb-4" style={{ backgroundColor: colors.primary }}>
            <Ionicons name="checkmark" size={36} color={colors.textwhite} />
          </View>
          <Text className="text-xl font-bold mb-2" style={{ color: colors.primary }}>List Your Car for Sale</Text>
          <Text className="text-sm text-center mb-4.5" style={{ color: colors.default }}>
            Your car details have been submitted. Complete the payment to publish your listing.
          </Text>
          <View className="rounded-lg p-3 w-full mb-6" style={{ backgroundColor: colors.tertiary }}>
            <Text className="font-bold text-sm" style={{ color: colors.primary }}>ⓘ Listing Fee</Text>
            <Text className="text-sm" style={{ color: colors.primary }}>
              The fixed listing fee is $20. Your listing will be active for 30 days.
            </Text>
          </View>
          <Pressable
            className="rounded-md py-3 w-full items-center"
            style={{ backgroundColor: colors.primary }}
            onPress={onPayment}
          >
            <Text className="text-base font-bold" style={{ color: colors.textwhite }}>Pay with Stripe</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default PaymentModal