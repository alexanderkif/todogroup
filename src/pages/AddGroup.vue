<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h6 text-center">
        {{ $t('AddGroup.title') }}
      </div>
      <q-form @submit="addUserToGroup" @reset="onReset" class="q-gutter-sm">
        <q-input
          ref="groupId"
          v-model="groupId"
          :label="$t('AddGroup.groupId')+' *'"
          :hint="$t('AddGroup.required')"
          lazy-rules
          :rules="[ val => val && val.length == 24 || 'Please type something']"
        />
        <div class="flex flex-center">
          <q-btn rounded :label="$t('AddGroup.save')" type="submit" color="primary" />
          <q-btn rounded :label="$t('AddGroup.reset')" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AddGroup',
  components: {
  },
  data () {
    return {
      groupId: ''
    }
  },
  methods: {
    addUserToGroup () {
      const UserToGroup = {
        userId: this.getUser._id,
        groupId: this.groupId
      }
      this.$store.dispatch('group/addUserToGroup', UserToGroup)
        .then(() => {
          this.$store.dispatch('group/getGroups', this.getUser._id)
        })
        .then(() => this.$router.push('/'))
    },
    onReset () {
      this.groupName = null
      this.$refs.groupName.resetValidation()
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
