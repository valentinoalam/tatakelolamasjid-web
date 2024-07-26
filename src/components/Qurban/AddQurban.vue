<template>
  <div>
    <h2>Tambah Hewan Qurban</h2>
    <form @submit.prevent="addQurban">
      <label>Nama Hewan:</label>
      <input type="text" v-model="namaHewan" />

      <label>Harga per Hewan:</label>
      <input type="number" v-model="hargaHewan" />

      <label>Ukuran Hewan:</label>
      <input type="text" v-model="ukuranHewan" />

      <label>Orang per Hewan:</label>
      <input type="number" v-model="orangPerHewan" />

      <label>Ongkos Potong:</label>
      <input type="number" v-model="ongkosPotong" />

      <label>Jumlah Bungkus:</label>
      <input type="number" v-model="jumlahBungkus" />

      <label>Kode Hewan:</label>
      <input type="text" v-model="kodeHewan" />

      <label>Harga per Orang per Hewan:</label>
      <input type="number" :value="hargaPerOrang" disabled />

      <button type="submit">Simpan</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namaHewan: '',
      hargaHewan: 0,
      ukuranHewan: '',
      orangPerHewan: 1,
      ongkosPotong: 0,
      jumlahBungkus: 0,
      kodeHewan: '',
    }
  },
  computed: {
    hargaPerOrang() {
      return this.hargaHewan / this.orangPerHewan
    },
  },
  methods: {
    addQurban() {
      // Logic to add Qurban
    },
  },
}
</script>
