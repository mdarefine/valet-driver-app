import React, { forwardRef } from 'react'
import { Platform, TextInputProps, TouchableOpacity, View } from 'react-native'
import { Divider, TextInput as PTextInput } from 'react-native-paper'
import {
  DropdownInputProps,
  DropdownItemProps,
  DropdownProps,
  Dropdown as PDropdown,
} from 'react-native-paper-dropdown'

import { Text } from './text'
import cn from '@/lib/utils'
import colors from '@/lib/colors'
import TextInput from './input'

export interface IDropdown extends Partial<DropdownProps> {
  data?: DropdownProps['options']
  onChange: DropdownProps['onSelect']
  helperText?: string
  asCurrency?: boolean
  inputStyle?: TextInputProps['style']
  multiline?: boolean
}

const Dropdown: React.ForwardRefRenderFunction<any, IDropdown> = (
  {
    options,
    data,
    helperText,
    multiline,
    value,
    onChange,
    asCurrency,
    onSelect,
    menuContentStyle,
    inputStyle,
    ...rest
  },
  ref
) => {
  const CustomDropdownItem = ({
    width,
    option,
    value,
    onSelect,
    toggleMenu,
    isLast,
  }: DropdownItemProps) => {
    return (
      <>
        <TouchableOpacity
          style={{ width }}
          className={cn('px-4 py-2.5 flex-row gap-3 items-center')}
          onPress={() => {
            if (onSelect && option?.value) {
              onSelect(option.value)
            }
            if (toggleMenu) {
              toggleMenu()
            }
          }}>
          <Text
            className={cn(
              `text-base ${value === option?.value ? 'text-primary' : 'text-subtle'}`
            )}>
            {option.label}
          </Text>
        </TouchableOpacity>
        {!isLast && <Divider />}
      </>
    )
  }
  const CustomDropdownInput = ({
    placeholder,
    selectedLabel,
    rightIcon,
    error,
    disabled,
    label,
  }: DropdownInputProps) => {
    
    return (
      <View>
        {label && (
          <Text className="text-base font-Urbanist600 text-primary mb-1">
            {label}
          </Text>
        )}
        <TextInput
          mode="outlined"
          placeholder={placeholder}
          value={selectedLabel}
          right={rightIcon}
          disabled={disabled}
          multiline={multiline}
          outlineStyle={{ borderRadius: 8 }}
          style={[inputStyle, { fontSize: 14, paddingTop: 0, height: 40 }]}
          error={error}
        />
      </View>
    )
  }

  return (
    <PDropdown
      ref={ref}
      options={data || options || []}
      hideMenuHeader
      menuUpIcon={
        <PTextInput.Icon size={18} color={colors.subtle} icon="chevron-up" />
      }
      menuDownIcon={
        <PTextInput.Icon size={18} color={colors.subtle} icon="chevron-down" />
      }
      onSelect={onChange}
      value={value}
      menuContentStyle={{
        backgroundColor: 'white',
        marginTop: Platform.OS === 'ios' ? 68 : 45,
        ...menuContentStyle,
      }}
      CustomDropdownItem={CustomDropdownItem}
      CustomDropdownInput={CustomDropdownInput}
      {...rest}
    />
  )
}

export default forwardRef(Dropdown)
