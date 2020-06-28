<template>
  <q-page class="flex flex-center">
    <div class="q-my-md">
      <LangSwitcher />
      <hr>
      <div class="q-mt-md text-h6">{{ $t('Options.user') }}:</div>
      <User />
    </div>
  </q-page>
</template>

<script>
import LangSwitcher from '../components/LangSwitcher'
import User from '../components/User'

export default {
  components: {
    LangSwitcher,
    User
  },
  name: 'Options',
  props: {
    langSet: Array,
    lang: String
  }
}
</script>
