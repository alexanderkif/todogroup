<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          {{ getUser&&getUser.name&&getUser.name!==null?getUser.name+' - ':'' }}{{ $t('MainLayout.title') }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <MainNav />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import MainNav from '../components/MainNav'

export default {
  components: {
    MainNav
  },
  data () {
    return {
      left: false
    }
  },
  async created () {
    let lang
    if (this.$q.cookies.has('lang') && this.$q.cookies.get('lang') !== 'undefined') {
      lang = this.$q.cookies.get('lang')
      this.$store.dispatch('lang/changeLang', lang)
      this.$i18n.locale = this.langSet.filter(l => l.label === lang)[0].value
    } else {
      lang = this.langSet.filter(l => l.value === this.$i18n.locale)[0].label || 'English'
      this.$store.dispatch('lang/changeLang', lang)
      this.$q.cookies.set('lang', lang, { expires: 100 })
    }
    let userid
    if (this.$q.cookies.has('userid') &&
      this.$q.cookies.get('userid') !== null &&
      this.$q.cookies.get('userid') !== 'undefined') {
      userid = this.$q.cookies.get('userid')
      // console.log('Get user by cookies userid')
      // console.log(userid)
      // console.log(user._id)
      await this.$store.dispatch('user/getUserById', userid)
    } else {
      this.redirectOptions()
    }
    // this.$store.dispatch('group/getGroups')
  },
  methods: {
    redirectOptions () {
      if (this.$router.currentRoute.path !== '/options') {
        this.$router.push('/options')
      }
    }
  },
  computed: {
    lang () {
      return this.$store.getters['lang/getLang']
    },
    langSet () {
      return this.$store.getters['lang/getLangSet']
    },
    getUser () {
      const user = this.$store.getters['user/getUser']
      // console.log('getUser user')
      // console.log(user)
      if (!user) {
        this.redirectOptions()
      }
      if (user && user._id) {
        this.$q.cookies.set('userid', user._id, { expires: 100 })
      }
      return user
    }
  }
}
</script>
