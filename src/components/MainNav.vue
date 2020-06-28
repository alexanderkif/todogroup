<template>
  <q-list>
    <q-item
      v-for="nav in navs"
      :key="nav.label"
      :to="nav.to"
      class="text-h6"
      clickable
      :disable="nav.to==='/options'||(getUser&&getUser.name&&getUser.name!==null)?false:true"
      exact>
      <q-item-section avatar>
        <q-icon :name="nav.icon"/>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ $t(nav.label) }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'MainNav',
  data () {
    return {
      navs: [
        {
          label: 'MainNav.GroupList',
          icon: 'group',
          to: '/'
        },
        {
          label: 'MainNav.createGroup',
          icon: 'create',
          to: '/create'
        },
        {
          label: 'MainNav.addGroup',
          icon: 'group_add',
          to: '/add'
        },
        {
          label: 'MainNav.options',
          icon: 'build',
          to: '/options'
        }
      ]
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
