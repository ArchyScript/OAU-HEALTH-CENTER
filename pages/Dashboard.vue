<template>
  <div class="flex min-h-screen">
    <Sidebar />

    <div class="flex flex-col flex-grow bg-gray-200">
      <Header />

      <div class="mb-auto">
        <router-view />
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/layouts/Sidebar.vue'
import Header from '~/components/layouts/Header.vue'
import Footer from '~/components/layouts/Footer.vue'

export default {
  components: {
    Sidebar,
    Header,
    Footer,
  },
}
</script>
