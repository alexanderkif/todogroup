
const connectToDatabase = require('../apicommon/configDb'),
  ObjectID = require('mongodb').ObjectID,
  allowCors = require('../apicommon/allowCors')

const handler = async (req, res) => {
  console.log('Item POST operation in Time: ', new Date().toISOString())
  console.log('req.body = ', req.body)
  const db = await connectToDatabase(process.env.DB_BFM_URI)
  const items = await db.collection('items')
  // req.body = { old: oldItem, new: newItem }
  if (req.body.old === 'noold') {
    // createItem
    items.insertOne(req.body.new, (err, result) => {
      if (err) {
        console.log(err)
        res.json({ success: false, msg: err })
      } else {
        console.log('Greated item:')
        console.log(result.ops[0])
        res.json({ success: true, msg: result.ops[0] })
      }
    })
  } else {
    // updateItem
    items.findOne({ _id: ObjectID(req.body.old._id) },
      (err, oldItem) => {
        if (err) {
          console.log(err)
          res.json({ success: false, msg: err })
        } else {
          if (req.body.old.checked === oldItem.checked &&
            req.body.old.history && oldItem.history &&
            req.body.old.history.length === oldItem.history.length) {
            console.log('req.body.old === oldItem')
            if (req.body.new.checked) {
            // check Item
              items.findOneAndUpdate(
                { _id: ObjectID(req.body.new._id) },
                {
                  $set: {
                    history: req.body.new.history,
                    checked: req.body.new.checked
                  }
                },
                { upsert: false, returnOriginal: false },
                (err, result) => {
                  if (err) {
                    console.log('Items findOneAndUpdate: ', err)
                    res.json({ success: false, msg: err })
                  } else {
                    console.log('Items findOneAndUpdate: ', result.value)
                    res.status(200).json({ success: true, msg: result.value })
                  }
                }
              )
            } else {
            // uncheck Item
              items.findOneAndUpdate(
                { _id: ObjectID(req.body.new._id) },
                {
                  $set: {
                    quantity: req.body.new.quantity,
                    checked: req.body.new.checked,
                    created: req.body.new.created,
                    creator: req.body.new.creator
                  }
                },
                { upsert: false, returnOriginal: false },
                (err, result) => {
                  if (err) {
                    console.log('Items findOneAndUpdate: ', err)
                    res.json({ success: false, msg: err })
                  } else {
                    console.log('Items findOneAndUpdate: ', result.value)
                    res.status(200).json({ success: true, msg: result.value })
                  }
                }
              )
            }
          } else {
          // Error updating. Item was changed.
            console.log('Error updating. Item was changed.')
            res.status(200).json({ success: false, msg: 'Error updating. Item was changed.' })
          }
        }
      }
    )
  }
}

module.exports = allowCors(handler)
