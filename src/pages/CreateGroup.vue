<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h6 text-center">
        {{ $t('CreateGroup.title') }}
      </div>
      <q-form @submit="createGroup" @reset="onReset" class="q-gutter-sm">
        <q-input
          ref="groupName"
          v-model="groupName"
          :label="$t('CreateGroup.groupName')+' *'"
          :hint="$t('CreateGroup.required')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
          ref="description"
          v-model="description"
          :label="$t('CreateGroup.decsr')"
          type="textarea"
          :rules="[ val => val.length < 200 || 'Max length 200']"
        />
        <div class="flex flex-center">
          <q-btn rounded :label="$t('CreateGroup.save')" type="submit" color="primary" />
          <q-btn rounded :label="$t('CreateGroup.reset')" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CreateGroup',
  components: {
  },
  data () {
    return {
      groupName: '',
      description: ''
    }
  },
  methods: {
    createGroup () {
      const owner = this.getUser
      delete owner.password
      const group = {
        groupName: this.groupName,
        description: this.description,
        owner: owner,
        users: [owner._id],
        created: new Date().toISOString().split('T')[0]
      }
      console.log(group)
      this.$store.dispatch('user/createGroup', group)
        .then(() => this.$router.push('/'))
    },
    onReset () {
      this.groupName = null
      this.$refs.groupName.resetValidation()
      this.$refs.description.resetValidation()
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
