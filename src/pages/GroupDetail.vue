<template>
  <q-page>
    <div class="q-pa-md">
      <div v-if="getGroup && getGroup.owner && getGroup.owner._id === getUser._id" class="row full-width justify-end q-mb-sm">
        <q-btn label="Удалить группу" icon-right="delete_forever" @click.stop="openDeleteGroupDialog=true" outline rounded color="negative" />
      </div>
      <GroupDetailHeader />
      <q-list v-if="getItems && getItems.length" bordered class="q-mb-xl">
        <q-item
          v-for="item in getItems"
          :key="item._id"
          @click="openItemDetail(item)"
          clickable
          v-ripple>
          <q-item-section top class="q-gutter-sm" avatar>
            <q-checkbox :value="item.checked? true : false" @input="toggleCheckedItem(item)" />
          </q-item-section>

          <q-item-section top avatar>
            <q-avatar rounded color="primary" text-color="white">{{ item.itemName.charAt(0).toUpperCase() }}</q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6 q-mr-sm">{{ item.itemName + ' - ' + item.quantity }}</q-item-label>
            <div class="text-caption">{{ item.description }}</div>
          </q-item-section>
          <q-item-section v-if="getGroup && getGroup.owner && getGroup.owner._id === getUser._id" top class="q-gutter-sm" avatar>
            <q-btn flat round color="negative" icon="delete_forever" @click.stop="openItemToDeleteDialog(item._id)" />
          </q-item-section>
        </q-item>
      </q-list>
      <div v-else>
        <div class="row justify-center text-h6">
          {{ $t('GroupDetail.noItems') }}
        </div>
      </div>
      <q-page-sticky position="bottom" :offset="[18, 18]">
        <q-btn rounded size="md" icon="add" :label="$t('GroupDetail.add')" color="positive" @click="addItem = true" class="q-mr-sm" />
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" content-class="bg-positive">
          Add new item
        </q-tooltip>
      </q-page-sticky>
    </div>

    <q-dialog v-model="addItem" persistent>
      <q-card class="" style="min-width: 350px">
        <q-card-section class="row bg-positive items-center q-pa-md text-white">
          <div class="text-h6">{{ $t('GroupDetail.addTitle') }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-form @submit="createItem" @reset="onReset" class="q-pa-md q-gutter-sm">
          <q-input
            ref="itemName"
            v-model="itemName"
            :label="$t('GroupDetail.itemName')+' *'"
            :hint="$t('GroupDetail.required')"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type item']"
          />
          <q-input
            ref="quantity"
            v-model="quantity"
            :label="$t('GroupDetail.quantity')+' *'"
            :hint="$t('GroupDetail.required')"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type quantity']"
          />
          <q-input
            ref="description"
            v-model="description"
            :label="$t('GroupDetail.decsr')"
            type="textarea"
            :rules="[ val => val.length < 200 || 'Max length 200']"
          />
          <div class="flex flex-center">
            <q-btn rounded :label="$t('GroupDetail.save')" type="submit" color="positive" />
            <q-btn flat rounded :label="$t('GroupDetail.reset')" type="reset" color="positive" class="q-ml-sm" />
          </div>
        </q-form>
      </q-card>
    </q-dialog>

    <q-dialog v-model="itemDetail">
      <q-card>
        <q-card-section class="bg-accent text-white">
          <div class="text-h6">{{ item.itemName }}</div>
        </q-card-section>
        <q-card-section>
          <div>
            <span class="text-accent text-bold">Текущее дело:</span>{{ ` ${item.quantity}` }}
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div>
            <span class="text-accent text-bold">Заказчик:</span>
            {{ ` ${getGroupUsers.filter(el => el._id === item.creator)[0]?
            getGroupUsers.filter(el => el._id === item.creator)[0].name : ''} - ${item.created}` }}
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div>
            <span class="text-accent text-bold">Выполнен:</span>{{ ` ${item.checked? 'да' : 'нет'}` }}
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-accent text-bold">
            Описание:
          </div>
          <div class="q-pt-none">
            {{ `${ item.description? item.description : 'Описание отсутствует.' }` }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-accent text-bold">
            История заказов:
          </div>
          <div class="row justify-around">
            <div class="text-primary text-caption">
              Заказал
            </div>
            <div class="text-accent text-bold q-px-md">
              Количество
            </div>
            <div class="text-accent">
              Выполнил
            </div>
          </div>
          <div v-for="hist in item.history"
            :key="hist.index"
             class="row justify-between">
            <div class="text-primary text-caption">
              {{ `( ${getGroupUsers.filter(el => el._id === hist.creator)[0].name} - ${hist.created} )` }}
            </div>
            <div class="text-accent text-bold q-mx-lg">
              {{ hist.quantity }}
            </div>
            <div class="text-accent">
              {{ `${getGroupUsers.filter(el => el._id === hist.buyer)[0].name} - ${hist.date}` }}
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn rounded label="OK" color="accent" class="text-bold" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="again" persistent>
      <q-card>
        <q-card-section class="row text-white bg-primary items-center">
          <span class="text-h6">Введите нужное количество:</span>
        </q-card-section>
        <q-card-section class="row justify-center">
          <q-input
            v-model="newQuantity"
            :label="$t('GroupDetail.quantity')"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat rounded label="Отмена" color="primary" v-close-popup />
          <q-btn rounded label="Заказать снова" @click="orderAgain" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="buyed" persistent>
      <q-card>
        <q-card-section class="bg-primary row items-center">
          <span class="text-h6 text-white">Подтвердите выполнение</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat rounded label="Отмена" color="primary" v-close-popup />
          <q-btn rounded label="Выполнено" @click="checkItem" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="itemToDeleteDialog" persistent>
      <q-card>
        <q-card-section class="bg-negative row items-center">
          <span class="text-h6 text-white">Позиция будет удалена</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat rounded label="Отмена" color="negative" v-close-popup />
          <q-btn rounded label="Удалить" @click="deleteItems([itemToDelete])" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="openDeleteGroupDialog" persistent>
      <q-card>
        <q-card-section class="bg-negative row items-center">
          <span class="text-h6 text-white">Группа со всеми позициями будет удалена</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat rounded label="Отмена" color="negative" v-close-popup />
          <q-btn rounded label="Удалить" @click="deleteGroup" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import GroupDetailHeader from '../components/GroupDetailHeader'

export default {
  name: 'GroupDetail',
  components: {
    GroupDetailHeader
  },
  data () {
    return {
      val: [],
      addItem: false,
      item: {},
      itemName: '',
      quantity: '',
      description: '',
      itemDetail: false,
      again: false,
      newQuantity: '',
      buyed: false,
      itemToDelete: '',
      itemToDeleteDialog: false,
      openDeleteGroupDialog: false
    }
  },
  created () {
    let groupid
    if (this.$q.cookies.has('groupid') &&
      this.$q.cookies.get('groupid') !== null &&
      this.$q.cookies.get('groupid') !== 'undefined') {
      groupid = this.$q.cookies.get('groupid')
      // console.log('Get user by cookies groupid')
      // console.log(groupid)
      this.$store.dispatch('group/getGroup', groupid)
    } else {
      this.$router.push('/')
    }
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'group/setGroup') {
        // console.log('subscribe group = ', state.group.group)
        this.$store.dispatch('user/getUsersByIds', state.group.group.users)
        this.$store.dispatch('item/getItemsByIds', state.group.group.items)
      }
    })
  },
  beforeDestroy () {
    this.unsubscribe()
  },
  methods: {
    openItemDetail (item) {
      // console.log(item)
      this.itemDetail = true
      this.item = item
    },
    openItemToDeleteDialog (id) {
      this.itemToDelete = id
      this.itemToDeleteDialog = true
    },
    deleteItems (itemids) {
      // console.log('delete item itemids = ', itemids)
      this.removeItems(itemids)
        .then(this.saveGroup)
      this.itemToDelete = ''
      this.itemToDeleteDialog = false
    },
    async removeItems (itemids) {
      if (itemids && itemids.length) {
        await this.$store.dispatch('item/deleteItemsByIds', itemids)
          .then(this.$store.dispatch('group/removeItemsFromGroup', itemids))
      }
    },
    deleteGroup () {
      this.removeItems(this.getGroup.items)
      this.$store.dispatch('group/deleteGroupById', this.getGroup._id)
        .then(this.$router.push('/'))
    },
    toggleCheckedItem (item) {
      this.item = item
      if (item.checked) {
        // console.log('Хотите заказать снова?')
        this.newQuantity = item.quantity
        this.again = true
      } else {
        // console.log('Item checked true')
        this.buyed = true
        // this.unsaved++
      }
    },
    orderAgain () {
      const oldItem = Object.assign({}, this.item)
      const item = Object.assign({}, this.item)
      item.quantity = this.newQuantity
      item.checked = false
      item.creator = this.getUser._id
      item.created = new Date().toISOString().split('T')[0]
      item.history = this.item.history.slice()
      console.log('orderAgain item = ', { old: oldItem, new: item })
      this.$store.dispatch('item/toggleItem', { old: oldItem, new: item })
        .then(() => {
          this.$store.dispatch('item/getItemsByIds', this.getGroup.items)
        })
    },
    saveGroup () {
      this.$store.dispatch('group/updateGroupItems', this.getGroup)
      // this.unsaved = 0
    },
    createItem () {
      this.addItem = false
      const item = {
        itemName: this.itemName,
        quantity: this.quantity,
        description: this.description,
        checked: false,
        creator: this.getUser._id,
        created: new Date().toISOString().split('T')[0],
        history: []
      }
      console.log(item)
      this.$store.dispatch('item/createItem', { old: 'noold', new: item })
        .then((itemId) => {
          this.$store.dispatch('group/addItemIdToGroup', itemId)
            .then(this.saveGroup)
            .then(() => {
              this.itemName = ''
              this.quantity = ''
              this.description = ''
            })
        })
    },
    onReset () {
      this.itemName = ''
      this.quantity = ''
      this.description = ''
      this.$refs.itemName.resetValidation()
      this.$refs.quantity.resetValidation()
      this.$refs.description.resetValidation()
    },
    checkItem () {
      const oldItem = Object.assign({}, this.item)
      // console.log('oldItem = ', oldItem)
      const item = Object.assign({}, this.item)
      // console.log('item = ', item)
      item.checked = true
      const historyItem = {
        quantity: item.quantity,
        created: item.created,
        creator: item.creator,
        date: new Date().toISOString().split('T')[0],
        buyer: this.getUser._id
      }
      console.log('this.item.history = ', this.item.history)
      if (!this.item.history) {
        this.item.history = []
      }
      item.history = [...this.item.history]
      if (item.history.length > 4) {
        item.history = item.history
          .sort((a, b) => { return new Date(b.date) - new Date(a.date) })
          .slice(0, 4)
          .sort((a, b) => { return new Date(a.date) - new Date(b.date) })
      }
      item.history.push(historyItem)
      console.log('pushed history = ', item.history)
      this.$store.dispatch('item/toggleItem', { old: oldItem, new: item })
        .then(() => {
          this.$store.dispatch('item/getItemsByIds', this.getGroup.items)
          this.buyed = false
        })
    }
  },
  computed: {
    getGroup () {
      return this.$store.getters['group/getGroup']
    },
    getUser () {
      return this.$store.getters['user/getUser']
    },
    getGroupUsers () {
      return this.$store.getters['user/getGroupUsers']
    },
    getItems () {
      return this.$store.getters['item/getItems']
    },
    getUsers () {
      return this.$store.getters['user/getUsers']
    }
  }
}
</script>
