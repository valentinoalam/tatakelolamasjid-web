<template>
  <div class="p-4">
    <h1 class="mb-4 text-2xl font-bold">Data Penerimaan Zakat</h1>
    <div class="flex justify-between mb-4">
      <button
        @click="onTambahPenerimaan"
        class="px-4 py-2 text-white bg-green-500 rounded"
      >
        Tambah Penerimaan
      </button>
      <button
        @click="onUnduhData"
        class="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Unduh Data
      </button>
    </div>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2">ID</th>
          <th class="py-2">Jenis Zakat</th>
          <th class="py-2">Jumlah</th>
          <th class="py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in penerimaanData" :key="data.id" class="text-center">
          <td class="py-2">{{ data.id }}</td>
          <td class="py-2">{{ data.jenisZakat }}</td>
          <td class="py-2">{{ data.jumlah }}</td>
          <td class="py-2 space-x-2">
            <button
              @click="onCetak(data.id)"
              class="px-2 py-1 text-white bg-gray-500 rounded"
            >
              Cetak
            </button>
            <button
              @click="onWhatsApp(data.id)"
              class="px-2 py-1 text-white bg-green-500 rounded"
            >
              WhatsApp
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataPenerimaanZakat',
  data() {
    return {
      penerimaanData: [
        { id: 1, jenisZakat: 'Zakat Fitrah', jumlah: 'Rp xxx' },
        { id: 2, jenisZakat: 'Zakat Maal', jumlah: 'Rp xxx' },
        { id: 3, jenisZakat: 'Sadaqah', jumlah: 'Rp xxx' },
      ],
    }
  },
  methods: {
    onTambahPenerimaan() {
      // Logika untuk menambah penerimaan
    },
    onUnduhData() {
      // Logika untuk mengunduh data
    },
    onCetak(id) {
      if (confirm(`Apakah Anda yakin ingin mencetak data dengan ID ${id}?`)) {
        // Logika untuk mencetak data
        alert(`Data dengan ID ${id} berhasil dicetak!`)
      }
    },
    onWhatsApp(id) {
      if (
        confirm(
          `Apakah Anda yakin ingin mengirim data dengan ID ${id} ke WhatsApp?`
        )
      ) {
        // Logika untuk mengirim data ke WhatsApp
        alert(`Data dengan ID ${id} berhasil dikirim ke WhatsApp!`)
      }
    },
  },
}
</script>
