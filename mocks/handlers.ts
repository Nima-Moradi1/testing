//? This file is where we're going to make endpoint handlers and mock all of our endpoints

import {http, HttpResponse} from 'msw'

export const handlers = [
    http.get('/api/users', async () => {
       return HttpResponse.json([{id : 2 , username : 'dambooli kosak'}])
       
      })
]