import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/common/Header'
import colors from '@/lib/colors'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

interface ProfileOption {
  id: string
  title: string
  icon: React.ReactNode
  route?: string
  action?: () => void
  danger?: boolean
}

const Profile = () => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false)

  // Mock user data
  const userData = {
    name: 'David Russel',
    email: 'davidrussel@gmail.com',
    phone: '+65 1234 5678',
    address: 'Okopowa 11/72, 01-042 Warszawa',
    joinedDate: 'Jan 15, 2023'
  }

  const handleLogout = () => {
    // Implement actual logout logic here
    setLogoutModalVisible(false)
    // Navigate to login screen or perform other logout actions
  }

  const profileOptions: ProfileOption[] = [
    {
      id: 'personal-info',
      title: 'Personal Info',
      icon: <Ionicons name="person-outline" size={22} color={colors.default} />,
      route: '/profile/personal-info'
    },
    {
      id: 'change-password',
      title: 'Change Password',
      icon: <Ionicons name="lock-closed-outline" size={22} color={colors.default} />,
      route: '/profile/change-password'
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: <Ionicons name="log-out-outline" size={22} color={colors.danger} />,
      action: () => setLogoutModalVisible(true),
      danger: true
    }
  ]

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.primary }}
      edges={['top']}>
      <Header title="Profile" />
      <ScrollView className="flex-1 bg-[#F5F7FA]">
        {/* User Profile Section */}
        <View className="items-center pt-8 pb-6 bg-white">
          <View className="w-20 h-20 rounded-full mb-2 bg-[#E5E0FF] items-center justify-center">
            <Text className="text-2xl font-semibold text-primary">DR</Text>
          </View>
          <Text className="text-sm text-default">{userData.email}</Text>
        </View>

        {/* Profile Options */}
        <View className="p-5">
          <View className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            {profileOptions.map((option, index) => (
              <TouchableOpacity
                key={option.id}
                className={`flex-row items-center py-4 px-5 ${index !== profileOptions.length - 1 ? 'border-b border-[#EAEAEA]' : ''}`}
                onPress={() => {
                  if (option.action) {
                    option.action()
                  } else if (option.route) {
                    router.push(option.route as any)
                  }
                }}
              >
                <View className="mr-4">
                  {option.icon}
                </View>
                <Text
                  className={`flex-1 text-base ${option.danger ? 'text-danger' : 'text-default'}`}
                >
                  {option.title}
                </Text>
                <Text>
                  {option.route && (
                    <Ionicons name="chevron-forward" size={18} color={colors.subtle} />
                  )}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Logout Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-lg w-[90%] max-w-[320px] p-6 items-center">
            <View className="w-14 h-14 rounded-full bg-[#FEE2E2] items-center justify-center mb-4">
              <Ionicons name="log-out-outline" size={28} color={colors.danger} />
            </View>

            <Text className="text-lg font-medium text-default mb-2">Log Out</Text>
            <Text className="text-sm text-center text-subtle mb-6">Are you sure you want to log out?</Text>

            <View className="flex-row w-full">
              <Pressable
                className="flex-1 py-3 px-4 mr-2 rounded-lg border border-[#E0E0E0]"
                onPress={() => setLogoutModalVisible(false)}
              >
                <Text className="text-center text-default">Cancel</Text>
              </Pressable>

              <Pressable
                className="flex-1 py-3 px-4 ml-2 rounded-lg bg-primary"
                onPress={handleLogout}
              >
                <Text className="text-center text-white">Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Profile
