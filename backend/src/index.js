import '#config/env.js'
import connectDB from '#config/db.js'
import httpServer from "#config/http.js"

async function runServer () {
  await connectDB(process.env.MONGODB_URL)

  httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
  })
}

runServer()
