<template>
  <div>
    <h1>Riwayat Inventaris</h1>
    <ul>
      <li v-for="item in inventoryHistory" :key="item.id">
        {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useMainStore } from '@/stores/main'

export default {
  name: 'InventoryHistory',
  setup() {
    const store = useMainStore()
    return {
      inventoryHistory: store.inventoryHistory,
    }
  },
}
</script>
