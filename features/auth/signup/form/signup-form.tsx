import Button from '@/components/ui/button'
import CheckboxButton from '@/components/ui/checkbox-button'
import TextInput from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, router } from 'expo-router'
import { SignupRequest, signupSchema } from '../types'
import { ApolloError, useMutation } from '@apollo/client'
import { REGISTER } from '@/graphql/mutations/auth'
import { Feather, Fontisto } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { useState } from 'react'

const SignUpForm = () => {
  const [terms, setTerms] = useState<boolean>(false)
  const [register, { loading }] = useMutation(REGISTER, {
    onError: (err) => {
      console.log(
        'error',
        (err.graphQLErrors?.[0]?.extensions?.error as { message?: string })
          ?.message
      )
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupRequest>({
    resolver: zodResolver(signupSchema),
  })
  const onSubmit = async (data: SignupRequest) => {
    console.log('data', data)
    try {
      await register({
        variables: {
          input: {
            email: data.email,
            password: data.password,
            username: data.email,
            role: 'Car Owner',
          },
        },
      }).then((data) => {
        console.log('data', data.data?.register?.user?.email)
        if (data.data?.register?.user?.email) {
          router.push({
            pathname: '/(auth)/(sign-up)/verify-otp',
            params: {
              email: data.data?.register?.user?.email,
            },
          })
        }
      })
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
    <View className="w-full gap-20">
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

        <View className="flex-row w-full items-center">
          <CheckboxButton
            checked={terms}
            onPress={() => setTerms((prev) => !prev)}
            color={colors.primary}
            size={20}>
            <View className="flex-row">
              <Text className="text-sm font-Urbanist500">
                I’m agree to The Terms of Service and Privacy Policy
              </Text>
            </View>
          </CheckboxButton>
        </View>
      </View>
      <View className="gap-2 w-full">
        <Button
          className="py-4"
          onPress={handleSubmit(onSubmit)}
          disabled={!terms || loading}>
          Sign Up
        </Button>
        <View className="flex-row items-center justify-center gap-2">
          <Text className="text-sm font-Urbanist700 text-border-default">
            Already have an account?
          </Text>
          <Link
            href={'/(auth)/login'}
            className="text-primary font-Urbanist700 text-sm">
            Sign In
          </Link>
        </View>
      </View>
    </View>
  )
}

export default SignUpForm
