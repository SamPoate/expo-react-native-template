import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Text from '@/components/typography/text/Text'
import Button from '@/components/ui/button/Button'
import Input from '@/components/ui/input/Input'
import { useRegister } from '@/services/auth'

export const Register: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const registerCall = useRegister()

  const router = useRouter()

  const register = async () => {
    setLoading(true)

    try {
      await registerCall.mutateAsync({
        email,
        password
      })

      router.push('')
    } catch (error) {
      // console.log(error);
    }

    setLoading(false)
  }

  return (
    <SafeAreaView
      testID='register'
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
            secureTextEntry
            placeholder='Password'
            autoCapitalize='none'
          />
        </View>
        <View className='mt-4'>
          <Button
            id='register_button'
            title='Register'
            onPress={register}
            disabled={loading}
          />
        </View>
        <View className='mt-4 flex-row justify-center'>
          <Text>Already have an account? </Text>
          <Button
            id='login_link'
            title='Login'
            variant='link'
            onPress={() => router.push('/login')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Register
