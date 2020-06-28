
const connectToDatabase = require('../apicommon/configDb'),
  allowCors = require('../apicommon/allowCors')

const handler = async (req, res) => {
  console.log('Group POST operation in Time: ', new Date().toISOString())
  console.log('req.body = ', req.body)
  const db = await connectToDatabase(process.env.DB_BFM_URI)
  const groups = await db.collection('groups')
  groups.insertOne(req.body, (err, result) => {
    if (err) {
      console.log(err)
      res.json({ success: false, msg: err })
    } else {
      console.log('Greated group:')
      console.log(result.ops[0])
      res.json({ success: true, msg: result.ops[0] })
    }
  })
}

module.exports = allowCors(handler)
