//? This file is where we're going to make endpoint handlers and mock all of our endpoints

import {http} from 'msw'

export const handlers = [
    /*@ts-expect-error : no types inferred for req,res,ctx*/
    http.get('/api/users' , (req,res,ctx) => {
        return res(
            ctx.json([{id:1 , username : 'nimooli'}])
        )
    })
]