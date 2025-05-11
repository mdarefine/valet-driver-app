import { FC, ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import { Text } from './text'

import cn from '@/lib/utils'
import Loading from './loading'

type Variant = 'contained' | 'default' | 'outlined' | 'pale' | 'text' | 'cancel'
interface IButton extends TouchableOpacityProps {
  children: ReactNode
  isLoading?: boolean
  variant?: 'contained' | 'outlined' | 'pale' | 'default' | 'text' | 'cancel'
  className?: string
  titleClassName?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const baseStyles =
  'px-4 py-2 rounded-lg border border-transparent justify-center items-center'

const getVariantStyles = (variant: string, disabled: boolean) => {
  const variantStyles: Record<Variant, string> = {
    contained: disabled ? 'bg-[#21212108]' : 'bg-primary',
    default: disabled ? 'bg-[#21212108]' : 'bg-primary',
    outlined: 'border-none',
    pale: disabled ? 'bg-[#21212108]' : 'bg-gold-500',
    text: 'bg-transparent',
    cancel: 'border border-danger bg-transparent',
  }
  return variantStyles[variant as Variant] || ''
}

const getTextVariantStyles = (variant: string) => {
  const textVariantStyles = {
    contained: 'text-white',
    outlined: 'text-primary',
    default: 'text-default',
    pale: 'font-Urbanist500 text-sm text-gray-900',
    text: 'text-primary font-lg font-Urbanist600',
    cancel: 'text-danger',
  }
  return textVariantStyles[variant as Variant] || 'text-primary'
}

const Button: FC<IButton> = ({
  children,
  titleClassName = '',
  isLoading = false,
  className = '',
  variant = 'contained',
  leftIcon,
  rightIcon,
  disabled = false,
  ...props
}) => {
  const buttonStyles = cn(
    baseStyles,
    getVariantStyles(variant, disabled),
    className
  )
  const textStyles = cn(
    'text-center text-white text-base font-Urbanist700',
    getTextVariantStyles(variant),
    titleClassName,
    {
      'text-disabled': disabled,
    }
  )

  return (
    <TouchableOpacity
      {...props}
      className={buttonStyles}
      activeOpacity={0.5}
      disabled={isLoading || disabled}>
      <View className="flex-row justify-center gap-2 items-center">
        {isLoading ? <Loading /> : leftIcon}
        {!isLoading && (
          <Text className={cn(`text-sm font-Urbanist500`, textStyles)}>
            {children}
          </Text>
        )}
        {!isLoading && rightIcon}
      </View>
    </TouchableOpacity>
  )
}

export default Button
