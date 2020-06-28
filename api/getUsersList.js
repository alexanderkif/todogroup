
const connectToDatabase = require('../apicommon/configDb'),
  ObjectID = require('mongodb').ObjectID,
  allowCors = require('../apicommon/allowCors')

const handler = async (req, res) => {
  console.log('User GET operation in Time: ', new Date().toISOString())
  console.log('req.query.userids = ', req.query.userids)
  const db = await connectToDatabase(process.env.DB_BFM_URI)
  const users = await db.collection('users')
  const useridObjects = req.query.userids.split(',').map(userid => ObjectID(userid))
  users.find({ _id: { $in: useridObjects } }, { projection: { password: 0 } }).toArray((err, result) => {
    if (err) {
      console.log(err)
      res.json({ success: false, msg: err })
    } else {
      console.log(`Groups: ${result}`)
      res.json({ success: true, msg: result })
    }
  })
}

module.exports = allowCors(handler)
