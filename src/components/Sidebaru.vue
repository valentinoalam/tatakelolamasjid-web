<template>
  <!-- sidebar -->
  <nav class="bg-white sidebar dark:bg-gray-800">
    <!-- sidebar head -->
    <div class="p-4 sidebar-head">
      <router-link to="/" exact class="flex">
        <div class="flex items-center justify-center mt-8">
          <div class="flex items-center">
            <img
              class="w-8 mt-1"
              src="@/assets/logo/logo.svg"
              alt="logo windzo"
            />
            <h2
              class="mx-2 mt-2 ml-3 text-2xl font-semibold text-gray-800 dark:text-gray-200"
              translate="no"
            >
              Assalam<span class="text-primary">Jksp</span>
            </h2>
          </div>
        </div>
      </router-link>
      <div
        class="absolute hidden px-2 py-1 mt-3 text-xs text-gray-200 bg-gray-700 rounded-md dark:block"
      >
        Dark mode
      </div>
      <button
        class="block float-right lg:hidden dark:text-gray-400 -mt-7"
        @click="$emit('sidebarToggle')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="25px"
          height="25px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
          />
        </svg>
      </button>
    </div>
    <!-- sidebar list -->
    <div class="p-4 mt-4 divide-y sidebar-list dark:divide-gray-700">
      <div class="pb-5">
        <p class="font-medium text-gray-400 dark:text-gray-400">Menu</p>
        <div class="mt-4 wrap-item dark:text-gray-500">
          <div class="item">
            <router-link
              to="/"
              exact
              class="box-border flex w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> Dashboard </span>
            </router-link>
          </div>
          <div class="mt-3 item">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="gg:components" />
              </template>
              <template v-slot:title> Components </template>
              <template v-slot:content>
                <router-link
                  to="/component/alert"
                  class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Alert
                </router-link>
                <router-link
                  to="/component/accordion"
                  class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Accordion
                </router-link>
                <router-link
                  to="/component/badge"
                  class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Badge
                </router-link>
                <router-link
                  to="/component/breadcumb"
                  class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Breadcumb
                </router-link>
                <router-link
                  to="/component/button"
                  class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Button
                </router-link>
                <router-link
                  to="/component/card"
                  class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Card
                </router-link>
                <router-link
                  to="/component/dropdown"
                  class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Dropdown
                </router-link>
                <router-link
                  to="/component/modal"
                  class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Modal
                </router-link>
              </template>
            </menu-accordion>
          </div>
          <div class="mt-3 item">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="ri:layout-2-fill" />
              </template>
              <template v-slot:title> Layouts </template>
              <template v-slot:content>
                <p>Coming soon.</p>
              </template>
            </menu-accordion>
          </div>
          <div class="mt-3 item">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="ri:pages-fill" />
              </template>
              <template v-slot:title> Pages </template>
              <template v-slot:content>
                <div class="">
                  <router-link
                    to="/blank"
                    class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Blank Page
                  </router-link>
                  <menu-accordion>
                    <template v-slot:title> Error Page </template>
                    <template v-slot:content>
                      <router-link
                        to="/404page"
                        class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        404 page
                      </router-link>
                      <router-link
                        to="/500"
                        class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        500 page
                      </router-link>
                      <router-link
                        to="/maintenance"
                        class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Maintenance page
                      </router-link>
                    </template>
                  </menu-accordion>
                  <menu-accordion>
                    <template v-slot:title> Authentication </template>
                    <template v-slot:content>
                      <router-link
                        to="/auth/login"
                        class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Login
                      </router-link>
                      <router-link
                        to="/auth/register"
                        class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Register
                      </router-link>
                      <router-link
                        to="/auth/forgot-password"
                        class="block w-full p-3 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Forgot Password
                      </router-link>
                    </template>
                  </menu-accordion>
                </div>
              </template>
            </menu-accordion>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <p class="mt-4 font-medium text-gray-400 dark:text-gray-400">
          UI Form & Tables
        </p>

        <div v-for="(route, index) in routes" :key="index" class="mt-3 item">
          <template v-if="route.children">
            <menu-accordion>
              <template v-slot:icon>
                <Icon :icon="route.icon" />
              </template>
              <template v-slot:title>{{ route.name }}</template>
              <template v-slot:content>
                <div
                  v-for="(child, childIndex) in route.children"
                  :key="childIndex"
                >
                  <router-link :to="child.path">
                    <button
                      class="box-border flex w-full p-3 text-left text-gray-800 bg-transparent rounded-md dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <span class="mr-3 text-xl">
                        <Icon icon="bi:table" />
                        <!-- You can use a different icon or remove it for children -->
                      </span>
                      <span class="w-full">{{ child.name }}</span>
                      <span class="box-border mt-1 text-gray-500"> </span>
                    </button>
                  </router-link>
                </div>
              </template>
            </menu-accordion>
          </template>
          <template v-else>
            <router-link :to="route.path">
              <button
                class="box-border flex w-full p-3 text-left text-gray-800 bg-transparent rounded-md dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <span class="mr-3 text-xl">
                  <Icon :icon="route.icon" />
                </span>
                <span class="w-full">{{ route.name }}</span>
                <span class="box-border mt-1 text-gray-500"> </span>
              </button>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import MenuAccordion from './MenuAccordion.vue'
const routes = ref([
  {
    name: 'Tables',
    path: '/tables',
    icon: 'bi:table',
  },
  {
    name: 'Forms',
    path: '/forms',
    icon: 'ant-design:form-outlined',
    children: [
      { name: 'Form Element 1', path: '/forms/element1' },
      { name: 'Form Element 2', path: '/forms/element2' },
    ],
  },
  // Add more routes as needed
])
</script>
