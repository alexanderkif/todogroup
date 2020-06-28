
export function setItems (state, items) {
  // console.log('setItems mutation')
  // console.log(JSON.stringify(items))
  state.items = items
}

export function setItem (state, item) {
  // console.log('mutation')
  // console.log(item)
  state.item = item
}

export function exitUser (state) {
  state.item = {}
  state.items = []
}
