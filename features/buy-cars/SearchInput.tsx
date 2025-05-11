import React from 'react'
import { View } from 'react-native'
import TextInput from '@/components/ui/input'
import colors from '@/lib/colors'
import SearchIcon from '@/assets/svgs/home/SearchIcon'
import FilterIcon from '@/assets/svgs/FilterIcon'

const SearchInput = () => {
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
      <FilterIcon />
    </View>
  )
}

export default SearchInput