import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { renderRouter } from 'expo-router/testing-library'

import { wrapper } from '@/mocks/wrapper'

import { Login } from './Login'

describe('Login', () => {
  it('should render', () => {
    render(<Login />, { wrapper })

    expect(screen.getByTestId('login')).toBeTruthy()
  })

  it('should toggle password visibility', async () => {
    render(<Login />, { wrapper })

    const passwordInput = screen.getByTestId('password')

    fireEvent.press(screen.getByTestId('show_password_toggle'))

    await waitFor(() => {
      expect(passwordInput.props.secureTextEntry).toBe(false)
    })
  })

  it('should login', async () => {
    const MockComponent = jest.fn(() => <Login />)

    const pushSpy = jest.fn()

    jest.spyOn(require('expo-router'), 'useRouter').mockReturnValue({
      push: pushSpy
    })

    renderRouter(
      { '(auth)/login': MockComponent },
      {
        wrapper,
        initialUrl: '/login'
      }
    )

    fireEvent.changeText(screen.getByTestId('email'), 'email@address.com')
    fireEvent.changeText(screen.getByTestId('password'), 'password')
    fireEvent.press(screen.getByTestId('login_button'))

    await waitFor(() => {
      expect(pushSpy).toHaveBeenCalledWith('')
    })
  })

  it('should link to register', async () => {
    const MockComponent = jest.fn(() => <Login />)

    const pushSpy = jest.fn()

    jest.spyOn(require('expo-router'), 'useRouter').mockReturnValue({
      push: pushSpy
    })

    renderRouter(
      { '(auth)/login': MockComponent },
      {
        wrapper,
        initialUrl: '/login'
      }
    )

    fireEvent.press(screen.getByTestId('register_link'))

    await waitFor(() => {
      expect(pushSpy).toHaveBeenCalledWith('register')
    })
  })
})
