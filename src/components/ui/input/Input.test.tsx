import { fireEvent, render, screen } from '@testing-library/react-native'
import { View } from 'react-native'

import { Input } from './Input'

describe('Input', () => {
  it('renders correctly', () => {
    render(
      <Input
        id='input'
        placeholder='Enter text'
        value=''
        onChangeText={() => {}}
      />
    )

    expect(screen.getByPlaceholderText('Enter text')).toBeDefined()
  })

  it('calls onChangeText when text is entered', () => {
    const onChangeText = jest.fn()
    render(
      <Input
        id='input'
        placeholder='Enter text'
        value=''
        onChangeText={onChangeText}
      />
    )

    fireEvent.changeText(screen.getByTestId('input'), 'Hello')

    expect(onChangeText).toHaveBeenCalledWith('Hello')
  })

  it('renders label correctly', () => {
    render(
      <Input
        id='input'
        label='Input'
        placeholder='Enter text'
        value=''
        onChangeText={() => {}}
      />
    )

    expect(screen.getByText('Input')).toBeDefined()
  })

  it('adds icons when leftIcon and rightIcon props are passed', () => {
    render(
      <Input
        id='input'
        placeholder='Enter text'
        value=''
        onChangeText={() => {}}
        leftIcon={<View testID='left_icon' />}
        rightIcon={<View testID='right_icon' />}
      />
    )

    expect(screen.getByTestId('left_icon')).toBeDefined()
    expect(screen.getByTestId('right_icon')).toBeDefined()
  })
})
