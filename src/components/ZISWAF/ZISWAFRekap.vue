<template>
  <div>
    <h2>Rekap Tahun Berjalan</h2>
    <canvas id="rekapChart"></canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: ['Zakat Fitrah', 'Zakat Maal', 'Sadaqah', 'Wakaf', 'Fidyah'],
        datasets: [
          {
            label: 'Jumlah (Rp)',
            backgroundColor: '#42b983',
            data: [500000, 2000000, 150000, 3000000, 50000],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    )
  },
}
</script>
