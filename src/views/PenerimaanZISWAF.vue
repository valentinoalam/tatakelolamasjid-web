<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Penerimaan ZISWAF</h1>
    <div class="tabs mb-4">
      <button
        @click="activeTab = 'konfigurasi'"
        :class="tabClass('konfigurasi')"
      >
        Konfigurasi Aplikasi
      </button>
      <button @click="activeTab = 'data'" :class="tabClass('data')">
        Data Penerimaan
      </button>
      <button @click="activeTab = 'rekap'" :class="tabClass('rekap')">
        Rekap Tahun Berjalan
      </button>
      <button @click="activeTab = 'cara_bayar'" :class="tabClass('cara_bayar')">
        Cara Bayar
      </button>
    </div>
    <div v-if="activeTab === 'konfigurasi'">
      <div class="menu mb-4">
        <button @click="activeMenu = 'hijriah'" :class="menuClass('hijriah')">
          Hijriah
        </button>
        <button @click="activeMenu = 'petugas'" :class="menuClass('petugas')">
          Petugas
        </button>
        <button
          @click="activeMenu = 'jenis_pembayaran'"
          :class="menuClass('jenis_pembayaran')"
        >
          Jenis Pembayaran
        </button>
      </div>
      <div v-if="activeMenu === 'hijriah'">
        <!-- Form for Hijriah Configuration -->
      </div>
      <div v-if="activeMenu === 'petugas'">
        <!-- Form for Petugas Configuration -->
      </div>
      <div v-if="activeMenu === 'jenis_pembayaran'">
        <!-- Form for Jenis Pembayaran Configuration -->
      </div>
    </div>
    <div v-if="activeTab === 'data'">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-200">Date</th>
            <th class="py-2 px-4 bg-gray-200">Type</th>
            <th class="py-2 px-4 bg-gray-200">Amount</th>
            <th class="py-2 px-4 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Populate with data -->
        </tbody>
      </table>
      <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Download CSV
      </button>
      <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Print Thermal Receipt
      </button>
      <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Send via WhatsApp
      </button>
    </div>
    <div v-if="activeTab === 'rekap'">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-200">Type</th>
            <th class="py-2 px-4 bg-gray-200">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <!-- Populate with rekap data -->
        </tbody>
      </table>
    </div>
    <div v-if="activeTab === 'cara_bayar'">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-200">Payment Method</th>
            <th class="py-2 px-4 bg-gray-200">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <!-- Populate with cara bayar data -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'konfigurasi',
      activeMenu: 'hijriah',
    }
  },
  methods: {
    tabClass(tab) {
      return this.activeTab === tab
        ? 'bg-blue-500 text-white px-4 py-2 rounded'
        : 'bg-gray-200 px-4 py-2 rounded'
    },
    menuClass(menu) {
      return this.activeMenu === menu
        ? 'bg-blue-500 text-white px-4 py-2 rounded'
        : 'bg-gray-200 px-4 py-2 rounded'
    },
  },
}
</script>

<style>
.tabs button,
.menu button {
  margin-right: 4px;
}
</style>
