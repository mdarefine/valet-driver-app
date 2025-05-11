import { Image, Linking, ScrollView, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import Button from '@/components/ui/button'
import Rating from '@/components/common/Rating'

import Seat from '@/assets/images/home/car-wash-sample.png'
import { router } from 'expo-router'
import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons'
import DottedLine from '@/components/ui/dotted-line'
import colors from '@/lib/colors'
import ServiceButton from '@/components/common/ServiceButton'
import DirectionIcon from '@/assets/svgs/main/DirectionIcon'
import CallIcon from '@/assets/svgs/main/CallIcon'
import WhatsappIcon from '@/assets/svgs/main/WhatsappIcon'
import OrderTimeline, { OrderStep } from '@/components/common/OrderTimeline'
import { SafeAreaView } from 'react-native-safe-area-context'

const orderSteps: OrderStep[] = [
  {
    title: 'Invoice Received',
    timestamp: '28 Nov, 2024 | 15:02',
    isCompleted: true,
  },
  {
    title: 'Make Payment',
    timestamp: '28 Nov, 2024 | 15:02',
    isCompleted: false,
  },
  {
    title: 'In Progress',
    timestamp: '28 Nov, 2024 | 17:02',
    isCompleted: false,
  },
  {
    title: 'Ready to Drop',
    timestamp: '1st Dec, 2024 | 07:02',
    isCompleted: false,
  },
  {
    title: 'Dropped',
    timestamp: '1st Dec, 2024 | 09:02',
    isCompleted: false,
  },
]
const PendingOrderDetail = () => {
  return (
    // <View className="flex-1">
       <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1 ">
      <ScrollView contentContainerClassName=" mt-4 gap-5 px-4" className='flex-1'>
        <View
          className="border border-[#4A445929] py-4 rounded-lg bg-white"
          style={{
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}>
          <View className="py-2 px-4 flex-row gap-5 ">
            <Image
              className="w-20 h-20 object-cover rounded-md"
              source={Seat}
              resizeMode="cover"
            />
            <View className="flex-col justify-between flex-1 gap-2">
              <Text className="text-xl font-Urbanist600 text-primary">
                Amsoil OE Series 0W20 / 5W30 / 5W40 4L Vehicle Servicing Package
              </Text>
              <View className="flex-row gap-2 items-center">
                <FontAwesome name={'star'} size={10} color={colors.rating} />
                <Text className="text-xs font-Urbanist700 text-rating">
                  4.5
                </Text>
              </View>
              <View className="flex-row gap-2 items-center">
                <Ionicons name="location-outline" size={14} color="#7A7A7A" />
                <Text className="text-text-brown-10 font-Urbanist500 text-sm">
                  23 Hollywood Blvd, Los Angeles
                </Text>
              </View>
            </View>
          </View>
          <DottedLine className="my-4" />
          <View className="py-2 px-4 flex-row gap-5 items-center">
            <MaterialCommunityIcons
              name="car-outline"
              size={20}
              color={colors.primary}
            />

            <Text className="text-base font-Urbanist600 text-subtitle">
              Toyota Camry -{' '}
              <Text className="text-gray03 text-base font-Urbanist600">
                Year: 2025
              </Text>
            </Text>
          </View>
          <View className="py-2 px-4 flex-row gap-5 items-center">
          <SimpleLineIcons name="wrench" size={20}  color={colors.primary} />
          <Text className="text-base font-Urbanist600 text-subtitle w-[150px]">
          Amsoil OE Series 0W20 / 
          5W30 / 5W40 4L Vehicle Servicing Package {' '}
             
            </Text>
            <Text className="text-gray03 text-base font-Urbanist600">
             - Booking ID: #S56790
              </Text>
          </View>
          <DottedLine className="my-4" />
          <View className="py-2 px-4 gap-4">
            <View className="flex-row gap-5">
              <Feather name="calendar" size={20} color={colors.primary} />
              <Text className="text-gray03 text-base font-Urbanist600">
                Monday, 17 Aug 2024
              </Text>
            </View>
            <View className="flex-row gap-5">
              <FontAwesome6 name="clock" size={20} color={colors.primary} />

              <Text className="text-gray03 text-base font-Urbanist600">
                11:00 AM
              </Text>
            </View>
          </View>
          <DottedLine className="my-4" />
          <View className="py-2 px-4 gap-4">
            <Text className="text-base font-Urbanist600 text-primary">
              Price Details
            </Text>
            <View className="flex-row justify-between">
              <Text className="text-base font-Urbanist500 text-subtle">
                Parts Cost
              </Text>
              <Text className="text-base font-Urbanist500 text-gray02">
                $19.99
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-base font-Urbanist500 text-subtle">
                Labor Cost
              </Text>
              <Text className="text-base font-Urbanist500 text-gray02">
                $19.99
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-base font-Urbanist500 text-subtle">
                Other Charges
              </Text>
              <Text className="text-base font-Urbanist500 text-gray02">
                $10.00
              </Text>
            </View>
            <DottedLine />
            <View className="flex-row justify-between">
              <Text className="text-lg font-Urbanist600 text-subtle">
                Total Estimated Cost (SGD)
              </Text>
              <Text className="text-xl font-Urbanist700 text-subtitle">
                $10.00
              </Text>
            </View>
            <DottedLine/>
            <View >
                  <Text className="text-base font-Urbanist500 text-subtle">I am interested in the "Amsoil OE Series 0W20 / 5W30 / 5W40 4L Vehicle Servicing Package</Text>
                  </View>
          </View>
        </View>
       
                 
        {/* <View className="flex-row gap-4 my-3 justify-between px-2">
          <ServiceButton
            icon={<DirectionIcon />}
            title="Directions"
            onPress={() => Linking.openURL(`https://www.google.com/maps`)}
          />
          <ServiceButton
            icon={<CallIcon />}
            title="Call Workshop"
            onPress={() => Linking.openURL(`tel:12345`)}
          />
          <ServiceButton
            icon={<WhatsappIcon />}
            title="Whatsapp"
            onPress={() => Linking.openURL(`whatsapp://send?text=Hello`)}
          />
        </View> */}
         <View className="border border-primary rounded-lg p-4">
        <OrderTimeline steps={orderSteps} />
      </View>
      </ScrollView>
      <View
        className="px-4 py-3 bg-white flex-row"
        style={{
          shadowColor: '#CFC3C3',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.33,
          shadowRadius: 10,
          borderRadius: 10,
        }}>
        <View className="flex-1 justify-center items-center border-r border-[#EEEEEE] py-2">
          <Button variant="text" titleClassName="text-primary">
            Approve
          </Button>
        </View>
        <View className="flex-1 justify-center items-center py-2">
          <Button
            variant="text"
            titleClassName="text-brand-red"
            onPress={() => router.push('/car-repair/order-detail')}>
            Decline
          </Button>
        </View>
      </View>
      </SafeAreaView>
    // </View>
  )
}

export default PendingOrderDetail
