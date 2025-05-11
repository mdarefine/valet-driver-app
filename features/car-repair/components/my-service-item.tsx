import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import DottedLine from '@/components/ui/dotted-line'
import { Text } from '@/components/ui/text'
import ShopIcon from '@/assets/svgs/ShopIcon'
import Button from '@/components/ui/button'
import { router } from 'expo-router'
import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons'
import colors from '@/lib/colors'

const MyServiceItem = ({item}:any) => {
  
  return (
    <TouchableOpacity>
      <View
        className="bg-white border border-border-gray2 rounded-lg my-2"
        style={{
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}>
        <View className="p-4 flex-row justify-between items-start gap-2">
          <Text className="text-lg font-Urbanist700 text-primary flex-1">
            Amsoil OE Series 0W20 / 5W30 / 5W40 4L Vehicle Servicing Package
          </Text>
          <View className="flex-row gap-1 items-center border-[0.5px] border-primary py-1 px-2 rounded-[4px] bg-light">
            <Feather name="phone" size={14} color={colors.primary} />
            <Text className="text-xs text-primary font-Urbanist600">
              Contact
            </Text>
          </View>
        </View>
        <DottedLine className="mt-2" />
        <View className="p-4 gap-4 ">
          <View className="flex-row items-center gap-2 justify-between">
            <View className='flex-row gap-2 items-center'>
            <ShopIcon />
            <Text className="text-base font-Urbanist600 text-primary">
              A1 Car Service Shop
            </Text>
            </View>
          {item?.status!=="New" && 
          <View className={`flex-row items-center gap-2 px-2 py-1 rounded-[4px] border-[0.5px] ${item?.status === 'In Progress' ?" bg-light border-light_blue":"border-light_green bg-light"}`}>
            {item?.status === "In Progress" ? <EvilIcons name="gear" size={14} color={colors.light_blue} /> : <AntDesign name="check" size={14} color={colors.light_green} />}
            <Text className={`text-xs uppercase  ${item?.status === 'In Progress' ?"text-light_blue":"text-light_green"}`} >{item?.status}</Text>
            </View>}  
          </View>
          <View className="flex-row ">
            <View className="flex-1">
              <Text className="text-sm font-Urbanist600 text-subtle">
                Submitted on
              </Text>
              <Text className="text-base font-Urbanist400 text-gray02">
                2 Dec 2024
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-Urbanist600 text-subtle">
                Estimated Pick-up
              </Text>
              <Text className="text-base font-Urbanist400 text-gray02">
                8 Dec 2024
              </Text>
            </View>
          </View>
          <View className="bg-light flex-row gap-2 px-4 py-2 rounded-[4px]">
            <Text className="text-base font-Urbanist600 text-primary">
              Total Estimated Cost :
            </Text>
            <Text className="text-base font-Urbanist600 text-primary">
              $ 50.00
            </Text>
          </View>
        </View>
        <View className="flex-row border-t border-light">
          <View className="flex-1 justify-center items-center border-r border-light py-2">
            <Button variant="text">{item?.new ? "Approved" :"Contact Service" }</Button>
          </View>
          <View className="flex-1 justify-center items-center py-2">
            <Button
              variant="text"
              onPress={() => item?.new ? console.log('new') : router.push('/car-repair/order-detail')}>
            {item?.new ? "Decline" : " View Details"} 
            </Button>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MyServiceItem
