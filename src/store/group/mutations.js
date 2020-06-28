
export function setGroups (state, groups) {
  // console.log('mutation')
  // console.log(groups)
  state.groups = groups
}

export function setGroup (state, group) {
  // console.log('mutation')
  // console.log(group)
  state.group = group
}

export function renewGroup (state) {
  // for subscribers
  console.log('renewGroup')
}

export function toggleItem (state, item) {
  const index = state.group.items.findIndex(el => el.itemName === item.itemName && el.description === item.description)
  item.checked = !item.checked
  console.log('toggleItem item = ', item)
  if (index !== -1) state.group.items.splice(index, 1, item)
}

export function addItemIdToGroup (state, itemId) {
  if (state.group.items) {
    state.group.items.push(itemId)
  } else {
    state.group.items = [itemId]
  }
}

export function removeItemsFromGroup (state, itemIds) {
  state.group.items = state.group.items.filter((el) => !itemIds.includes(el))
}

export function exitUser (state) {
  state.group = {}
  state.groups = 'noloaded'
}
