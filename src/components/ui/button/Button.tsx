import type { StyleProp, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Text } from '@/components/typography/text/Text'
import type { TextVariant } from '@/components/typography/text-variants'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'link'

interface ButtonProps {
  id?: string
  title: string
  containerStyle?: StyleProp<ViewStyle>
  onPress: () => void
  disabled?: boolean
  variant?: ButtonVariant
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ id, containerStyle, title, onPress, disabled, variant, ...props }) => {
  const variants = {
    primary: 'bg-viking-400',
    secondary: 'bg-azure-radiance-800',
    danger: 'bg-red-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
    link: 'bg-transparent'
  }
  let className = `flex h-12 w-full items-center justify-center rounded-[6px] bg-viking-400 px-6 text-white ${
    variants[variant || 'primary']
  }`
  let textClassName = 'text-white'
  let textVariant: TextVariant | undefined

  if (variant === 'link') {
    className = ''
    textClassName = ''
    textVariant = 'bold'
  }

  if (disabled) {
    className = `${className} opacity-50`
  }

  return (
    <TouchableOpacity
      testID={id}
      className={`${className} ${props.className}`}
      style={containerStyle}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        className={textClassName}
        variant={textVariant}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
