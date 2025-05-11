import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import colors from '@/lib/colors'

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChangePassword = () => {
    // Implement actual password change logic here
    router.back()
  }

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      {/* Custom Header with Back Button */}
      <View className="flex-row items-center px-4 py-3 bg-primary">
        <Ionicons 
          name="chevron-back" 
          size={24} 
          color={colors.textwhite} 
          onPress={() => router.back()} 
        />
        <Text className="flex-1 text-base font-semibold text-textwhite ml-2">
          Change Password
        </Text>
      </View>

      <ScrollView className="flex-1 bg-white px-4 py-6">
        {/* Current Password */}
        <View className="mb-4">
          <TextInput
            className="border border-[#E0E0E0] rounded-md px-3 py-2.5"
            placeholder="Current Password"
            secureTextEntry={!showCurrentPassword}
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <TouchableOpacity 
            className="absolute right-3 top-3"
            onPress={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            <Ionicons 
              name={showCurrentPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={colors.subtle} 
            />
          </TouchableOpacity>
        </View>

        {/* New Password */}
        <View className="mb-4">
          <TextInput
            className="border border-[#E0E0E0] rounded-md px-3 py-2.5"
            placeholder="New password"
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity 
            className="absolute right-3 top-3"
            onPress={() => setShowNewPassword(!showNewPassword)}
          >
            <Ionicons 
              name={showNewPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={colors.subtle} 
            />
          </TouchableOpacity>
        </View>

        {/* Confirm New Password */}
        <View className="mb-4">
          <TextInput
            className="border border-[#E0E0E0] rounded-md px-3 py-2.5"
            placeholder="Re-type new password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity 
            className="absolute right-3 top-3"
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons 
              name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={colors.subtle} 
            />
          </TouchableOpacity>
        </View>

        {/* Password Requirements Text */}
        <Text className="text-xs text-subtle mb-8">
          Password must be min. 8 characters with a combination of letters & numbers.
        </Text>

        {/* Submit Button */}
        <TouchableOpacity 
          className="bg-primary rounded-md py-3 items-center"
          onPress={handleChangePassword}
        >
          <Text className="text-white font-medium">Update Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChangePassword
