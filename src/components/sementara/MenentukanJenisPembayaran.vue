<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Jenis Pembayaran</h1>
    <div class="space-y-2">
      <div class="flex justify-between items-center">
        <span>Tunai</span>
        <button class="bg-yellow-500 text-white py-1 px-2 rounded">Edit</button>
      </div>
      <div class="flex justify-between items-center">
        <span>Transfer</span>
        <button class="bg-yellow-500 text-white py-1 px-2 rounded">Edit</button>
      </div>
      <button class="bg-green-500 text-white py-2 px-4 rounded mt-4">
        Tambah Jenis Pembayaran
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenentukanJenisPembayaran',
}
</script>
