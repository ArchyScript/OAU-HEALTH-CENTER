<template>
  <div class="p-6">
    testing
  </div>
  <!-- <div class="flex min-h-screen green">
    <SidebarVue />

    <div class="flex flex-col flex-grow bg-gray-200">
      <HeaderVue />

      <div class="mb-auto">
        <router-view />
      </div>

      <FooterVue />
    </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import SidebarVue from '~/components/layouts/Sidebar.vue'
import HeaderVue from '~/components/layouts/Header.vue'
import FooterVue from '~/components/layouts/Footer.vue'

export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    SidebarVue,
    HeaderVue,
    FooterVue,
  },
}
</script>
