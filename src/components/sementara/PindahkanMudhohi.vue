<template>
  <div class="max-w-md mx-auto p-4">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="bg-gray-800 text-white text-center py-4">
        <h1 class="text-xl font-semibold">Pindahkan Mudhohi</h1>
      </div>
      <div class="p-4">
        <form @submit.prevent="simpanPindahan">
          <div class="mb-4">
            <label class="block text-gray-700">Jenis Hewan Baru:</label>
            <select
              v-model="jenisHewanBaru"
              class="w-full mt-1 p-2 border rounded"
            >
              <option>Sapi</option>
              <option>Kambing</option>
              <!-- Tambahkan opsi lainnya jika perlu -->
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">No Hewan Baru:</label>
            <input
              v-model="noHewanBaru"
              class="w-full mt-1 p-2 border rounded"
              type="text"
            />
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
  name: 'PindahkanMudhohi',
  data() {
    return {
      jenisHewanBaru: '',
      noHewanBaru: '',
    }
  },
  methods: {
    simpanPindahan() {
      // Implementasi penyimpanan data pindahan mudhohi
      alert('Data pindahan Mudhohi berhasil disimpan!')
    },
  },
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
