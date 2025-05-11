import Button from '@/components/ui/button'
import CheckboxButton from '@/components/ui/checkbox-button'
import TextInput from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { LoginRequest, loginSchema } from '../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'expo-router'
import { ApolloError, useMutation } from '@apollo/client'
import { LOGIN } from '@/graphql/mutations/auth'
import useSession from '@/store/useSession'
import { Feather, Fontisto } from '@expo/vector-icons'
import colors from '@/lib/colors'
import Toast from 'react-native-toast-message'
import { useState } from 'react'

const LoginForm = () => {
  const [login, { loading }] = useMutation(LOGIN, {
    onError: (err) => {
      Toast.show({
        type: 'error',
        text1: (
          err.graphQLErrors?.[0]?.extensions?.error as { message?: string }
        )?.message,
      })
    },
  })
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const session = useSession()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginRequest) => {
    try {
      const result = await login({
        variables: {
          input: {
            identifier: data.identifier,
            password: data.password,
            provider: 'local',
          },
        },
      })
      console.log('result', result)

      const jwt = result?.data?.login?.jwt
      if (jwt) {
        session.updateToken(jwt)
        session.updateIsLoggedIn(true)
      }
    } catch (err) {
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
    }
  }

  return (
    <View className="w-full gap-20 ">
      <View className="gap-4 w-full">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="identifier"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
              value={value}
              variant="outlined"
              onChangeText={onChange}
              onBlur={onBlur}
              error={!!errors?.identifier}
              helperText={errors?.identifier?.message}
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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              placeholder="Password"
              keyboardType="default"
              value={value}
              variant="outlined"
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

        <View className="flex-row w-full items-center justify-between">
          <CheckboxButton
            checked={rememberMe}
            onPress={() => setRememberMe((prev) => !prev)}
            color={colors.primary}
            size={20}>
            <View className="flex-row">
              <Text className="text-sm font-Urbanist500 text-subtle">
                Remember Me
              </Text>
            </View>
          </CheckboxButton>
          <Link
            href={'/(auth)/(forget)/enter-otp'}
            className="text-primary font-Urbanist500 text-sm">
            Forget Password?
          </Link>
        </View>
      </View>
      <View className="gap-2 w-full">
        <Button
          className="py-4"
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}
          testID="login-button">
          Login
        </Button>
        <View className="flex-row items-center justify-center gap-2">
          <Text className="text-sm font-Urbanist700 text-border-default">
            Don't have account?
          </Text>
          <Link
            href={'/(auth)/(sign-up)/sign-up'}
            className="text-sm text-primary font-Urbanist700">
            Sign up here
          </Link>
        </View>
      </View>
    </View>
  )
}

export default LoginForm
