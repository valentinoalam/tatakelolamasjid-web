<template>
  <div>
    <h1>Manage Qurban</h1>
    <config-menu></config-menu>
    <qurban-list></qurban-list>
  </div>
</template>

<script>
import ConfigMenu from '@/components/Qurban/ConfigMenu.vue'
import QurbanList from '@/components/Qurban/QurbanList.vue'

export default {
  components: {
    ConfigMenu,
    QurbanList,
  },
}
</script>
