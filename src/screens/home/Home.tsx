import { View } from 'react-native'

import Text from '@/components/typography/text/Text'

export const Home: React.FC = () => {
  return (
    <View
      testID='home'
      className='flex-1 items-center justify-center'
    >
      <Text className='text-2xl font-bold'>Home</Text>
    </View>
  )
}

export default Home
