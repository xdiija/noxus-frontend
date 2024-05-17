<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
            Noxus Sistemas
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menus
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
    {
        title: 'Home',
        caption: '',
        icon: 'home',
        route: '/'
    },
    {
        title: 'Logout',
        caption: '',
        icon: 'exit_to_app',
        route: 'login'
    }
]

export default defineComponent({
    name: 'MainLayout',

    components: {
        EssentialLink
    },

    setup () {
        const leftDrawerOpen = ref(false)

        return {
            essentialLinks: linksList,
            leftDrawerOpen,
            toggleLeftDrawer () {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
})
</script>
