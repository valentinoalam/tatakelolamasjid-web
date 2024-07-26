<template>
  <div class="p-4">
    <h1 class="mb-4 text-2xl font-bold">Laporan Tahunan</h1>
    <div class="mb-4">
      <label for="tahun" class="block text-sm font-medium text-gray-700"
        >Tahun</label
      >
      <select
        id="tahun"
        class="block w-full p-2 mt-1 border border-gray-300 rounded-md"
      >
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
    </div>
    <div class="p-4 bg-white rounded-md shadow-md">
      <h2 class="mb-2 text-xl font-bold">Tabel Laporan Penerimaan</h2>
      <!-- Tabel Laporan Penerimaan -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LaporanTahunan',
}
</script>
