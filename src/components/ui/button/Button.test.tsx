import { fireEvent, render, screen } from '@testing-library/react-native'

import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(
      <Button
        title='Press me'
        onPress={() => {}}
      />
    )

    expect(screen.getByText('Press me')).toBeDefined()
  })

  it('calls onPress when pressed', () => {
    const onPress = jest.fn()
    render(
      <Button
        id='button'
        title='Press me'
        onPress={onPress}
      />
    )

    fireEvent.press(screen.getByTestId('button'))

    expect(onPress).toHaveBeenCalled()
  })

  it('disables the button when disabled prop is true', () => {
    render(
      <Button
        id='button'
        title='Press me'
        onPress={() => {}}
        disabled
      />
    )

    expect(screen.getByTestId('button')).toBeDisabled()
  })

  it('applies the correct text styles for link variant', () => {
    render(
      <Button
        id='button'
        title='Press me'
        variant='link'
        onPress={() => {}}
      />
    )

    expect(screen.getByText('Press me')).toHaveStyle({ fontFamily: 'Inter-Medium' })
  })
})
