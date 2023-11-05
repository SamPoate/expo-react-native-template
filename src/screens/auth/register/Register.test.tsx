import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { renderRouter } from 'expo-router/testing-library'

import { wrapper } from '@/mocks/wrapper'

import { Register } from './Register'

describe('Register', () => {
  it('should render', () => {
    render(<Register />, { wrapper })

    expect(screen.getByTestId('register')).toBeTruthy()
  })

  it('should register', async () => {
    const MockComponent = jest.fn(() => <Register />)

    const pushSpy = jest.fn()

    jest.spyOn(require('expo-router'), 'useRouter').mockReturnValue({
      push: pushSpy
    })

    renderRouter(
      { '(auth)/register': MockComponent },
      {
        wrapper,
        initialUrl: '/register'
      }
    )

    fireEvent.changeText(screen.getByTestId('email'), 'email@address.com')
    fireEvent.changeText(screen.getByTestId('password'), 'password')
    fireEvent.press(screen.getByTestId('register_button'))

    await waitFor(() => {
      expect(pushSpy).toHaveBeenCalledWith('')
    })
  })

  it('should link to login', async () => {
    const MockComponent = jest.fn(() => <Register />)

    const pushSpy = jest.fn()

    jest.spyOn(require('expo-router'), 'useRouter').mockReturnValue({
      push: pushSpy
    })

    renderRouter(
      { '(auth)/register': MockComponent },
      {
        wrapper,
        initialUrl: '/register'
      }
    )

    fireEvent.press(screen.getByTestId('login_link'))

    await waitFor(() => {
      expect(pushSpy).toHaveBeenCalledWith('/login')
    })
  })
})
