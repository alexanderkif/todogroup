<template>
  <div>
    <q-form @submit="submitUser" @reset="onReset" class="q-gutter-sm">
      <q-input
        ref="name"
        v-model="name"
        :label="$t('User.yourName')+' *'"
        :hint="$t('User.required')"
        lazy-rules
        :rules="[ val => val && val.length > 0 || $t('User.rules')]"
      />
      <q-input
        ref="password"
        v-model="password"
        :label="$t('User.yourPass')+' *'"
        :hint="$t('User.required')"
        lazy-rules
        :type="isPwd ? 'password' : 'text'"
        :rules="[ val => val && val.length > 0 || $t('User.rules')]"
        >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input
        v-if="newUser||editUser"
        ref="phone"
        v-model="phone"
        :label="$t('User.phone')"
        mask="+# (###) ### - ####"
        unmasked-value
        :hint="$t('User.optional')"
      />
      <div class="q-mt-md">
        <q-checkbox v-model="newUser" :label="$t('User.newUser')" @input="newUser?editUser=false:''" />
      </div>
      <div v-if="getUser&&getUser._id" class="q-mb-md">
        <q-checkbox v-model="editUser" :label="$t('User.editUser')" @input="editUser?newUser=false:''" />
      </div>
      <!-- <div v-if="getUser&&getUser._id" class="q-mb-md">
        <q-checkbox v-model="exitUser" :label="$t('User.exitUser')" @input="exitUser?newUser=false:''" />
      </div> -->
      <div class="flex flex-center">
        <q-btn rounded :label="$t('User.submit')" type="submit" color="primary" />
        <q-btn v-if="getUser&&getUser._id" rounded :label="$t('User.exitUser')" type="reset" color="primary" @click="onExitUser" flat class="q-ml-sm" />
        <q-btn rounded :label="$t('User.reset')" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { Cookies } from 'quasar'

export default {
  name: 'User',
  data () {
    return {
      name: '',
      password: '',
      isPwd: true,
      phone: '',
      newUser: false,
      editUser: false,
      exitUser: false
    }
  },
  methods: {
    submitUser () {
      const user = {
        name: this.name,
        password: this.password
      }
      if (!this.newUser && !this.editUser) {
        this.$store.dispatch('user/loginUser', user)
      } else {
        user.phone = this.phone
        if (this.newUser) {
          user.id = 'new'
        } else {
          user.id = this.getUser._id
        }
        this.$store.dispatch('user/saveUser', user)
      }
      this.$router.push('/')
    },
    onReset () {
      this.name = ''
      this.password = ''
      this.phone = ''
      this.newUser = false

      this.$refs.name.resetValidation()
      this.$refs.password.resetValidation()
      if (this.newUser || this.editUser) {
        this.$refs.phone.resetValidation()
      }
    },
    onExitUser () {
      Cookies.remove('userid')
      this.$store.dispatch('user/exitUser')
      this.$store.dispatch('group/exitUser')
      this.$store.dispatch('item/exitUser')
      this.name = ''
      this.password = ''
      this.phone = ''
    }
  },
  mounted () {
    if (this.getUser) {
      this.name = this.getUser.name
      this.password = this.getUser.password
      this.phone = this.getUser.phone
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
