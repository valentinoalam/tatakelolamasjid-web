<template>
  <div>
    <h2>Konfigurasi ZISWAF</h2>
    <form @submit.prevent="saveConfig">
      <label>Standar Rupiah Beras:</label>
      <input type="number" v-model="rupiahBeras" />

      <label>Standar Kg Beras:</label>
      <input type="number" v-model="kgBeras" />

      <label>Petugas Penerima Zakat:</label>
      <input type="text" v-model="petugas" />

      <label>Jenis Pembayaran:</label>
      <input type="text" v-model="jenisPembayaran" />

      <button type="submit">Simpan</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rupiahBeras: 0,
      kgBeras: 0,
      petugas: '',
      jenisPembayaran: '',
    }
  },
  methods: {
    saveConfig() {
      // Logic to save configuration
    },
  },
}
</script>
