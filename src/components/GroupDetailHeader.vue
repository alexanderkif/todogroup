<template>
  <div>
    <div class="bg-primary rounded-borders q-pa-sm">
      <div class="flex row text-caption text-white justify-between" >
        <div @click="copyID" class="text-caption q-px-sm bg-accent rounded-borders">
          <div class="row">
            <svg aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" class="q-icon notranslate text-h6 q-mr-sm"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg>
            Group ID
          </div>
          <input class="groupid row" readonly
          style="background-color:inherit;color:inherit;border:none;outline:none;width:165px;" :value="getGroup._id" />
          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" content-class="bg-accent">
            Click to copy.
          </q-tooltip>
        </div>
        <div class="text-white text-caption q-px-sm bg-accent rounded-borders">
          <div class="row justify-end">
            {{ getGroup.owner? getGroup.owner.name + ': ' + getGroup.owner.phone : '' }}
          </div>
          <div class="row justify-end">
            {{ getGroup.created }}
          </div>
        </div>
      </div>
      <div class="row justify-center text-h4 text-white text-center">
        {{ getGroup.groupName }}
      </div>
      <div class="row justify-center">
        <div class="col-12 text-h6 text-white text-center">
          {{ getGroup.description }}
        </div>
      </div>
    </div>
    <div class="row q-mb-md">
      <q-chip
        v-for="user in getGroupUsers"
        :key="user.index">
        <q-avatar color="accent" text-color="white">{{ user.name.charAt(0).toUpperCase() }}</q-avatar>
        {{ user.name }}
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" content-class="bg-accent">
          {{ user.phone }}
        </q-tooltip>
      </q-chip>
    </div>
  </div>
</template>

<script>
import { Notify } from 'quasar'

export default {
  name: 'GroupDetailHeader',
  methods: {
    copyID () {
      document.querySelector('.groupid').select()
      document.execCommand('copy')
      Notify.create({
        type: 'positive',
        position: 'top',
        message: 'Copied ID: ' + document.querySelector('.groupid').value
      })
    }
  },
  created () {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'group/setGroup') {
        // console.log(`Updating to ${state.users}`)
        this.$store.dispatch('user/getUsersByIds', this.getGroup.users)
      }
    })
  },
  beforeDestroy () {
    this.unsubscribe()
  },
  computed: {
    getGroup () {
      return this.$store.getters['group/getGroup']
    },
    getGroupUsers () {
      return this.$store.getters['user/getGroupUsers']
    }
  }
}
</script>
