<template>
  <div class="flex min-h-screen green">
    <the-sidebar />

    <div class="flex flex-col flex-grow bg-gray-200">
      <the-header />

      <div class="mb-auto">
        <router-view />
      </div>

      <the-footer />
    </div>
  </div>
</template>

<script lang="ts">
import TheSidebar from '@/components/layouts/TheSidebar.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },
}
</script>
