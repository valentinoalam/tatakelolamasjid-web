<template>
  <!-- App -->
  <div class="flex bg-gray-50 font-lexend dark:bg-gray-900">
    <div
      v-if="!$route.meta.hideNav"
      class="lg:block"
      :class="{ 'lg:block hidden': !sidebar, block: sidebar }"
    >
      <div
        class="fixed z-20 overflow-auto bg-white border-r-2 lg:flex-auto w-sidebar dark:bg-gray-800 dark:border-gray-700 lg:z-0 lg:relative"
      >
        <perfect-scrollbar class="h-screen">
          <Sidebar v-if="!$route.meta.hideNav" @sidebarToggle="close" />
          <!-- <sidebarlist
            v-if="!$route.meta.hideNav"
            @sidebarToggle="close"
          /> -->
        </perfect-scrollbar>
      </div>
    </div>

    <div
      class="flex-auto w-full h-screen overflow-auto transition-colors"
      id="body-scroll"
    >
      <admin-header v-if="!$route.meta.hideNav" @sidebarToggle="open" />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container px-6 py-8 mx-auto">
          <transition name="slide-up" mode="out-in">
            <slot />
          </transition>
        </div>
      </main>
      <admin-footer v-if="!$route.meta.hideNav" />
    </div>
  </div>
  <!-- End app -->
</template>

<script>
// Vue components
import Sidebar from '@/components/Sidebaru.vue'
import AdminHeader from './AdminHeader.vue'
import AdminFooter from './AdminFooter.vue'
// npm-js
import Scrollbar from 'smooth-scrollbar'

export default {
  name: 'App',

  data() {
    return {
      sidebarDark: false,
      sidebar: false,
    }
  },

  components: {
    AdminHeader,
    AdminFooter,
    Sidebar,
  },
  methods: {
    open() {
      this.sidebar = true
    },
    close() {
      this.sidebar = false
    },
  },
  watch: {
    $route() {
      this.sidebar = false
    },
  },
  mounted() {
    Scrollbar.init(document.querySelector('#body-scroll'))
  },
}
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-up-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
