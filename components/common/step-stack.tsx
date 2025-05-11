import cn from '@/lib/utils'
import { View } from 'react-native'

const StepStack = ({
  count,
  current,
  className,
}: {
  count: number
  current: number
  className?: string
}) => {
  return (
    <View className={cn(className, 'flex flex-row gap-6')}>
      {count > 1 &&
        Array.from({ length: count }).map((_, index) => (
          <View
            key={index}
            className={cn(
              current == index + 1 ? 'bg-primary ' : 'bg-gray-300',
              'w-10 h-1 rounded-full'
            )}
          />
        ))}
    </View>
  )
}
export default StepStack
