import type { TextProps } from 'react-native'
import { Text as RNText } from 'react-native'

import type { TextVariant } from '../text-variants'
import { variantStyles } from '../text-variants'

export const Text: React.FC<TextProps & { variant?: TextVariant }> = ({ style, variant = 'p', ...rest }) => {
  const { fontFamily, fontSize, lineHeight } = variantStyles[variant]

  return (
    <RNText
      style={[
        {
          fontFamily,
          fontSize,
          lineHeight
        },
        style
      ]}
      {...rest}
    />
  )
}

export default Text
