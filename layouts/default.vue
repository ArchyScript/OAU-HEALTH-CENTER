<template>
  <div class="flex min-h-screen green">
    <SidebarVue />

    <div class="flex flex-col flex-grow bg-gray-200">
      <HeaderVue />

      <div class="mb-auto pt-10 ml-6">
        <Nuxt class="mt-10 ml-6" />
      </div>

      <FooterVue />
    </div>
  </div>

  <!-- <Nuxt class="mt-10 ml-6" /> -->

  <!-- <v-app dark> -->
  <!-- <SidebarVue :drawer="drawer" @toggle-drawer="changeDrawer" /> -->
  <!-- <TopbarVue @toggle-drawer="changeDrawer" /> -->
  <!-- <HeaderVue /> -->

  <!-- <v-main>
      <v-container fluid>
        <Nuxt class="mt-10 ml-6" />
      </v-container>
    </v-main> -->

  <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon> </v-list-item-action
          >yarn dev
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  <!-- </v-app> -->
</template>

<script>
import { defineComponent } from 'vue'
import HeaderVue from '~/components/layouts/Header.vue'
import SidebarVue from '~/components/layouts/Sidebar.vue'
import FooterVue from '~/components/layouts/Footer.vue'
// import TopbarVue from '~/components/layouts/Footer.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    SidebarVue,
    HeaderVue,
    FooterVue,
  },

  data() {
    return {
      drawer: false,
      fixed: false,
    }
  },

  methods: {
    changeDrawer(value) {
      this.drawer = value
    },
  },
})
</script>
