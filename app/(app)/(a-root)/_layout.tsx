import React from 'react'
import { Href, Tabs } from 'expo-router'
import { Text, View } from 'react-native'
import HomeIcon from '@/assets/svgs/tabs/HomeIcon'
import HomeOutlineIcon from '@/assets/svgs/tabs/HomeOutlineIcon'
import DealsIcon from '@/assets/svgs/tabs/DealsIcon'
import DealsOutlineIcon from '@/assets/svgs/tabs/DealsOutlineIcon'
import MyCarsIcon from '@/assets/svgs/tabs/MyCarsIcon'
import MyCarsOutlineIcon from '@/assets/svgs/tabs/MyCarsOutlineIcon'
import ProfileIcon from '@/assets/svgs/tabs/ProfileIcon'
import ProfileOutlineIcon from '@/assets/svgs/tabs/ProfileOutlineIcon'
import ShopIcon from '@/assets/svgs/tabs/ShopIcon'
import ShopOutlineIcon from '@/assets/svgs/tabs/ShopOutlineIcon'
import colors from '@/lib/colors'
const RootLayout = () => {
  const tabs = [
    {
      headerShown: false,
      href: '/',
      name: 'index',
      title: 'Home',
      icon: HomeIcon,
      inactiveIcon: HomeOutlineIcon
    },
    {
      headerShown: false,
      href: '/assigned-task',
      name: 'assigned-task',
      title: 'Assigned Task',
      icon: DealsIcon,
      inactiveIcon: DealsOutlineIcon
    },
    {
      headerShown: false,
      href: '/history',
      name: 'history',
      title: 'History',
      icon: MyCarsIcon,
      inactiveIcon: MyCarsOutlineIcon
    },
    {
      headerShown: false,
      href: '/profile',
      name: 'profile',
      title: 'Profile',
      icon: ProfileIcon,
      inactiveIcon: ProfileOutlineIcon
    },
  ]
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.disable,
        tabBarStyle: {
          backgroundColor: 'white',
          paddingBottom: 8,
          height: 65,
          paddingTop: 8
        },
        tabBarLabelPosition: "below-icon",
        tabBarIconStyle: {
          marginBottom: 0
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4
        }
      }}
    >
      {tabs.map(({ name, href, title, headerShown, icon: Icon, inactiveIcon: InactiveIcon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            href: href as Href,
            headerShown,
            title: title || name,
            tabBarIcon: ({ color, focused }) => {
              const IconComponent = focused ? Icon : InactiveIcon;
              return <IconComponent />;
            },
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? colors.primary : colors.disable, fontSize: 11 }}>
                {title}
              </Text>
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default RootLayout
