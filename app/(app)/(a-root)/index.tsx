import React from 'react'
import { View, Image, TouchableOpacity, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { router } from 'expo-router'
import useSession from '@/store/useSession'

const DriverHome = () => {
  const driverData = {
    name: 'David Russel',
    id: 'PO 123FF',
    status: 'ONLINE',
    loggedTime: 'Jan 4, 4:21 AM',
    sessionDuration: '04:21:32',
    date: 'Monday Dec 27, 2025'
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={{ flex: 1, backgroundColor: '#F5F7FA' }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: colors.primary,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: colors.textwhite }}>
              Driver Home
            </Text>
          </View>
        </View>

        {/* Content Area */}
        <View style={{ flex: 1, padding: 16 }}>
          {/* Welcome Card */}
          <View style={{ marginBottom: 24 }}>
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: 6 
            }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '600', color: colors.default }}>
                  Welcome . {driverData.name}
                </Text>
                <Text style={{ fontSize: 14, color: colors.subtle }}>
                  {driverData.date}
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="notifications-outline" size={24} color={colors.default} />
              </TouchableOpacity>
            </View>

            {/* Driver Info Card */}
            <View style={{ 
              backgroundColor: colors.textwhite, 
              borderRadius: 12,
              padding: 16,
              marginTop: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image 
                  source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
                  style={{ 
                    width: 50, 
                    height: 50, 
                    borderRadius: 25,
                    backgroundColor: '#C7B1FF' 
                  }} 
                />
                <View style={{ marginLeft: 12, flex: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: colors.default }}>
                      {driverData.name}
                    </Text>
                    <View style={{ 
                      backgroundColor: '#E8F5E9', 
                      paddingHorizontal: 10, 
                      paddingVertical: 4, 
                      borderRadius: 16 
                    }}>
                      <Text style={{ color: colors.success, fontSize: 12, fontWeight: '600' }}>
                        {driverData.status}
                      </Text>
                    </View>
                  </View>
                  <Text style={{ color: colors.subtle, fontSize: 14 }}>
                    {driverData.id}
                  </Text>
                </View>
              </View>
              
              <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'space-between',
                marginTop: 16,
                paddingTop: 12,
                borderTopWidth: 1,
                borderTopColor: '#F0F0F0'
              }}>
                <Text style={{ color: colors.subtle, fontSize: 14 }}>
                  Logged from {driverData.loggedTime}
                </Text>
                <Text style={{ color: colors.default, fontSize: 14, fontWeight: '500' }}>
                  {driverData.sessionDuration}
                </Text>
              </View>
            </View>
          </View>

          {/* Current Task Section */}
          <View>
            <Text style={{ 
              fontSize: 18, 
              fontWeight: '600', 
              color: colors.default,
              marginBottom: 16 
            }}>
              Current Task
            </Text>
            
            <View style={{ 
              backgroundColor: '#EEF2F7', 
              borderRadius: 12,
              padding: 24,
              alignItems: 'center',
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.03,
              shadowRadius: 4,
              elevation: 1
            }}>
              <View style={{ marginBottom: 24, width: 180, height: 120, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="document-text-outline" size={80} color="#A0A0A0" />
              </View>
              
              <Text style={{ 
                fontSize: 16, 
                fontWeight: '600', 
                color: colors.default,
                marginBottom: 8
              }}>
                No Assigned Tasks
              </Text>
              
              <Text style={{ 
                fontSize: 14, 
                color: colors.subtle,
                textAlign: 'center',
                lineHeight: 20,
                maxWidth: '90%'
              }}>
                You have no tasks assigned at the moment. Sit back and relax or check back later for updates.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DriverHome
