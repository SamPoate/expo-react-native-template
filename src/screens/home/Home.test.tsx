import { render, screen } from '@testing-library/react-native'

import { wrapper } from '@/mocks/wrapper'

import { Home } from './Home'

describe('Home', () => {
  it('should render', () => {
    render(<Home />, { wrapper })

    expect(screen.getByTestId('home')).toBeTruthy()
  })
})
