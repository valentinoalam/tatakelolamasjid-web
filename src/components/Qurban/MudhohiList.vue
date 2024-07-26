<template>
  <div class="max-w-4xl p-4 mx-auto">
    <div class="overflow-hidden bg-white rounded-lg shadow-md">
      <div class="py-4 text-center text-white bg-gray-800">
        <h1 class="text-xl font-semibold">Data Mudhohi</h1>
      </div>
      <div class="flex justify-between p-4">
        <button
          @click="$router.push('/add-mudhohi')"
          class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Tambah Mudhohi
        </button>
        <button
          @click="downloadData"
          class="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring"
        >
          Unduh Data
        </button>
      </div>

      <table>
        <tr>
          <th>Tanggal</th>
          <th>Jenis Hewan</th>
          <th>Nama</th>
        </tr>
        <tr v-for="mudhohi in mudhohiList" :key="mudhohi.id">
          <td>{{ mudhohi.tanggal }}</td>
          <td>{{ mudhohi.jenisHewan }}</td>
          <td>{{ mudhohi.nama }}</td>
        </tr>
      </table>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="text-white bg-gray-800">
            <tr>
              <th class="w-1/3 py-2">Tanggal</th>
              <th class="w-1/3 py-2">Jenis Hewan</th>
              <th class="w-1/3 py-2">Nama</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr>
              <td class="px-4 py-2 border">01/01/1445H</td>
              <td class="px-4 py-2 border">Keluarga</td>
              <td class="px-4 py-2 border">Ahmad</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2 border">02/01/1445H</td>
              <td class="px-4 py-2 border">Perorangan</td>
              <td class="px-4 py-2 border">Budi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mudhohiList: [
        // Example data
        {
          id: 1,
          tanggal: '01/01/1445H',
          jenisHewan: 'Keluarga',
          nama: 'Ahmad',
        },
        {
          id: 2,
          tanggal: '02/01/1445H',
          jenisHewan: 'Perorangan',
          nama: 'Budi',
        },
      ],
    }
  },
  methods: {
    downloadData() {
      // Logic to download data in .csv format
    },
  },
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
