<template>
  <div class="max-w-md mx-auto p-4">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="bg-gray-800 text-white text-center py-4">
        <h1 class="text-xl font-semibold">Tambah Hewan Qurban</h1>
      </div>
      <div class="p-4">
        <form @submit.prevent="simpanHewan">
          <div class="mb-4">
            <label class="block text-gray-700">Nama Hewan:</label>
            <input
              v-model="namaHewan"
              class="w-full mt-1 p-2 border rounded"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Harga per Hewan:</label>
            <input
              v-model="hargaPerHewan"
              class="w-full mt-1 p-2 border rounded"
              type="number"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Ukuran Hewan:</label>
            <input
              v-model="ukuranHewan"
              class="w-full mt-1 p-2 border rounded"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Orang per Hewan:</label>
            <input
              v-model="orangPerHewan"
              class="w-full mt-1 p-2 border rounded"
              type="number"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Ongkos Potong:</label>
            <input
              v-model="ongkosPotong"
              class="w-full mt-1 p-2 border rounded"
              type="number"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Jumlah Bungkus:</label>
            <input
              v-model="jumlahBungkus"
              class="w-full mt-1 p-2 border rounded"
              type="number"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Kode Hewan:</label>
            <input
              v-model="kodeHewan"
              class="w-full mt-1 p-2 border rounded"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700"
              >Harga per Orang per Hewan:</label
            >
            <div class="w-full mt-1 p-2 border rounded bg-gray-100">
              {{ hargaPerOrang }}
            </div>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TambahHewanQurban',
  data() {
    return {
      namaHewan: '',
      hargaPerHewan: 0,
      ukuranHewan: '',
      orangPerHewan: 1,
      ongkosPotong: 0,
      jumlahBungkus: 0,
      kodeHewan: '',
    }
  },
  computed: {
    hargaPerOrang() {
      return this.orangPerHewan > 0
        ? (this.hargaPerHewan + this.ongkosPotong) / this.orangPerHewan
        : 0
    },
  },
  methods: {
    simpanHewan() {
      // Implementasi penyimpanan data
      alert('Data Hewan Qurban berhasil disimpan!')
    },
  },
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
