import axios from 'axios'
import { Notify } from 'quasar'

const url = 'https://todogroup.vercel.app/groups'

export function getGroups (context, userid) {
  axios.get(`${url}?userid=${userid}`)
    .then((response) => {
      context.commit('setGroups', response.data.msg)
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

export async function getGroup (context, id) {
  return await axios.get(`${url}/getgroup?id=${id}`)
    .then((response) => {
      context.commit('setGroup', response.data.msg)
      // console.log('action getGroup = ', response.data.msg)
      return response.data.msg
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

export function addUserToGroup (context, UserToGroup) {
  axios.post(`${url}/addusertogroup`, UserToGroup)
    .then((response) => {
      // console.log('response.data.msg')
      // console.log(response.data.msg)
      context.commit('renewGroup')
      Notify.create({
        type: 'positive',
        position: 'top',
        message: 'User added.'
      })
    })
    .catch((error) => {
      console.log('addUserToGroup error')
      console.log(error)
      Notify.create({
        type: 'negative',
        position: 'top',
        message: `Error addUserToGroup: ${error.response}`
      })
    })
}

export function updateGroupItems (context, group) {
  // console.log('action updateGroupItems')
  // console.log(group)
  group.id = group._id
  axios.post(`${url}/updategroupitems`, group)
    .then((response) => {
      // console.log('response updateGroupItems')
      // console.log(response.data.msg)
      context.commit('setGroup', response.data.msg)
      Notify.create({
        type: 'positive',
        position: 'top',
        message: `Group ${response.data.msg.groupName} saved.`
      })
    })
    .catch((error) => {
      console.log('error')
      console.log(error)
      Notify.create({
        type: 'negative',
        position: 'top',
        message: `Didn't save. Try again. Error: ${error.response}`
      })
    })
}

export async function addItemIdToGroup (context, itemId) {
  await context.commit('addItemIdToGroup', itemId)
}

export async function removeItemsFromGroup (context, itemIds) {
  await context.commit('removeItemsFromGroup', itemIds)
}

export function exitUser (context) {
  context.commit('exitUser')
}

export function deleteGroupById (context, groupId) {
  console.log('deleteGroupById id = ', groupId)
  axios.get(`${url}/getgroup?delete=true&id=${groupId}`)
    .then((response) => {
      Notify.create({
        type: 'positive',
        position: 'top',
        message: `Deleted ${response.data.msg.n} group.`
      })
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
