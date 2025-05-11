import React, { ReactNode, useCallback, useState } from 'react'
import { Modal, TouchableOpacity, View, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Text } from './text'
import FormHelperText from '../form/FormHelperText'
import FormControl from '../form/FormControl'
import colors from '@/lib/colors'
import fonts from '@/lib/fonts'
import cn from '@/lib/utils'
import Button from './button'

export type SelectOption = {
  label: string
  value: string
}

interface ISelect {
  containerClassName?: string
  className?: string
  variant?: 'default' | 'outlined' | 'white' | 'bordered'
  startIcon?: ReactNode
  endIcon?: ReactNode
  error?: boolean
  helperText?: string
  placeholder?: string
  value?: string
  options: SelectOption[]
  onChange: (value: string) => void
  label?: string
}

const Select = ({
  variant = 'outlined',
  containerClassName,
  className,
  helperText,
  error = false,
  startIcon,
  endIcon,
  placeholder = 'Select an option',
  value,
  options,
  onChange,
  label,
}: ISelect) => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleOpen = useCallback(() => {
    setModalVisible(true)
  }, [])

  const handleClose = useCallback(() => {
    setModalVisible(false)
  }, [])

  const handleSelect = useCallback((option: SelectOption) => {
    onChange(option.value)
    setModalVisible(false)
  }, [onChange])

  const selectedOption = options.find(option => option.value === value)

  return (
    <FormControl className={cn(`w-full`, containerClassName)}>
      {label && (
        <Text className="text-primary font-Urbanist600 text-base mb-2">
          {label}
        </Text>
      )}
      
      <TouchableOpacity
        onPress={handleOpen}
        className={cn(
          `flex-row justify-between items-center p-3 border rounded-lg`,
          variant === 'outlined' ? 'border-border-default' : 
            variant === 'bordered' ? 'border-gray-200' : 'border-transparent',
          variant === 'default' ? 'bg-input-gray' : '',
          variant === 'white' ? 'bg-white' : '',
          error ? 'border-danger' : '',
          className
        )}
      >
        {startIcon && <View className="mr-2">{startIcon}</View>}
        
        <View className="flex-1">
          <Text 
            className={cn(
              "font-Urbanist500 text-sm",
              selectedOption ? "text-default" : "text-placeholder"
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </Text>
        </View>
        
        {endIcon || <AntDesign name="down" size={16} color={colors.subtitle} />}
      </TouchableOpacity>

      {helperText && (
        <View className="flex-row gap-1 items-start mt-1.5">
          <AntDesign
            name="infocirlceo"
            size={10}
            color={error ? colors.danger : colors.subtle}
            style={{ marginTop: 2 }}
          />
          <FormHelperText className="text-xs font-Urbanist400" error={error}>
            {helperText}
          </FormHelperText>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View className="flex-1 justify-end bg-black bg-opacity-50">
          <View className="bg-white rounded-t-xl p-4 max-h-[70%]">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-Urbanist600">Select an option</Text>
              <TouchableOpacity onPress={handleClose}>
                <AntDesign name="close" size={24} color={colors.default} />
              </TouchableOpacity>
            </View>
            
            <ScrollView className="mb-4">
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  onPress={() => handleSelect(option)}
                  className={cn(
                    "p-3 border-b border-gray-200",
                    option.value === value ? "bg-tertiary" : ""
                  )}
                >
                  <Text 
                    className={cn(
                      "font-Urbanist500",
                      option.value === value ? "text-primary" : "text-default"
                    )}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            
            <View className="flex-row justify-end space-x-2">
              <Button variant="text" onPress={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" onPress={handleClose}>
                Done
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </FormControl>
  )
}

export default Select
