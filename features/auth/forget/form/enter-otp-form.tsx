import Button from '@/components/ui/button'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { OTPRequest, otpSchema } from '../types'
import OTPInput from '@/components/ui/otpinput'
import { Text } from '@/components/ui/text'
import { ApolloError, useMutation } from '@apollo/client'
import { RESEND_OTP, VERIFY_OTP } from '@/graphql/mutations/auth'
import Toast from 'react-native-toast-message'
import useCountdown from '@/hooks/useCountdown'

const EnterOTPForm = () => {
  const router = useRouter()
  const { email } = useLocalSearchParams()
  const { restart, formattedTime } = useCountdown(60)
  const [verifyOtp] = useMutation(VERIFY_OTP, {
    onError: (err) => {
      Toast.show({
        type: 'error',
        text1: (
          err.graphQLErrors?.[0]?.extensions?.error as { message?: string }
        )?.message,
      })
    },
  })
  const [resend] = useMutation(RESEND_OTP, {
    onError: (err) => {
      Toast.show({
        type: 'error',
        text1: (
          err.graphQLErrors?.[0]?.extensions?.error as { message?: string }
        )?.message,
      })
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<OTPRequest>({
    resolver: zodResolver(otpSchema),
  })
  const onSubmit = async (data: OTPRequest) => {
    await verifyOtp({
      variables: {
        input: {
          identifier: email?.toString() || '',
          otpCode: data?.otp || '',
        },
      },
    })
      .then((result) => {
        router.push({
          pathname: '/(auth)/(forget)/reset-pass',
          params: {
            email: email,
            code: result.data?.verifyOtp?.data?.code,
          },
        })
      })
      .catch((err) => {
        console.log('Full Error Object:', JSON.stringify(err, null, 2))
        if (err instanceof ApolloError) {
          console.log('ApolloError details:', {
            message: err.message,
            graphQLErrors: err.graphQLErrors,
            networkError: err.networkError,
          })
        } else {
          console.log('Unexpected error:', err)
        }
      })
  }
  const handleResend = async () => {
    await resend({
      variables: {
        input: {
          identifier: email?.toString() || '',
        },
      },
    }).then((data) => {
      if (data?.data?.resendOtp?.data?.sent) {
        restart(60)
        Toast.show({
          type: 'success',
          text1: 'OTP sent successfully',
        })
      }
      console.log('data', data?.data)
    })
  }

  return (
    <View className="w-full gap-6">
      <View className="gap-4 w-full">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="otp"
          render={({ field: { onChange, onBlur, value } }) => (
            <OTPInput
              error={!!errors?.otp}
              helperText={errors?.otp?.message}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
      <Text className="text-center text-base font-Urbanist400">
        Code expires In :
        <Text className="text-[#EB5656] text-base font-Urbanist400">
          {' '}
          {formattedTime}
        </Text>
      </Text>
      <View className="gap-2 w-full mt-5">
        <Button className="py-4" onPress={handleSubmit(onSubmit)}>
          Reset Password
        </Button>
        <View className="flex-row items-center justify-center gap-2">
          <Text className="text-sm font-Urbanist700 text-border-default">
            Didn't get OTP?
          </Text>
          <Button
            className="p-0 text-sm"
            variant="outlined"
            onPress={handleResend}>
            Resend OTP
          </Button>
        </View>
      </View>
    </View>
  )
}

export default EnterOTPForm
