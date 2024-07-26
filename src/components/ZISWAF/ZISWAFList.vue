<template>
  <div>
    <h2>Data Penerimaan ZISWAF</h2>
    <button @click="downloadData">Unduh Data</button>
    <table>
      <tr>
        <th>Jenis Zakat</th>
        <th>Jumlah</th>
        <th>Satuan</th>
      </tr>
      <tr v-for="ziswaf in ziswafList" :key="ziswaf.id">
        <td>{{ ziswaf.jenis }}</td>
        <td>{{ ziswaf.jumlah }}</td>
        <td>{{ ziswaf.satuan }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ziswafList: [
        // Example data
        { id: 1, jenis: 'Zakat Fitrah (Rp)', jumlah: 500000, satuan: 'Rp' },
        { id: 2, jenis: 'Zakat Fitrah Beras (kg)', jumlah: 100, satuan: 'kg' },
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
