import type { ReactNode } from 'react'
import type { TextInputProps } from 'react-native'
import { Text, TextInput, View } from 'react-native'

interface InputProps extends TextInputProps {
  id?: string
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const Input: React.FC<InputProps> = ({ id, label, leftIcon, rightIcon, ...props }) => {
  return (
    <View className='rounded-[5px] bg-white/80 px-4 pb-1 pt-2'>
      {label && <Text className='text-gray-700'>{label}</Text>}
      <View className='flex-row items-center underline '>
        {leftIcon && <View className='mr-1'>{leftIcon}</View>}
        <TextInput
          testID={id}
          className='h-8 flex-1 text-lg text-gray-700'
          style={{ fontFamily: 'Inter-Regular', fontSize: 16, lineHeight: 18 }}
          {...props}
        />
        {rightIcon && <View>{rightIcon}</View>}
      </View>
    </View>
  )
}

export default Input
