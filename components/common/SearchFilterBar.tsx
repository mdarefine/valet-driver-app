import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '@/components/ui/text';
import colors from '@/lib/colors';

interface SearchFilterBarProps {
  onSearch: (text: string) => void;
  onFilter: (filters: any) => void;
  placeholder?: string;
  initialSearchValue?: string;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  onSearch,
  onFilter,
  placeholder = "Search",
  initialSearchValue = "",
}) => {
  const [searchText, setSearchText] = useState(initialSearchValue);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(null);

  const handleSearch = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  const handleFilterPress = () => {
    setShowFilterModal(true);
  };

  const handleFilterApply = () => {
    const filters = {
      date: selectedDate
    };
    console.log("Applied filters:", filters);
    onFilter(filters);
    setShowFilterModal(false);
  };

  const handleDateSelect = (date: Date) => {
    setTempSelectedDate(date);
  };
  
  const handleDateConfirm = () => {
    if (tempSelectedDate) {
      setSelectedDate(tempSelectedDate);
    }
    setShowDatePicker(false);
  };
  
  const handleDateCancel = () => {
    setTempSelectedDate(selectedDate);
    setShowDatePicker(false);
  };
  
  // Generate some dates for selection
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = -10; i < 20; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center bg-gray-100 rounded-md px-3 flex-1 mr-1">
        <Ionicons name="search" size={24} color={colors.subtle} />
        <TextInput
          className="flex-1 ml-2 text-base"
          placeholder={placeholder}
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <TouchableOpacity onPress={handleFilterPress}>
        <Ionicons name="filter-outline" size={24} color={colors.default} />
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFilterModal}
        onRequestClose={() => setShowFilterModal(false)}
      >
        <View className="flex-1 justify-end bg-black/30">
          <View className="bg-white rounded-t-3xl">
            <View className="p-5 border-b border-gray-100">
              <Text className="text-xl font-bold text-center">Filter</Text>
            </View>
            
            <View className="p-5">
              <Text className="text-base font-medium mb-2">Date</Text>
              <Pressable 
                className="border border-gray-200 rounded-md p-3 flex-row justify-between items-center"
                onPress={() => setShowDatePicker(true)}
              >
                <Text className="text-gray-500">
                  {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
                </Text>
                <Ionicons name="calendar-outline" size={20} color={colors.primary} />
              </Pressable>
            </View>
            
            {/* Custom Date Picker Modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={showDatePicker}
              onRequestClose={handleDateCancel}
            >
              <View className="flex-1 justify-end bg-black/30">
                <View className="bg-white rounded-t-3xl">
                  <View className="p-4 border-b border-gray-100 flex-row justify-between items-center">
                    <Text className="text-xl font-bold">Select Date</Text>
                    <TouchableOpacity onPress={handleDateCancel}>
                      <Ionicons name="close" size={24} color={colors.subtle} />
                    </TouchableOpacity>
                  </View>
                  
                  <ScrollView className="max-h-72 p-2">
                    {generateDates().map((date, index) => {
                      const isSelected = tempSelectedDate ? 
                        date.toDateString() === tempSelectedDate.toDateString() : false;
                      
                      return (
                        <Pressable 
                          key={index}
                          className={`p-4 border-b border-gray-100 ${isSelected ? 'bg-blue-50' : ''}`}
                          onPress={() => handleDateSelect(date)}
                        >
                          <Text 
                            className={`text-base ${isSelected ? 'font-bold text-primary' : ''}`}
                          >
                            {date.toDateString()}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </ScrollView>
                  
                  <View className="flex-row p-4 border-t border-gray-100">
                    <Pressable 
                      className="flex-1 py-3 border border-gray-300 rounded-md mr-2"
                      onPress={handleDateCancel}
                    >
                      <Text className="text-center font-medium">Cancel</Text>
                    </Pressable>
                    <Pressable 
                      className="flex-1 py-3 bg-primary rounded-md ml-2"
                      onPress={handleDateConfirm}
                    >
                      <Text className="text-center font-medium text-white">Confirm</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
            
            <View className="flex-row p-4 border-t border-gray-100">
              <Pressable 
                className="flex-1 py-3 border border-gray-300 rounded-md mr-2"
                onPress={() => setShowFilterModal(false)}
              >
                <Text className="text-center font-medium">Cancel</Text>
              </Pressable>
              <Pressable 
                className="flex-1 py-3 bg-primary rounded-md ml-2"
                onPress={handleFilterApply}
              >
                <Text className="text-center font-medium text-white">Apply</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchFilterBar;
