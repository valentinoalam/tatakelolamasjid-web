<template>
  <div>
    <h2>Rekap Berjalan</h2>
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
        labels: ['Keluarga', 'Perorangan', 'Titip'],
        datasets: [
          {
            label: 'Jumlah Hewan Qurban',
            backgroundColor: '#f87979',
            data: [40, 20, 10],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    )
  },
}
</script>
