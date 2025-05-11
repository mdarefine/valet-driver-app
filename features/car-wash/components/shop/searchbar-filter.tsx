import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Modal,
  TextInput as RNTextInput,
} from 'react-native'
import TextInput from '@/components/ui/input'
import colors from '@/lib/colors'
import SearchIcon from '@/assets/svgs/home/SearchIcon'
import FilterIcon from '@/assets/svgs/FilterIcon'
import { Text } from '@/components/ui/text'

type FilterCategoryButtonProps = {
  title: string
  selected: boolean
  onPress: () => void
}

const FilterCategoryButton = ({
  title,
  selected,
  onPress,
}: FilterCategoryButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border rounded-full py-2 px-4 mr-2 mb-3 ${selected ? 'bg-primary border-primary' : 'border-gray-200'}`}>
      <Text className={`text-sm ${selected ? 'text-white' : 'text-black'}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const SearchbarFilter = () => {
  const [filterVisible, setFilterVisible] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      )
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const handleSelectAll = () => {
    if (selectedCategories.length === categories.length) {
      setSelectedCategories([])
    } else {
      setSelectedCategories(categories.map((cat) => cat))
    }
  }

  const categories = [
    'Interior Accessories',
    'Exterior Accessories',
    'Tech & Electronics',
    'Safety & Security',
    'Performance & Maintenance',
    'Travel & Utility',
    'Car Care & Cleaning',
    'Travel & Utility',
  ]

  return (
    <View className="flex-row items-center gap-3">
      <TextInput
        placeholder="All Accessories"
        containerClassName="flex-1 bg-input-gray rounded-xl"
        variant="default"
        height={46}
        placeholderTextColor={colors.text.gray[40]}
        startIcon={<SearchIcon />}
      />
      <TouchableOpacity onPress={() => setFilterVisible(true)}>
        <FilterIcon />
      </TouchableOpacity>

      <Modal
        visible={filterVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFilterVisible(false)}>
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl p-5 pt-3">
            <View className="w-10 h-1 bg-gray-200 rounded-full self-center mb-4" />

            <Text className="text-xl font-semibold text-black text-center mb-5">
              Filter
            </Text>

            <View className="mb-6">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-base font-semibold text-black">
                  Categories
                </Text>
                <TouchableOpacity onPress={handleSelectAll}>
                  <Text className="text-sm text-primary font-medium">
                    Select All
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row flex-wrap">
                {categories.map((category, index) => (
                  <FilterCategoryButton
                    key={index}
                    title={category}
                    selected={selectedCategories.includes(category)}
                    onPress={() => toggleCategory(category)}
                  />
                ))}
              </View>
            </View>

            <View className="mb-6">
              <Text className="text-base font-semibold text-black mb-3">
                Budget Range
              </Text>
              <View className="flex-row items-center">
                <View className="flex-1 border border-gray-200 rounded-lg px-3 h-12 justify-center">
                  <RNTextInput
                    className="text-sm"
                    placeholder="Min"
                    value={minPrice}
                    onChangeText={setMinPrice}
                    keyboardType="numeric"
                  />
                </View>
                <Text className="mx-3 text-black">—</Text>
                <View className="flex-1 border border-gray-200 rounded-lg px-3 h-12 justify-center">
                  <RNTextInput
                    className="text-sm"
                    placeholder="Max"
                    value={maxPrice}
                    onChangeText={setMaxPrice}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>

            <View className="flex-row justify-between mb-2">
              <TouchableOpacity
                className="flex-1 h-[50px] border border-gray-200 rounded-lg justify-center items-center mr-2"
                onPress={() => setFilterVisible(false)}>
                <Text className="text-base font-medium text-black">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-1 h-[50px] bg-primary rounded-lg justify-center items-center"
                onPress={() => setFilterVisible(false)}>
                <Text className="text-base font-medium text-white">Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default SearchbarFilter
