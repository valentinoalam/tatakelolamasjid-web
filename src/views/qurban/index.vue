<template>
  <div class="max-w-4xl p-4 mx-auto">
    <h1>Welcome to Qurban Management</h1>
    <router-link to="/qurban">Manage Qurban</router-link>
    <router-link to="/mudhohi">Manage Mudhohi</router-link>
    <router-link to="/rekap">Rekap Berjalan</router-link>
    <router-link to="/pindahan">Daftar Pindahan</router-link>
    <router-link to="/pengambilan">Pengambilan Hak Mudhohi</router-link>
    <div class="overflow-hidden bg-white rounded-lg shadow-md">
      <div class="py-4 text-center text-white bg-gray-800">
        <h1 class="text-xl font-semibold">Daftar Hewan Qurban</h1>
      </div>
      <div class="p-4">
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Tambah Hewan Qurban
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="text-white bg-gray-800">
            <tr>
              <th class="w-1/4 py-2">Nama</th>
              <th class="w-1/4 py-2">Harga</th>
              <th class="w-1/4 py-2">Ukuran</th>
              <th class="w-1/4 py-2">Kode</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr>
              <td class="px-4 py-2 border">Kambing A</td>
              <td class="px-4 py-2 border">Rp xxx</td>
              <td class="px-4 py-2 border">Sedang</td>
              <td class="px-4 py-2 border">KAMBING</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-4 py-2 border">Sapi B</td>
              <td class="px-4 py-2 border">Rp yyy</td>
              <td class="px-4 py-2 border">Besar</td>
              <td class="px-4 py-2 border">SAPI</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaftarHewanQurban',
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
