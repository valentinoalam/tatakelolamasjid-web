<template>
  <div>
    <h2>Laporan Tahunan ZISWAF</h2>
    <table>
      <tr>
        <th>Tahun</th>
        <th>Zakat Fitrah</th>
        <th>Zakat Maal</th>
        <th>Sadaqah</th>
        <th>Wakaf</th>
        <th>Fidyah</th>
      </tr>
      <tr v-for="laporan in laporanList" :key="laporan.tahun">
        <td>{{ laporan.tahun }}</td>
        <td>{{ laporan.zakatFitrah }}</td>
        <td>{{ laporan.zakatMaal }}</td>
        <td>{{ laporan.sadaqah }}</td>
        <td>{{ laporan.wakaf }}</td>
        <td>{{ laporan.fidyah }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      laporanList: [
        // Example data
        {
          tahun: 1445,
          zakatFitrah: 500000,
          zakatMaal: 2000000,
          sadaqah: 150000,
          wakaf: 3000000,
          fidyah: 50000,
        },
      ],
    }
  },
}
</script>
