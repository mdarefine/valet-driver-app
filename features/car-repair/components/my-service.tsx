import { View } from 'react-native'
import React from 'react'
import TextInput from '@/components/ui/input'
import SearchIcon from '@/assets/svgs/home/SearchIcon'
import colors from '@/lib/colors'
import FilterIcon from '@/assets/svgs/FilterIcon'
import { FlashList } from '@shopify/flash-list'
import MyServiceItem from './my-service-item'

const data = [
  {
    id: 1,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:true,
    status:"New"
  },
  {
    id: 2,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:false,
    status:"Confirmed"
  },
  {
    id: 3,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:false,
    status:"In Progress"
  },
  {
    id: 4,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:false,
    status:"Completed"
  },
  {
    id: 5,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:false,
     status:"Completed"
  },
  {
    id: 6,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:false,
     status:"Completed"
  },
  {
    id: 7,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
     status:"Completed",
    new:false
  },
  {
    id: 8,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
     status:"Completed",
    new:false
  },
  {
    id: 9,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:false,
     status:"Completed"
  },
  {
    id: 10,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:false,
     status:"Completed"
  },
  {
    id: 11,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:false,
     status:"Completed"
  },
  {
    id: 12,
    name: 'Mika Car Wash',
    address: '123 Main St, City',
    rating: '4.5',
    new:false,
     status:"Completed"
  },
]
const MyService = () => {
  return (
    <View className="flex-1 mx-4">
      <View className="mt-4 w-full flex-row items-center gap-3 py-4">
        <TextInput
          placeholder="Search"
          containerClassName="flex-1 bg-input-gray rounded-xl "
          variant="default"
          height={40}
          placeholderTextColor={colors.text.gray[40]}
          startIcon={<SearchIcon />}
        />
        <FilterIcon />
      </View>

      <FlashList
        data={data}
        estimatedItemSize={200}
        renderItem={({ item }) => <MyServiceItem item={item}/>}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </View>
  )
}

export default MyService
