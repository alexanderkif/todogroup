
const connectToDatabase = require('../apicommon/configDb'),
  allowCors = require('../apicommon/allowCors')

const handler = async (req, res) => {
  console.log('Group GET operation in Time: ', new Date().toISOString())
  console.log('req.query.id = ', req.query.userid)
  const db = await connectToDatabase(process.env.DB_BFM_URI)
  const groups = await db.collection('groups')
  groups.find({ users: req.query.userid }).toArray((err, result) => {
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
