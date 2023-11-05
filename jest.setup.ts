import '@testing-library/jest-native/extend-expect'
import 'react-native-gesture-handler/jestSetup'

import { setupServer } from 'msw/node'

import { handlers } from '@/mocks/handlers'

require('react-native-reanimated').setUpTests()

const server = setupServer(...handlers)

beforeAll(() => {
  // Start the interception.
  server.listen()
})

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers()
})

afterAll(() => {
  // Disable request interception and clean up.
  server.close()
})

jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useRouter: () => ({
    route: {
      params: {
        id: '1'
      }
    },
    goBack: jest.fn(),
    push: jest.fn(),
    replace: jest.fn()
  })
}))
