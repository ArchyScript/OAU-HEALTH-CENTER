<template>
  <v-app dark>
    <Sidebar :drawer="drawer" @toggle-drawer="changeDrawer" />
    <Topbar @toggle-drawer="changeDrawer" />

    <v-main>
      <v-container fluid>
        <Nuxt class="mt-10 ml-6" />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>yarn dev
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  </v-app>
</template>

<script>
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
export default {
  // name: "DefaultLayout",
  components: {
    Sidebar,
    Topbar,
  },
  data() {
    return {
      drawer: true,
      fixed: false,
    };
  },
  methods: {
    changeDrawer(value) {
      this.drawer = value;
    },
  },
};
</script>
