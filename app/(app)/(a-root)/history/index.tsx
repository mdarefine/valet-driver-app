import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'

const HistoryPage = () => {
  // Define the type for history items
  interface HistoryItem {
    id: string;
    date: string;
    task: string;
    status: string;
  }

  // Sample data for history items
  const historyItems: HistoryItem[] = [
    // Empty for now, will be populated with actual history data
  ]

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          History
        </Text>
      </View>

      <View style={styles.contentContainer}>
        {historyItems.length === 0 ? (
          <View style={styles.emptyStateContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="time-outline" size={80} color="#A0A0A0" />
            </View>
            
            <Text style={styles.emptyStateTitle}>
              No History Found
            </Text>
            
            <Text style={styles.emptyStateMessage}>
              Your task history will appear here as you complete assignments.
            </Text>
          </View>
        ) : (
          <FlatList
            data={historyItems}
            renderItem={() => <View />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.primary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textwhite,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 16,
  },
  emptyStateContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: '#EEF2F7',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1
  },
  iconContainer: {
    width: 180,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24
  },
  emptyStateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.default,
    marginBottom: 8
  },
  emptyStateMessage: {
    fontSize: 14,
    color: colors.subtle,
    textAlign: 'center',
    lineHeight: 20,
    maxWidth: '90%'
  }
})

export default HistoryPage
