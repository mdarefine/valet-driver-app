import React, { useState } from 'react'
import { View } from 'react-native'
import { DateData, Calendar as RNCalendar } from 'react-native-calendars'
import Button from './button'
import dayjs from 'dayjs'
import colors from '@/lib/colors'
import fonts from '@/lib/fonts'
import { Text } from './text'

type CalendarProps = {
  value: string
  onChange: (value: string) => void
  onCancel: () => void
}
const Calendar = ({ value, onChange, onCancel }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).format('YYYY-MM-DD')
  )
  const [current, setCurrent] = useState(dayjs().format('YYYY-MM-DD'))

  const handleDayPress = (day: DateData) => {
    setSelectedDate(day.dateString)
    console.log('Selected Date:', day.dateString)
  }

  const handleClear = () => {
    onCancel()
  }

  const handleOk = () => {
    onChange(selectedDate)
    // setCurrent('2024-11-01')
  }

  return (
    <View className="p-4 w-full border border-gray-300 rounded-xl bg-transparent">
      <RNCalendar
        onDayPress={handleDayPress}
        current={current}
        key={current}
        disableMonthChange={true}
        theme={{
          arrowColor: colors.primary,
          calendarBackground: 'transparent',
          dayTextColor: colors.dayText,
          monthTextColor: colors.primary,
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.textwhite,
          selectedDotColor: colors.primary,
          todayTextColor: colors.primary,
          textSectionTitleColor: colors.primary,
          textDisabledColor: colors.textdisable,
          textSectionTitleDisabledColor: colors.primary,
          textDayFontFamily: fonts.Urbanist400,
          textMonthFontFamily: fonts.Urbanist400,
          textDayFontSize: 14,
          textMonthFontSize: 14,
          textDayFontWeight: 400,
          textMonthFontWeight: 500,
          textDayHeaderFontSize: 14,
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: colors.primary,
            selectedTextColor: '#ffffff',
          },
        }}
        renderHeader={(date: string) => {
          return <Text>{dayjs(date).format('MMM')}</Text>
        }}
      />

      {/* Clear and OK Buttons */}
      <View className="flex flex-row justify-between mt-4">
        <Button variant="pale" onPress={handleClear}>
          Clear
        </Button>
        <View className="flex flex-row items-center space-x-2">
          <Button variant="pale" onPress={handleOk}>
            Cancel
          </Button>
          <Button variant="pale" onPress={handleOk}>
            OK
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Calendar
