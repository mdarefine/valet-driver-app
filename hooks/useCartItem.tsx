import React from 'react'
import { View, Image, TouchableOpacity, Modal } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Text } from '@/components/ui/text'
import colors from '@/lib/colors'
import { useState } from 'react'

interface CartItemType {
  id: string
  name: string
  description: string
  image: any
  price: number
  quantity: number
  color?: string
}

interface CartItemProps {
  item: CartItemType
  onRemovePress?: (item: CartItemType) => void
  increaseQuantity?: (id: string) => void
  decreaseQuantity?: (id: string) => void
  showControls?: boolean
}

const CartItemComponent: React.FC<CartItemProps> = ({
  item,
  onRemovePress,
  increaseQuantity,
  decreaseQuantity,
  showControls = true,
}) => (
  <View className="relative mb-4">
    <View
      className="flex-row rounded-lg bg-white p-4"
      style={{
        shadowColor: colors.shadow.light.color,
        shadowOffset: colors.shadow.light.offset,
        shadowOpacity: colors.shadow.light.opacity,
        shadowRadius: colors.shadow.light.radius,
        elevation: colors.shadow.light.elevation,
      }}>
      <View
        className="pr-4 mr-3"
        style={{
          borderRightWidth: 1,
          borderRightColor: colors.border.gray,
        }}>
        <Image
          source={item.image}
          className="w-20 h-20 rounded-md"
          resizeMode="cover"
        />
      </View>
      <View className="flex-1">
        <Text
          className="text-base font-Urbanist600 mb-1"
          style={{ color: colors.textdark }}>
          {item.name}
        </Text>
        <Text
          className="text-xs font-Urbanist400 mb-2"
          style={{ color: colors.text.secondary }}
          numberOfLines={2}>
          {item.description}
        </Text>
        <View className="flex-row items-center justify-between mt-1">
          <Text
            className="text-base font-Urbanist600"
            style={{ color: colors.primary }}>
            ${item.price}
          </Text>
          {showControls && increaseQuantity && decreaseQuantity && (
            <View className="flex-row items-center">
              <TouchableOpacity
                className="w-6 h-6 border rounded-full items-center justify-center"
                style={{ borderColor: colors.border.gray }}
                onPress={() => decreaseQuantity(item.id)}>
                <Text
                  className="text-sm font-Urbanist600"
                  style={{ color: colors.textdark, lineHeight: 22 }}>
                  -
                </Text>
              </TouchableOpacity>
              <Text
                className="mx-3 text-sm font-Urbanist500"
                style={{ color: colors.textdark }}>
                {item.quantity}
              </Text>
              <TouchableOpacity
                className="w-6 h-6 border rounded-full items-center justify-center"
                style={{ borderColor: colors.border.gray }}
                onPress={() => increaseQuantity(item.id)}>
                <Text
                  className="text-sm font-Urbanist600"
                  style={{ color: colors.textdark, lineHeight: 22 }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {!showControls && (
            <Text
              className="text-sm font-Urbanist500"
              style={{ color: colors.textdark }}>
              Qty: {item.quantity}
            </Text>
          )}
        </View>
      </View>
    </View>
    {showControls && onRemovePress && (
      <TouchableOpacity
        onPress={() => onRemovePress(item)}
        className="absolute -top-2 -right-2 z-10">
        <View
          className="w-7 h-7 rounded-full items-center justify-center"
          style={{ backgroundColor: colors.danger }}>
          <Feather name="minus" size={16} color={colors.textwhite} />
        </View>
      </TouchableOpacity>
    )}
  </View>
)

// Reusable confirmation modal for removing items
const RemoveConfirmationModal = ({
  visible,
  item,
  onCancel,
  onConfirm,
}: {
  visible: boolean
  item: CartItemType | null
  onCancel: () => void
  onConfirm: () => void
}) => {
  if (!item) return null

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white w-full rounded-t-xl overflow-hidden px-5">
          <View className="p-5 items-center">
            <Text
              className="text-xl font-Urbanist600 mb-6"
              style={{ color: colors.textdark }}>
              Remove From Cart?
            </Text>

            <View className="w-full flex-row mb-5">
              <Image
                source={item.image}
                className="w-20 h-20 rounded-md"
                resizeMode="cover"
              />
              <View className="ml-4 flex-1">
                <Text
                  className="text-base font-Urbanist600 mb-1"
                  style={{ color: colors.textdark }}>
                  {item.name}
                </Text>
                <Text
                  className="text-xs font-Urbanist400 mb-2"
                  style={{ color: colors.text.secondary }}
                  numberOfLines={2}>
                  {item.description}
                </Text>
                <Text
                  className="text-base font-Urbanist600"
                  style={{ color: colors.primary }}>
                  ${item.price}
                </Text>
              </View>
            </View>

            <View className="flex-row w-full gap-4">
              <TouchableOpacity
                className="flex-1 py-3 border border-gray-300 rounded-lg items-center justify-center"
                onPress={onCancel}>
                <Text
                  className="text-base font-Urbanist600"
                  style={{ color: colors.textdark }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 py-3 rounded-lg items-center justify-center"
                style={{ backgroundColor: colors.primary }}
                onPress={onConfirm}>
                <Text
                  className="text-base font-Urbanist600"
                  style={{ color: colors.textwhite }}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export const useCartItem = () => {
  const [itemToRemove, setItemToRemove] = useState<CartItemType | null>(null)
  const [showRemoveModal, setShowRemoveModal] = useState(false)

  const handleRemovePress = (item: CartItemType) => {
    setItemToRemove(item)
    setShowRemoveModal(true)
  }

  const handleRemoveCancel = () => {
    setShowRemoveModal(false)
    setItemToRemove(null)
  }

  const handleRemoveConfirm = (removeFromCart: (id: string) => void) => {
    if (itemToRemove) {
      removeFromCart(itemToRemove.id)
    }
    setShowRemoveModal(false)
    setItemToRemove(null)
  }

  return {
    itemToRemove,
    showRemoveModal,
    handleRemovePress,
    handleRemoveCancel,
    handleRemoveConfirm,
    RemoveConfirmationModal,
  }
}

export type { CartItemType }
export { CartItemComponent }
export default useCartItem
