
const url = require('url')
const MongoClient = require('mongodb').MongoClient

let cachedDb = null

module.exports = async function connectToDatabase (uri) {
  if (cachedDb) {
    return cachedDb
  }
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  // eslint-disable-next-line node/no-deprecated-api
  cachedDb = await client.db(url.parse(uri).pathname.substr(1))
  return cachedDb
}
