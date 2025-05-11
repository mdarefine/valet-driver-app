import Button from '@/components/ui/button'
import TextInput from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router'
import { ForgetPassRequest, forgetPassSchema } from '../types'
import { useMutation } from '@apollo/client'
import { FORGOT_PASSWORD } from '@/graphql/mutations/auth'
import { Fontisto } from '@expo/vector-icons'
import colors from '@/lib/colors'
import Toast from 'react-native-toast-message'

const ForgetPassForm = () => {
  const router = useRouter()
  const [forgot, { loading, error }] = useMutation(FORGOT_PASSWORD, {
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
  } = useForm<ForgetPassRequest>({
    resolver: zodResolver(forgetPassSchema),
  })
  const onSubmit = async (data: ForgetPassRequest) => {
    await forgot({
      variables: {
        email: data?.email,
      },
    }).then((result) => {
      if (result?.data?.forgotPassword?.ok) {
        router.push({
          pathname: '/(auth)/(forget)/enter-otp',
          params: {
            email: data?.email,
          },
        })
      }
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
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={!!errors?.email}
              helperText={errors?.email?.message}
              startIcon={
                <Fontisto
                  name="email"
                  size={22}
                  color={colors.border.default}
                />
              }
            />
          )}
        />
      </View>
      <View className="gap-2 w-full mt-10">
        <Button
          className="py-4"
          isLoading={loading}
          onPress={handleSubmit(onSubmit)}>
          Continue
        </Button>
      </View>
    </View>
  )
}

export default ForgetPassForm
