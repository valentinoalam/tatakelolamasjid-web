<template>
  <div>
    <h2>Cara Bayar ZISWAF</h2>
    <canvas id="caraBayarChart"></canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: ['Tunai', 'Transfer'],
        datasets: [
          {
            label: 'Jumlah (Rp)',
            backgroundColor: '#f87979',
            data: [5000000, 2000000],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    )
  },
}
</script>
