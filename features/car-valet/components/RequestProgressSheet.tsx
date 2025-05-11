import React, {
  forwardRef,
  useCallback,
  useMemo,
  useEffect,
  useState,
} from 'react'
import { View, TouchableOpacity, Animated, Easing } from 'react-native'
import { Text } from '@/components/ui/text'
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import colors from '@/lib/colors'
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
  BottomSheetFooterProps,
  BottomSheetFooter,
} from '@gorhom/bottom-sheet'
import cn from '@/lib/utils'

interface RequestProgressSheetProps {
  onEditRoute: () => void
  onCancelRequest: () => void
  onProgressComplete?: () => void
}

// Using BottomSheetModal's built-in ref type

const RequestProgressSheet = forwardRef<
  BottomSheetModal,
  RequestProgressSheetProps
>(({ onEditRoute, onCancelRequest, onProgressComplete }, ref) => {
  // Set up the snap points for the bottom sheet
  const snapPoints = useMemo(() => ['40%'], [])

  // State to track progress value
  const [progressValue, setProgressValue] = useState(0)

  // Animation value for progress bar
  const progressAnimation = useMemo(() => new Animated.Value(0), [])

  // Reference to track if the callback has been triggered
  const hasTriggeredCallback = React.useRef(false)

  // Listen to animation value changes
  useEffect(() => {
    const listener = progressAnimation.addListener(({ value }) => {
      const progress = Math.floor(value * 100)
      setProgressValue(progress)

      // When progress reaches 100%, wait 3 seconds then trigger the callback
      if (
        progress >= 100 &&
        !hasTriggeredCallback.current &&
        onProgressComplete
      ) {
        hasTriggeredCallback.current = true
        console.log(
          'Progress reached 100%, waiting 3 seconds before triggering callback'
        )

        // Wait 3 seconds before triggering the callback
        setTimeout(() => {
          onProgressComplete()
        }, 3000)
      }
    })

    return () => {
      progressAnimation.removeListener(listener)
    }
  }, [progressAnimation, onProgressComplete])

  // Start progress animation when modal is shown
  useEffect(() => {
    // Reset the callback trigger state when the component mounts
    hasTriggeredCallback.current = false

    // Ensure we start at 0
    setProgressValue(0)
    progressAnimation.setValue(0)

    // Sequence of animations for a smoother experience
    const animateProgress = () => {
      // First delay to show the initial state
      setTimeout(() => {
        // Animate to 20% first
        Animated.timing(progressAnimation, {
          toValue: 0.2,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start(() => {
          // Then to 40%
          Animated.timing(progressAnimation, {
            toValue: 0.4,
            duration: 1200,
            easing: Easing.ease,
            useNativeDriver: false,
          }).start(() => {
            // Then to 60%
            Animated.timing(progressAnimation, {
              toValue: 0.6,
              duration: 1000,
              easing: Easing.ease,
              useNativeDriver: false,
            }).start(() => {
              // Then to 80%
              Animated.timing(progressAnimation, {
                toValue: 0.8,
                duration: 1200,
                easing: Easing.ease,
                useNativeDriver: false,
              }).start(() => {
                // Finally to 100%
                Animated.timing(progressAnimation, {
                  toValue: 1.0,
                  duration: 1500,
                  easing: Easing.ease,
                  useNativeDriver: false,
                }).start()
              })
            })
          })
        })
      }, 300) // Short delay before starting animation
    }

    // Start the animation sequence
    animateProgress()

    // Cleanup function
    return () => {
      // Reset animation if component unmounts
      progressAnimation.stopAnimation()
      hasTriggeredCallback.current = false
    }
  }, [])

  const onPressBack = useCallback(
    () => (ref as React.RefObject<BottomSheetModal>)?.current?.dismiss(),
    [ref]
  )

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  )

  // Create a custom footer component
  const renderFooter = useCallback(
    (props: BottomSheetFooterProps) => {
      // Determine if buttons should be disabled (when progress is 100%)
      const isDisabled = progressValue >= 100

      return (
        <BottomSheetFooter {...props}>
          <View className="flex-row justify-center py-4 px-22">
            <TouchableOpacity
              className="flex-col items-center justify-center mr-7"
              onPress={isDisabled ? undefined : onEditRoute}
              disabled={isDisabled}>
              <Entypo
                name="location-pin"
                size={33}
                color={isDisabled ? colors.gray03 : colors.primary}
              />
              <Text
                className={`text-base ${isDisabled ? 'text-gray-400' : 'text-primary'}`}>
                Edit Route
              </Text>
            </TouchableOpacity>

            <View className="border border-gray-200"></View>

            <TouchableOpacity
              className="flex-col items-center justify-center ml-7"
              onPress={isDisabled ? undefined : onCancelRequest}
              disabled={isDisabled}>
              <MaterialIcons
                name="block-flipped"
                size={33}
                color={isDisabled ? colors.gray03 : colors.danger}
              />
              <Text
                className={`text-base ${isDisabled ? 'text-gray-400' : 'text-primary'}`}>
                Cancel Request
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetFooter>
      )
    },
    [progressValue, onEditRoute, onCancelRequest]
  )

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      footerComponent={renderFooter}
      backdropComponent={renderBackdrop}
      onChange={(index) => {
        if (index < 0) {
          onPressBack()
        }
      }}>
      {/* Content */}
      <BottomSheetView>
        <View className="py-2">
          <View className="flex flex-row justify-between items-center mb-6 px-6">
            <View className="flex flex-col items-start">
              <Text className="text-base text-primary mb-1">
                {progressValue < 100 ? 'Request Sent!' : 'Request Accept!'}
              </Text>
              <Text className="text-sm text-gray-500">
                {progressValue < 100
                  ? 'Waiting approval from the services center'
                  : 'You have success the request'}
              </Text>
            </View>
            {/* Only show check icon when progress is complete */}
            {progressValue >= 100 && (
              <View className="rounded-full p-1">
                <MaterialCommunityIcons
                  name="check-decagram"
                  size={35}
                  color={colors.primary}
                />
              </View>
            )}
          </View>

          {/* Progress bar */}
          <View className="h-2 bg-gray-200 overflow-hidden">
            <Animated.View
              style={{
                height: '100%',
                backgroundColor: colors.primary,
                width: progressAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              }}
            />
          </View>

          {/* Progress percentage */}
          <Text className="text-xs text-gray-500 text-right mt-1 mr-2">
            {progressValue}%
          </Text>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  )
})

export default RequestProgressSheet
