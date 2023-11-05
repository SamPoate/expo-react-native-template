import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users/:userId', () =>
    HttpResponse.json({
      user: {
        id: '123',
        name: 'John Maverick'
      }
    })
  )
]
