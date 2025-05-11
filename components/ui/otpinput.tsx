import colors from '@/lib/colors'
import { ReactNode } from 'react'
import { OtpInput } from 'react-native-otp-entry'
import { TextInputProps } from 'react-native-paper'

interface ITextInput extends TextInputProps {
  containerClassName?: string
  variant?: 'default' | 'outlined'
  endIcon?: ReactNode
  error?: boolean
  helperText?: string
}

const OTPInput = ({
  variant = 'default',
  containerClassName,
  helperText,
  error = false,
  className,
  secureTextEntry = false,
  ...props
}: ITextInput) => {
  return (
    <OtpInput
      numberOfDigits={4}
      focusColor="green"
      autoFocus={false}
      hideStick={true}
      placeholder=""
      blurOnFilled={true}
      disabled={false}
      type="numeric"
      secureTextEntry={false}
      focusStickBlinkingDuration={500}
      onFocus={() => console.log('Focused')}
      onBlur={() => console.log('Blurred')}
      onTextChange={props.onChangeText}
      onFilled={(text) => console.log(`OTP is ${text}`)}
      textInputProps={{
        accessibilityLabel: 'One-Time Password',
      }}
      theme={{
        pinCodeContainerStyle: {
          borderWidth: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.border.gray,
          width: 60,
          height: 60,
        },
        focusedPinCodeContainerStyle: {
          borderWidth: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.primary,
          width: 60,
          height: 60,
        },
        filledPinCodeContainerStyle: {
          borderWidth: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.primary,
          width: 60,
          height: 60,
        },
        pinCodeTextStyle: {
          fontSize: 18,
        },
        containerStyle: {
          width: '70%',
          alignSelf: 'center',
        },
      }}
    />
  )
}
export default OTPInput
