import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Alert,
  Platform,
} from 'react-native'
import { Text } from '@/components/ui/text'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { useRouter } from 'expo-router'

export interface ReviewableItem {
  id: string
  name: string
  image: any
  price: number
  color?: string
  quantity: number
  description?: string
  status: string
}

interface ReviewModalProps {
  visible: boolean
  onClose: () => void
  orderItem: ReviewableItem
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  visible,
  onClose,
  orderItem,
}) => {
  const router = useRouter()
  const [rating, setRating] = useState(4)
  const [reviewText, setReviewText] = useState(
    'Very Good Product & Fast Delivery'
  )

  const handleSubmit = () => {
    console.log('Review submitted:', { orderItem, rating, reviewText })

    // Close modal first
    onClose()

    // Navigate directly to reviews page
    router.push({
      pathname: '/(app)/(a-root)/shops/reviews/Reviews',
    })
  }

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <MaterialIcons
            name={i <= rating ? 'star' : 'star-border'}
            size={36}
            color="#002B7F"
            style={{ marginHorizontal: 5 }}
          />
        </TouchableOpacity>
      )
    }
    return stars
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white rounded-t-3xl p-6">
          <View className="items-center mb-6 pt-2">
            <View className="w-12 h-1 bg-gray-300 rounded-full mb-4" />
            <Text
              className="text-xl font-Urbanist700 text-center"
              style={{ color: colors.textdark }}>
              Leave a Review
            </Text>
          </View>

          <View className="flex-row mb-6 pb-6 border-b border-gray-100">
            <Image
              source={orderItem.image}
              className="w-20 h-20 rounded-md"
              resizeMode="cover"
            />
            <View className="flex-1 ml-4 justify-between">
              <Text
                className="text-base font-Urbanist600 mb-1"
                style={{ color: colors.textdark }}>
                {orderItem.name}
              </Text>
              <Text
                className="text-xs font-Urbanist400 mb-2"
                style={{ color: colors.text.secondary }}>
                Composition - 100% Polyester - a very strong synthetic fiber
                that boasts high heat resistance and excellent odor absorption
              </Text>
              <Text
                className="text-lg font-Urbanist700"
                style={{ color: colors.primary }}>
                ${orderItem.price}
              </Text>
            </View>
          </View>

          <View className="mb-6">
            <Text
              className="text-lg font-Urbanist600 mb-4 text-center"
              style={{ color: colors.textdark }}>
              How is your order?
            </Text>
            <Text
              className="text-sm font-Urbanist400 mb-4 text-center"
              style={{ color: colors.text.secondary }}>
              Please give your rating & also your review...
            </Text>
            <View className="flex-row justify-center mb-6">
              {renderStars()}
            </View>

            <TextInput
              className="border border-gray-200 rounded-lg p-4 mb-6"
              style={{ color: colors.textdark }}
              value={reviewText}
              onChangeText={setReviewText}
              multiline
              numberOfLines={3}
            />

            <View className="flex-row justify-between">
              <TouchableOpacity
                className="flex-1 mr-3 py-4 border border-gray-300 rounded-lg items-center justify-center"
                onPress={onClose}>
                <Text
                  className="text-base font-Urbanist600"
                  style={{ color: colors.textdark }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 ml-3 py-4 rounded-lg items-center justify-center"
                style={{ backgroundColor: '#002B7F' }}
                onPress={handleSubmit}>
                <Text className="text-base font-Urbanist600 text-white">
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ReviewModal
