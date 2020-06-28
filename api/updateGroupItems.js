
const connectToDatabase = require('../apicommon/configDb'),
  ObjectID = require('mongodb').ObjectID,
  allowCors = require('../apicommon/allowCors')

const handler = async (req, res) => {
  console.log('Group POST operation in Time: ', new Date().toISOString())
  console.log('req.body = ', req.body)
  const db = await connectToDatabase(process.env.DB_BFM_URI)
  const users = await db.collection('groups')

  users.findOneAndUpdate(
    { _id: ObjectID(req.body.id) },
    { $set: { items: req.body.items } },
    { upsert: false, returnOriginal: false },
    (err, result) => {
      if (err) {
        console.log('findOneAndUpdate: ', err)
        res.json({ success: false, msg: err })
      } else {
        console.log('findOneAndUpdate: ', result.value)
        res.status(200).json({ success: true, msg: result.value })
      }
    }
  )
}

module.exports = allowCors(handler)
