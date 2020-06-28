
const connectToDatabase = require('../apicommon/configDb'),
  ObjectID = require('mongodb').ObjectID,
  allowCors = require('../apicommon/allowCors')

const handler = async (req, res) => {
  console.log('Item GET operation in Time: ', new Date().toISOString())
  console.log('req.query.itemids = ', req.query.itemids)
  console.log('req.query.delete = ', req.query.delete)
  const db = await connectToDatabase(process.env.DB_BFM_URI)
  const items = await db.collection('items')
  const itemidObjects = req.query.itemids.split(',').map(itemid => ObjectID(itemid))
  if (req.query.delete) {
    items.remove({ _id: { $in: itemidObjects } }, (err, obj) => {
      if (err) {
        console.log(err)
        res.json({ success: false, msg: err })
      } else {
        console.log(obj.result.n + ' document(s) deleted')
        res.json({ success: true, msg: obj.result.n + ' document(s) deleted' })
      }
    })
  } else {
    items.find({ _id: { $in: itemidObjects } }).toArray((err, result) => {
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
