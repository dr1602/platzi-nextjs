import { IncomingMessage, ServerResponse } from "http"
import DB from '@database'

const allAVOS = async (request: IncomingMessage, response: ServerResponse) => {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    response.statusCode = 200 // ok
    response.setHeader( 'Content-Type', 'application/json' )

    response.end(JSON.stringify({ data: allEntries, length }))

    
    // response.end(JSON.stringify({ hello: 'worldys'}))
}

export default allAVOS;


