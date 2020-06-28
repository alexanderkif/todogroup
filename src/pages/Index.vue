<template>
  <q-page class="flex flex-center">
    <GroupList />
  </q-page>
</template>

<script>
import GroupList from '../components/GroupList'
export default {
  name: 'PageIndex',
  components: {
    GroupList
  }
}
</script>
