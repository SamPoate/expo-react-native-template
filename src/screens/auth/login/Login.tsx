import FeatherIcons from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Text from '@/components/typography/text/Text'
import Button from '@/components/ui/button/Button'
import Input from '@/components/ui/input/Input'
import { useLogin } from '@/services/auth'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const loginCall = useLogin()
  const router = useRouter()

  const login = async () => {
    setLoading(true)

    try {
      await loginCall.mutateAsync({
        email,
        password
      })

      router.push('')
    } catch (error) {
      // console.log(error)
    }

    setLoading(false)
  }

  return (
    <SafeAreaView
      testID='login'
      className='flex-1 justify-between'
      edges={['top']}
    >
      <View className='p-8'>
        <View className='py-4'>
          <Input
            id='email'
            label='Email'
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder='email@address.com'
            autoCapitalize='none'
          />
        </View>
        <View className='py-4'>
          <Input
            id='password'
            label='Password'
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={!showPassword}
            placeholder='Password'
            autoCapitalize='none'
            rightIcon={
              <TouchableWithoutFeedback
                testID='show_password_toggle'
                onPress={() => setShowPassword(!showPassword)}
              >
                <FeatherIcons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={20}
                />
              </TouchableWithoutFeedback>
            }
          />
        </View>
        <View className='mt-4'>
          <Button
            id='login_button'
            title='Login'
            onPress={login}
            disabled={loading}
          />
        </View>
      </View>
      <SafeAreaView
        className='items-center justify-center border-t-[1px] bg-white/50 p-4'
        mode='padding'
        edges={['bottom']}
      >
        <View className='flex-row'>
          <Text>Don&apos;t have an account? </Text>
          <Button
            id='register_link'
            title='Sign Up.'
            variant='link'
            onPress={() => router.push('register')}
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default Login
