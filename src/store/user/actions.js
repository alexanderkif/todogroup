import axios from 'axios'
import { Notify } from 'quasar'

const url = 'https://buyforme.now.sh/users'

export function saveUser (context, user) {
  console.log('action Users')
  console.log(user)
  axios.post(`${url}`, user)
    .then((response) => {
      // console.log('response saveUser')
      // console.log(response.data.msg)
      context.commit('setUser', response.data.msg)
      Notify.create({
        type: 'positive',
        position: 'top',
        message: `Welcome, ${response.data.msg.name}`
      })
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

export function loginUser (context, user) {
  // console.log('action loginUser')
  // console.log(user, `  ====   url ===   ${url}login`)
  axios.post(`${url}`, user)
    .then((response) => {
      console.log('response loginUser')
      console.log(response.data.msg)
      if (response.data.msg) {
        context.commit('setUser', response.data.msg)
        Notify.create({
          type: 'positive',
          position: 'top',
          message: `Welcome, ${response.data.msg.name}`
        })
      } else {
        Notify.create({
          type: 'negative',
          position: 'top',
          message: 'User not found'
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

export function exitUser (context) {
  context.commit('exitUser')
}

export function getUserById (context, userid) {
  // console.log('action URL')
  // console.log(`${url}?userid=${userid}`)
  // axios.get(`${url}?userid=${userid}`)
  const userids = []
  userids.push(userid)
  // console.log(`${url}?list?userids=${userids}`)
  axios.get(`${url}/list?userids=${userids}`)
    .then((response) => {
      // console.log('getUserById response.data: ', response.data)
      if (response.data.msg) {
        context.commit('setUser', response.data.msg[0])
      } else {
        Notify.create({
          type: 'negative',
          position: 'top',
          message: 'User not found'
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

export function getUsersByIds (context, userids) {
  // console.log('action URL')
  // console.log(`${url}/list?userids=${JSON.stringify(userids)}`)
  axios.get(`${url}/list?userids=${userids}`)
    .then((response) => {
      // console.log('getUserById response.data: ', response.data)
      if (response.data.msg) {
        context.commit('setUsers', response.data.msg)
      } else {
        Notify.create({
          type: 'negative',
          position: 'top',
          message: 'Users not found'
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

export function createGroup (context, group) {
  axios.post(`${url}/creategroup`, group)
    .then((response) => {
      context.commit('createGroup', response.data.msg)
      Notify.create({
        type: 'positive',
        position: 'top',
        message: `Group ${response.data.msg.groupName} created`
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
