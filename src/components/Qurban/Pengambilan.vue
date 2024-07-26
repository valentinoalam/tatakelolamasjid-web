<template>
  <div>
    <h2>Pengambilan Hak Mudhohi</h2>
    <input type="text" placeholder="Scan QR Code" v-model="qrCode" />
    <button @click="validatePengambilan">Validasi Pengambilan</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qrCode: '',
    }
  },
  methods: {
    validatePengambilan() {
      // Logic to validate pengambilan
    },
  },
}
</script>
