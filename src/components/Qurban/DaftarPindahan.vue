<template>
  <div>
    <h2>Daftar Pindahan</h2>
    <table>
      <tr>
        <th>Nama</th>
        <th>Jenis Hewan</th>
        <th>No</th>
        <th>Aksi</th>
      </tr>
      <tr v-for="mudhohi in pindahanList" :key="mudhohi.id">
        <td>{{ mudhohi.nama }}</td>
        <td>{{ mudhohi.jenisHewan }}</td>
        <td>{{ mudhohi.noHewan }}</td>
        <td><button @click="pindahkanMudhohi(mudhohi)">Pindahkan</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pindahanList: [
        // Example data
        { id: 1, nama: 'Ahmad', jenisHewan: 'Sapi', noHewan: '01' },
        { id: 2, nama: 'Budi', jenisHewan: 'Kambing', noHewan: '02' },
      ],
    }
  },
  methods: {
    pindahkanMudhohi(mudhohi) {
      // Logic to move Mudhohi
    },
  },
}
</script>
