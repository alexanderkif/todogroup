<template>
  <div class="q-pa-md flex flex-center">
    <div class="text-h6 q-mr-md">{{ $t('Options.language') }}:</div>
    <q-btn-dropdown rounded color="primary" :label="lang">
      <q-list>
        <q-item clickable v-close-popup @click="chooseLang(lang)"
          v-for="lang in langSet" :key="lang.label">
          <q-item-section>
            <q-item-label>{{lang.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data () {
    return {
    }
  },
  methods: {
    chooseLang (lang) {
      this.$i18n.locale = lang.value
      this.$q.cookies.set('lang', lang.label, { expires: 100 })
      this.$store.dispatch('lang/changeLang', lang.label)
    }
  },
  computed: {
    lang () {
      return this.$store.getters['lang/getLang']
    },
    langSet () {
      return this.$store.getters['lang/getLangSet']
    }
  }
}
</script>
