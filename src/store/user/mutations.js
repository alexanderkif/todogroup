export function setUser (state, user) {
  state.user = user
}

export function setUsers (state, users) {
  // console.log('setUsers mutation')
  // console.log(JSON.stringify(users))
  state.users = users
}

export function createGroup (state, group) {
  // console.log('createGroup mutation')
  // console.log(group)
  if (!state.user.groups) {
    console.log('createGroup mutation: user.groups = []')
    state.user.groups = []
  }
  state.user.groups.push(group)
}

export function exitUser (state) {
  state.user = {}
  state.users = []
}
