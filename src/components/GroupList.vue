<template>
  <div class="q-pa-md q-gutter-xs">
    <div v-if="getGroups[0]=='noloaded'" >
      <div class="row justify-center q-mb-lg">
        <q-spinner-radio
          color="red"
          size="3em"
        />
      </div>
      <div class="row justify-center text-h6">
        {{ $t('GroupList.wait') }}
      </div>
    </div>
    <div v-else-if="getGroups.length">
      <q-list bordered>
        <q-item
          clickable
          v-ripple
          @click="toGroupDetail(group._id)"
          v-for="group in getGroups"
          :key="group.index">
          <q-item-section top avatar>
            <q-avatar rounded color="primary" text-color="white">{{ group.groupName? group.groupName.substr(0,2).toUpperCase() : '' }}</q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold text-h6">{{ group.groupName }}</q-item-label>
            <q-item-label class="text-subtitle1" >{{ !!group.description? group.description : $t('GroupList.noDescr') }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label class="text-accent text-subtitle1" >{{ group.owner? group.owner.name : '' }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div v-else>
      <div class="q-pa-md text-h4 text-center">{{ $t('GroupList.noGroups') }}</div>
      <div class="flex flex-center">
        <q-btn to="create" rounded class="q-ma-md" color="primary" :label="$t('GroupList.create')" />
        <q-btn to="add" rounded class="q-ma-md" color="primary" :label="$t('GroupList.connect')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupList',
  data () {
    return {
      groups: []
    }
  },
  created () {
    this.$store.dispatch('group/getGroups', this.getUser._id)
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'user/setUser' ||
        mutation.type === 'user/createGroup' ||
        mutation.type === 'group/renewGroup') {
        // console.log(`Updating to ${state.user.user.name}`)
        this.$store.dispatch('group/getGroups', state.user.user._id)
      }
    })
  },
  beforeDestroy () {
    // console.log('destroy subscribe')
    this.unsubscribe()
  },
  methods: {
    toGroupDetail (id) {
      // console.log(id)
      // this.$store.dispatch('group/getGroup', id)
      this.$q.cookies.set('groupid', id, { expires: 100 })
      this.$router.push('/groupdetail')
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    },
    getGroups () {
      return this.$store.getters['group/getGroups']
    }
  }
}
</script>
