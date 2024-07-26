<template>
  <div>
    <h1>Manage Mudhohi</h1>
    <mudhohi-list></mudhohi-list>
  </div>
</template>

<script>
import MudhohiList from '@/components/MudhohiList.vue'

export default {
  name: 'DataMudhohi',
  components: {
    MudhohiList,
  },
}
</script>
