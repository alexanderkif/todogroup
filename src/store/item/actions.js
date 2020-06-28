import axios from 'axios'
import { Notify } from 'quasar'

const url = 'https://buyforme.now.sh/items'

export async function createItem (context, oldAndNewItems) {
  return await axios.post(`${url}`, oldAndNewItems)
    .then((response) => {
      // context.commit('createItem', response.data.msg)
      Notify.create({
        type: 'positive',
        position: 'top',
        message: `Item ${response.data.msg.itemName} created`
      })
      return response.data.msg._id
    })
    .catch((error) => {
      console.log('error')
      console.log(error)
      Notify.create({
        type: 'negative',
        position: 'top',
        message: `Error: ${error.response}`
      })
    })
}

export async function toggleItem (context, oldAndNewItems) {
  console.log('action oldAndNewItems = ', oldAndNewItems)
  return await axios.post(`${url}`, oldAndNewItems)
    .then((response) => {
      // context.commit('createItem', response.data.msg)
      Notify.create({
        type: 'positive',
        position: 'top',
        message: `Item ${response.data.msg.itemName} saved`
      })
      return response.data.msg._id
    })
    .catch((error) => {
      console.log('error')
      console.log(error)
      Notify.create({
        type: 'negative',
        position: 'top',
        message: `Error: ${error.response}`
      })
    })
}

export function getItemsByIds (context, itemids) {
  // console.log('action URL')
  // console.log(`${url}/list?itemids=${JSON.stringify(itemids)}`)
  if (itemids) {
    axios.get(`${url}/list?itemids=${itemids}`)
      .then((response) => {
        // console.log('getItemById response.data: ', response.data)
        if (response.data.msg) {
          context.commit('setItems', response.data.msg)
        } else {
          Notify.create({
            type: 'negative',
            position: 'top',
            message: 'Items not found'
          })
        }
      })
      .catch((error) => {
        console.log('error')
        // console.log(error)
        Notify.create({
          type: 'negative',
          position: 'top',
          message: `Error: ${error.response}`
        })
      })
  } else {
    context.commit('setItems', {})
  }
}

export function exitUser (context) {
  context.commit('exitUser')
}

export async function deleteItemsByIds (context, itemids) {
  return await axios.get(`${url}/list?delete=true&itemids=${itemids}`)
    .then((response) => {
      if (response.data.msg) {
        Notify.create({
          type: 'positive',
          position: 'top',
          message: response.data.msg
        })
      } else {
        Notify.create({
          type: 'negative',
          position: 'top',
          message: 'Items not deleted'
        })
      }
    })
    .catch((error) => {
      console.log('error')
      // console.log(error)
      Notify.create({
        type: 'negative',
        position: 'top',
        message: `Error: ${error.response}`
      })
    })
}
