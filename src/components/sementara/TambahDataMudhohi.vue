<template>
  <div class="max-w-lg p-4 mx-auto bg-white rounded-lg shadow-md">
    <h1 class="mb-4 text-2xl font-semibold">Tambah Data Mudhohi</h1>
    <form @submit.prevent="simpanData">
      <!-- Tanggal Penerimaan -->
      <div class="mb-4">
        <label class="block text-gray-700">Tanggal Penerimaan</label>
        <input
          type="date"
          v-model="tanggalPenerimaan"
          class="w-full p-2 mt-1 border rounded"
        />
      </div>

      <!-- Jenis Hewan Qurban -->
      <div class="mb-4">
        <label class="block text-gray-700">Jenis Hewan Qurban</label>
        <div class="flex mt-1 space-x-4">
          <label class="flex items-center">
            <input
              type="radio"
              v-model="jenisHewan"
              value="Kambing"
              class="form-radio"
            />
            <span class="ml-2">Kambing</span>
          </label>
          <label class="flex items-center">
            <input
              type="radio"
              v-model="jenisHewan"
              value="Sapi"
              class="form-radio"
            />
            <span class="ml-2">Sapi</span>
          </label>
        </div>
      </div>

      <!-- Nama Mudhohi -->
      <div class="mb-4">
        <label class="block text-gray-700">Nama Mudhohi</label>
        <input
          type="text"
          v-model="namaMudhohi"
          class="w-full p-2 mt-1 border rounded"
        />
      </div>

      <!-- Alamat -->
      <div class="mb-4">
        <label class="block text-gray-700">Alamat</label>
        <textarea
          v-model="alamat"
          rows="3"
          class="w-full p-2 mt-1 border rounded"
        ></textarea>
      </div>

      <!-- No Telepon -->
      <div class="mb-4">
        <label class="block text-gray-700">No Telepon</label>
        <input
          type="text"
          v-model="noTelepon"
          class="w-full p-2 mt-1 border rounded"
        />
      </div>

      <!-- No Hewan -->
      <div class="mb-4">
        <label class="block text-gray-700">No Hewan</label>
        <input
          type="number"
          v-model="noHewan"
          class="w-full p-2 mt-1 border rounded"
        />
      </div>

      <!-- Cara Pembayaran -->
      <div class="mb-4">
        <label class="block text-gray-700">Cara Pembayaran</label>
        <select v-model="caraPembayaran" class="w-full p-2 mt-1 border rounded">
          <option value="transfer bsi">Transfer BSI</option>
          <option value="transfer mandiri">Transfer Mandiri</option>
          <option value="transfer bri">Transfer BRI</option>
        </select>
      </div>

      <!-- Foto Bukti Transfer -->
      <div class="mb-4">
        <label class="block text-gray-700">Foto Bukti Transfer</label>
        <input
          type="file"
          @change="handleFileUpload"
          class="w-full p-2 mt-1 border rounded"
        />
      </div>

      <!-- QR Code -->
      <div class="mb-4">
        <label class="block text-gray-700">QR Code:</label>
        <p>[Dihasilkan Otomatis]</p>
      </div>

      <!-- Nilai Total Pembayaran -->
      <div class="mb-4">
        <label class="block text-gray-700">Nilai Total Pembayaran:</label>
        <p>[Dihitung Otomatis]</p>
      </div>

      <!-- Tombol Simpan -->
      <div class="text-center">
        <button
          type="submit"
          class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tanggalPenerimaan: '',
      jenisHewan: '',
      namaMudhohi: '',
      alamat: '',
      noTelepon: '',
      noHewan: '',
      caraPembayaran: '',
      fileBuktiTransfer: null,
    }
  },
  methods: {
    handleFileUpload(event) {
      this.fileBuktiTransfer = event.target.files[0]
    },
    simpanData() {
      // Implementasi penyimpanan data
      alert('Data Mudhohi berhasil disimpan!')
    },
  },
}
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>
