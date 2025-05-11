import Feather from '@expo/vector-icons/Feather'
import { ReactNode, useCallback, useState } from 'react'
import { View } from 'react-native'
import {
  DefaultTheme,
  TextInput as PTextInput,
  TextInputProps,
  useTheme,
} from 'react-native-paper'
import FormHelperText from '../form/FormHelperText'
import FormControl from '../form/FormControl'
import colors from '@/lib/colors'
import fonts from '@/lib/fonts'
import cn from '@/lib/utils'

interface ITextInput extends TextInputProps {
  containerClassName?: string
  variant?: 'default' | 'outlined' | 'white' | 'bordered'
  startIcon?: ReactNode
  endIcon?: ReactNode
  error?: boolean
  helperText?: string

  height?: number
}

const TextInput = ({
  variant = 'outlined',
  containerClassName,
  helperText,
  error = false,
  className,
  startIcon,
  endIcon,
  secureTextEntry = false,

  height = 50,
  ...props
}: ITextInput) => {
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState<boolean>(secureTextEntry)

  const toggleShowPassword = useCallback(() => {
    setShowPassword((s) => !s)
  }, [])

  return (
    <FormControl className={cn(`w-full`, containerClassName)}>
      <PTextInput
        textAlignVertical={props?.multiline ? 'top' : 'auto'}
        mode="outlined"
        cursorColor={colors.primary}
        outlineColor={colors.border.default}
        activeOutlineColor={colors.border.selected}
        placeholderTextColor={props.placeholderTextColor || colors.placeholder}
        textColor="black"
        className={cn(
          `rounded-lg px-4 py-4 ${variant === 'default' ? 'bg-input-gray' : ''}`,
          className
        )}
        error={error}
        secureTextEntry={showPassword}
        left={
          props?.left
            ? props.left
            : startIcon && (
                <PTextInput.Icon
                  icon={() => startIcon}
                  color={colors.input.outlined}
                />
              )
        }
        right={
          secureTextEntry ? (
            <PTextInput.Icon
              onPress={toggleShowPassword}
              icon={showPassword ? 'eye-off' : 'eye'}
              color={colors.input.outlined}
            />
          ) : props?.right ? (
            props.right
          ) : (
            <PTextInput.Icon
              icon={() => endIcon}
              color={colors.input.outlined}
            />
          )
        }
        style={{
          includeFontPadding: false,
          fontSize: 14,
          fontFamily: fonts.Urbanist500,
          height: height,
        }}
        theme={{
          ...DefaultTheme,
          colors: {
            background:
              variant === 'default'
                ? colors.input.gray
                : variant === 'white'
                  ? 'white'
                  : 'transparent',
          },
          fonts: {
            bodyLarge: {
              ...theme.fonts.bodyLarge,
              fontFamily: fonts.Urbanist400,
            },
          },
        }}
        outlineStyle={{
          borderWidth: variant === 'outlined' || variant === 'bordered' ? 1 : 0,
          borderColor: variant === 'bordered' ? '#E5E7EB' : colors.border.default,
          borderRadius: 8,
        }}
        {...props}
      />

      {helperText && (
        <View className="flex-row gap-1 items-start mt-1.5">
          <Feather
            name="info"
            size={10}
            color={colors.danger}
            className="mt-[2px]"
          />
          <FormHelperText className="text-xs font-Urbanist400" error={error}>
            {helperText}
          </FormHelperText>
        </View>
      )}
    </FormControl>
  )
}

export default TextInput
