import React from 'react'
import { Href, Tabs } from 'expo-router'
import { Text } from '@/components/ui/text'
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

const Label = ({ focused, title }: { focused: boolean; title: string }) => (
  <Text className={`text-sm ${focused ? 'text-primary' : 'text-disable'}`}>
    {title}
  </Text>
)
const RootLayout = () => {
  const tabs = [
    {
      headerShown: false,
      href: '/',
      name: 'index',
      title: 'Home',
      tabBarLabel: ({ focused }: { focused: boolean }) => (
        <Label focused={focused} title="Home" />
      ),
      tabBarIcon: ({ focused }: { focused: boolean }) =>
        focused ? <HomeIcon /> : <HomeOutlineIcon />,
    },
    {
      headerShown: false,
      href: '/assigned-task',
      name: 'assigned-task',
      title: 'Assigned Task',
      tabBarLabel: ({ focused }: { focused: boolean }) => (
        <Label focused={focused} title="Assigned Task" />
      ),
      tabBarIcon: ({ focused }: { focused: boolean }) =>
        focused ? <DealsIcon /> : <DealsOutlineIcon />,
    },
    {
      headerShown: false,
      href: '/history',
      name: 'history',
      title: 'History',
      tabBarLabel: ({ focused }: { focused: boolean }) => (
        <Label focused={focused} title="History" />
      ),
      tabBarIcon: ({ focused }: { focused: boolean }) =>
        focused ? <MyCarsIcon /> : <MyCarsOutlineIcon />,
    },
    {
      headerShown: false,
      href: '/profile',
      name: 'profile',
      title: 'Profile',
      tabBarLabel: ({ focused }: { focused: boolean }) => (
        <Label focused={focused} title="Profile" />
      ),
      tabBarIcon: ({ focused }: { focused: boolean }) =>
        focused ? <ProfileIcon /> : <ProfileOutlineIcon />,
    },
  ]
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingVertical: 10,
          backgroundColor: 'white',
        },
      }}>
      {tabs.map(
        ({ name, href, tabBarIcon, title, tabBarLabel, headerShown }, i) => (
          <Tabs.Screen
            name={name}
            options={{
              href: href as Href,
              headerShown,
              tabBarIcon,
              tabBarLabel,
              title: title || name?.[0]?.toUpperCase() + name.substring(1),
              tabBarStyle: {
                display: 'flex',
                paddingVertical: 8,
                backgroundColor: 'white',
              },
            }}
            key={i}
          />
        )
      )}
    </Tabs>
  )
}

export default RootLayout
