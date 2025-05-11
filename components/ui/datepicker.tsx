import { Ionicons } from '@expo/vector-icons'
import dayjs from 'dayjs'

import React, { useCallback, useState } from 'react'
import { Pressable, View, ViewProps } from 'react-native'
import FormControl from '../form/FormControl'
import FormLabel from '../form/FormLabel'
import TextInput from './input'
import FormHelperText from '../form/FormHelperText'
import IfElse from './ifElse'
import Calendar from './calendar'

type Props = {
  placeholder: string
  label?: string
  value: Date | null
  maximumDate?: Date | null
  minimumDate?: Date | null
  onChange: (value: Date) => void
  disabled?: boolean
  error?: boolean
  helperText?: string
} & ViewProps
const DatePicker = ({
  placeholder,
  label,
  value,
  onChange,
  disabled = false,
  error = false,
  helperText,
  maximumDate,
  minimumDate,
}: Props) => {
  const [show, setShow] = useState(false)

  const onPressIn = useCallback(() => {
    setShow(true)
  }, [])

  return (
    <>
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <IfElse
          condition={show}
          ifCondition={
            <Calendar
              value={dayjs(new Date()).format('YYYY-MM-DD')}
              onChange={() => setShow(false)}
              onCancel={() => setShow(false)}
            />
          }
          elseCondition={
            <Pressable onPress={onPressIn} disabled={disabled}>
              <View
                pointerEvents="none"
                className={`w-full justify-between h-12 flex-row items-center rounded-lg ${
                  error
                    ? 'border-[2px] border-danger'
                    : 'border border-gray-300'
                }`}>
                <TextInput
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: 14,
                  }}
                  variant="outlined"
                  pointerEvents="none"
                  caretHidden
                  outlineStyle={{ borderColor: 'transparent' }}
                  focusable={false}
                  placeholder={placeholder}
                  //   placeholderTextColor={error ? colors.danger : colors.gray[700]}
                  value={value ? dayjs(value).format('D/MM/YYYY') : ''}
                  disabled={disabled}
                  onPressIn={onPressIn}
                  endIcon={
                    <Ionicons
                      disabled={disabled}
                      onPress={onPressIn}
                      name="calendar-outline"
                      size={16}
                    />
                  }
                />
              </View>
            </Pressable>
          }
        />

        {helperText && (
          <FormHelperText error={error}>{helperText}</FormHelperText>
        )}
      </FormControl>
    </>
  )
}

export default DatePicker
