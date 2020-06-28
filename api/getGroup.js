
const connectToDatabase = require('../apicommon/configDb'),
  ObjectID = require('mongodb').ObjectID,
  allowCors = require('../apicommon/allowCors')

const handler = async (req, res) => {
  console.log('Group GET operation in Time: ', new Date().toISOString())
  console.log('req.query.id = ', req.query.id)
  const db = await connectToDatabase(process.env.DB_BFM_URI)
  const groups = await db.collection('groups')
  if (req.query.delete) {
    groups.deleteOne({ _id: ObjectID(req.query.id) }, (err, result) => {
      if (err) {
        console.log(err)
        res.json({ success: false, msg: err })
      } else {
        console.log(`Deleted ${result.deletedCount} item.`)
        res.json({ success: true, msg: result })
      }
    })
  } else {
    groups.findOne({ _id: ObjectID(req.query.id) }, (err, result) => {
      if (err) {
        console.log(err)
        res.json({ success: false, msg: err })
      } else {
        console.log(`Groups: ${result}`)
        res.json({ success: true, msg: result })
      }
    })
  }
}

module.exports = allowCors(handler)
