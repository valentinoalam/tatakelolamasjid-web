<template>
  <div class="max-w-4xl mx-auto p-4">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="bg-gray-800 text-white text-center py-4">
        <h1 class="text-xl font-semibold">Daftar Pindahan</h1>
      </div>
      <div class="overflow-x-auto p-4">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="w-1/3 py-2">Nama</th>
              <th class="w-1/3 py-2">Jenis Hewan</th>
              <th class="w-1/3 py-2">No</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr>
              <td class="border px-4 py-2">Ahmad</td>
              <td class="border px-4 py-2">Sapi</td>
              <td class="border px-4 py-2">01</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Budi</td>
              <td class="border px-4 py-2">Kambing</td>
              <td class="border px-4 py-2">02</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="p-4 text-center">
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Pindahkan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaftarPindahan',
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
