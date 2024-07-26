<template>
  <div class="p-4">
    <h1 class="mb-4 text-2xl font-bold">Rekap Tahun Berjalan</h1>
    <div class="mb-4">
      <label for="tahunHijriah" class="block text-sm font-medium text-gray-700"
        >Tahun Hijriah</label
      >
      <select
        id="tahunHijriah"
        class="block w-full p-2 mt-1 border border-gray-300 rounded-md"
      >
        <option>1442</option>
        <option>1443</option>
        <option>1444</option>
      </select>
    </div>
    <div class="p-4 bg-white rounded-md shadow-md">
      <h2 class="mb-2 text-xl font-bold">Grafik Batang</h2>
      <!-- Grafik Batang -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'RekapTahunBerjalan',
}
</script>
