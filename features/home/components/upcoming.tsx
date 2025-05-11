import { View } from 'react-native'
import React from 'react'
import UpcomingItem from './upcomingItem'
import CarIcon from '@/assets/svgs/home/CarIcon'
import PlanIcon from '@/assets/svgs/home/PlanIcon'

const Upcoming = () => {
  return (
    <View className="gap-2">
      <UpcomingItem
        title="Car Inspection"
        value="Tomorrow, 10:00 AM"
        icon={<PlanIcon />}
        onPress={() => {}}
      />
      <UpcomingItem
        title="Buyer Viewing"
        value="Saturday, 2:30 PM"
        icon={<CarIcon />}
        onPress={() => {}}
      />
    </View>
  )
}

export default Upcoming
