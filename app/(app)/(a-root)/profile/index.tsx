import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/common/Header'
import colors from '@/lib/colors'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import * as ImagePicker from 'expo-image-picker'
import ImageUploadModal from '@/components/specific/profile/ImageUploadModal'
import LogoutConfirmModal from '@/components/specific/profile/LogoutConfirmModal'

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
  const [profileImage, setProfileImage] = useState('https://randomuser.me/api/portraits/men/32.jpg')
  const [imageUploadModal, setImageUploadModal] = useState(false)

  // Mock user data
  const userData = {
    name: 'David Russel',
    email: 'davidrussel@gmail.com',
    phone: '+65 1234 5678',
    address: 'Okopowa 11/72, 01-042 Warszawa',
    joinedDate: 'Jan 15, 2023',
    profileImage: null // Set to image URL when available, null for no image
  }

  // Get initials from name

  const handleLogout = () => {
    // Implement actual logout logic here
    setLogoutModalVisible(false)
    // Navigate to login screen or perform other logout actions
  }

  const handleImagePicker = () => {
    setImageUploadModal(true)
  }

  const handleImageSelection = async (type: string) => {
    setImageUploadModal(false)

    try {
      let result;

      if (type === 'camera') {
        // Request camera permissions
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera permissions to take a picture!');
          return;
        }

        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });
      } else {
        // Request media library permissions
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need media library permissions to select an image!');
          return;
        }

        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });
      }

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri);
        // Here you would typically upload the image to your server
        // uploadImageToServer(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
      alert('An error occurred while selecting the image');
    }
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
      <ScrollView className="flex-1 " style={{ backgroundColor: colors.textwhite }}>
        <View className="items-center pt-8 pb-6 mx-4 border-b border-[#EAEAEA]">
          <TouchableOpacity onPress={handleImagePicker} activeOpacity={0.8}>
            <View className="relative">
              <View className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  source={{ uri: profileImage }}
                  className="w-full h-full"
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: [{ translateX: -40 }, { translateY: -20 }],
                  width: 80,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 4,
                }}
              >
                <Ionicons name="pencil" size={16} color="white" />
                <Text style={{ color: 'white', fontWeight: '500' }}>Edit</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text className="text-base text-gray-700 mt-4 font-medium">
            {userData.email}
          </Text>
        </View>
        <View className="p-4">
          <View className=" mb-4 overflow-hidden">
            {profileOptions.map((option, index) => (
              <TouchableOpacity
                key={option.id}
                className={`flex-row items-center py-5  ${index !== profileOptions.length - 1 ? '' : ''}`}
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
      <ImageUploadModal
        visible={imageUploadModal}
        onClose={() => setImageUploadModal(false)}
        onCameraSelect={() => handleImageSelection('camera')}
        onGallerySelect={() => handleImageSelection('gallery')}
      />
      <LogoutConfirmModal
        visible={logoutModalVisible}
        onClose={() => setLogoutModalVisible(false)}
        onLogout={handleLogout}
      />
    </SafeAreaView>
  )
}

export default Profile
