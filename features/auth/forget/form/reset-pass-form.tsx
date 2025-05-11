import Button from '@/components/ui/button'
import TextInput from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ResetPassRequest, resetPassSchema } from '../types'
import { useMutation } from '@apollo/client'
import { RESET_PASSWORD } from '@/graphql/mutations/auth'
import { Feather } from '@expo/vector-icons'
import colors from '@/lib/colors'
import Toast from 'react-native-toast-message'

const ResetPassForm = () => {
  const router = useRouter()
  const { code } = useLocalSearchParams()
  const [resetPass] = useMutation(RESET_PASSWORD, {
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
  } = useForm<ResetPassRequest>({
    resolver: zodResolver(resetPassSchema),
  })
  const onSubmit = async (data: ResetPassRequest) => {
    await resetPass({
      variables: {
        code: code?.toString() || '',
        password: data?.password,
        passwordConfirmation: data?.confirmPassword,
      },
    }).then((data) => {
      if (data?.data?.resetPassword?.jwt) {
        router.push('/(auth)/(forget)/reset-success')
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
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              placeholder="New Password"
              keyboardType="default"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={!!errors?.password}
              helperText={errors?.password?.message}
              secureTextEntry
              startIcon={
                <Feather name="lock" size={22} color={colors.border.default} />
              }
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              placeholder="Confirm New Password"
              keyboardType="default"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={!!errors?.confirmPassword}
              helperText={errors?.confirmPassword?.message}
              secureTextEntry
              startIcon={
                <Feather name="lock" size={22} color={colors.border.default} />
              }
            />
          )}
        />
      </View>
      <View className="gap-2 w-full mt-5">
        <Button className="py-4" onPress={handleSubmit(onSubmit)}>
          Create
        </Button>
      </View>
    </View>
  )
}

export default ResetPassForm
