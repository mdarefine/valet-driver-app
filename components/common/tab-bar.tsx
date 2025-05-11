import React from 'react'
import { View } from 'react-native'
import TabBarItem from './tab-bar-item'

export interface TabBarItemProps<T extends string> {
  title: string
  tab: T
}

export default function TabBar<T extends string>({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: TabBarItemProps<T>[]
  activeTab: T
  setActiveTab: (tab: T) => void
}) {
  return (
    <View className="flex-row justify-center items-center bg-light rounded-full mx-4 shadow">
      {tabs.map((tabItem) => (
        <TabBarItem
          title={tabItem.title}
          active={activeTab === tabItem.tab}
          onPress={() => setActiveTab(tabItem.tab)}
          key={tabItem.tab}
        />
      ))}
    </View>
  )
}
