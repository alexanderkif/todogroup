
const connectToDatabase = require('../apicommon/configDb'),
  ObjectID = require('mongodb').ObjectID,
  allowCors = require('../apicommon/allowCors')

const handler = async (req, res) => {
  console.log('User POST operation in Time: ', new Date().toISOString())
  console.log('req.body = ', req.body)
  const db = await connectToDatabase(process.env.DB_BFM_URI)
  const users = await db.collection('users')

  if (req.body.id) {
    if (req.body.id === 'new') {
      delete req.body.id
    }
    users.findOneAndUpdate(
      { _id: ObjectID(req.body.id) },
      { $set: { name: req.body.name, password: req.body.password, phone: req.body.phone } },
      { upsert: true, returnOriginal: false },
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
  } else {
    users.findOne({ name: req.body.name, password: req.body.password },
      (err, user) => {
        if (err) {
          console.log(err)
          res.json({ success: false, msg: err })
        } else {
          if (user) {
            console.log(`Login user with id: ${JSON.stringify(user)}`)
          } else {
            console.log('User not found')
          }
          res.status(200).json({ success: true, msg: user })
        }
      })
  }
}

module.exports = allowCors(handler)
