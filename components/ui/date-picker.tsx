import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/lib/colors';
import { Text } from '@/components/ui/text';

type DatePickerProps = {
  initialMonth?: string;
  initialYear?: string;
  initialDate?: number | null;
  onDateChange?: (date: number | null) => void;
};

const DatePicker = ({
  initialMonth = 'Aug',
  initialYear = '2023',
  initialDate = null,
  onDateChange
}: DatePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  const [currentYear, setCurrentYear] = useState(initialYear);
  const [selectedDate, setSelectedDate] = useState<number | null>(initialDate);
  const [showCalendar, setShowCalendar] = useState(true);

  // Available months for selection
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonthIndex = months.indexOf(currentMonth);

  const previousMonth = () => {
    const newIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
    setCurrentMonth(months[newIndex]);
    if (newIndex === 11 && currentMonthIndex === 0) {
      setCurrentYear((parseInt(currentYear) - 1).toString());
    }
    // Reset selected date when changing month
    updateSelectedDate(null);
  };

  const nextMonth = () => {
    const newIndex = currentMonthIndex === 11 ? 0 : currentMonthIndex + 1;
    setCurrentMonth(months[newIndex]);
    if (newIndex === 0 && currentMonthIndex === 11) {
      setCurrentYear((parseInt(currentYear) + 1).toString());
    }
    // Reset selected date when changing month
    updateSelectedDate(null);
  };

  const previousYear = () => {
    setCurrentYear((parseInt(currentYear) - 1).toString());
    // Reset selected date when changing year
    updateSelectedDate(null);
  };

  const nextYear = () => {
    setCurrentYear((parseInt(currentYear) + 1).toString());
    // Reset selected date when changing year
    updateSelectedDate(null);
  };

  const handleDateClick = (day: number, isCurrent: boolean) => {
    if (isCurrent) {
      updateSelectedDate(day);
    }
  };

  const updateSelectedDate = (date: number | null) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  const clearCalendarSelection = () => {
    updateSelectedDate(null);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  const confirmCalendarSelection = () => {
    setShowCalendar(false);
  };

  // Generate calendar data based on current month and year
  const generateCalendarDays = () => {
    const firstDayOfMonth = new Date(parseInt(currentYear), currentMonthIndex, 1).getDay();
    const daysInMonth = new Date(parseInt(currentYear), currentMonthIndex + 1, 0).getDate();
    const daysInPrevMonth = new Date(parseInt(currentYear), currentMonthIndex, 0).getDate();
    
    const days = [];
    
    // Previous month days
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ 
        day: daysInPrevMonth - firstDayOfMonth + i + 1, 
        current: false 
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ 
        day: i, 
        current: true, 
        selected: i === selectedDate 
      });
    }
    
    // Next month days
    const remainingCells = 42 - days.length; // 6 rows of 7 days
    for (let i = 1; i <= remainingCells; i++) {
      days.push({ 
        day: i, 
        current: false 
      });
    }
    
    return days;
  };

  // Calendar data
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const calendarDays = generateCalendarDays();

  return (
    <View 
      className="border rounded-md p-4" 
      style={{ borderColor: colors.border.gray }}
    >
      {/* Month and Year selector */}
      <View className="flex-row justify-between mb-4">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={previousMonth}>
            <Ionicons name="chevron-back" size={20} color={colors.primary} />
          </TouchableOpacity>
          <Text className="font-medium mx-2" style={{ color: colors.primary }}>{currentMonth}</Text>
          <TouchableOpacity onPress={nextMonth}>
            <Ionicons name="chevron-forward" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity onPress={previousYear}>
            <Ionicons name="chevron-back" size={20} color={colors.primary} />
          </TouchableOpacity>
          <Text className="font-medium mx-2" style={{ color: colors.primary }}>{currentYear}</Text>
          <TouchableOpacity onPress={nextYear}>
            <Ionicons name="chevron-forward" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Week days */}
      <View className="flex-row justify-between mb-2">
        {weekDays.map((day, index) => (
          <Text key={index} className="font-medium text-center w-8" style={{ color: colors.primary }}>
            {day}
          </Text>
        ))}
      </View>
      
      {/* Calendar days */}
      <View className="flex-row flex-wrap">
        {calendarDays.map((day, index) => (
          <TouchableOpacity 
            key={index} 
            className={`w-8 h-8 justify-center items-center my-1 mx-[4.5px] ${day.selected ? 'rounded-full' : ''}`}
            style={day.selected ? { backgroundColor: colors.primary } : {}}
            onPress={() => handleDateClick(day.day, day.current)}
            disabled={!day.current}
          >
            <Text style={{
              color: day.selected ? colors.textwhite : day.current ? colors.primary : colors.gray01
            }}>
              {day.day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Action buttons */}
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity onPress={clearCalendarSelection}>
          <Text style={{ color: colors.primary }}>Clear</Text>
        </TouchableOpacity>
        <View className="flex-row">
          <TouchableOpacity onPress={closeCalendar} className="mr-4">
            <Text style={{ color: colors.primary }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={confirmCalendarSelection}>
            <Text className="font-medium" style={{ color: colors.primary }}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DatePicker;
