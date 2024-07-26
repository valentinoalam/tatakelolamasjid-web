<template>
  <div>
    <h2>Tambah Data Mudhohi</h2>
    <form @submit.prevent="addMudhohi">
      <label>Tanggal Penerimaan:</label>
      <input type="date" v-model="tanggalPenerimaan" />

      <label>Jenis Hewan Qurban:</label>
      <select v-model="jenisHewan">
        <option value="Keluarga">Keluarga</option>
        <option value="Perorangan">Perorangan</option>
        <option value="Titip">Titip</option>
      </select>

      <label>Nama Mudhohi:</label>
      <input type="text" v-model="namaMudhohi" />

      <label>Alamat:</label>
      <input type="text" v-model="alamatMudhohi" />

      <label>No Telepon:</label>
      <input type="text" v-model="noTeleponMudhohi" />

      <label>No Hewan:</label>
      <input type="text" v-model="noHewan" />

      <label>Cara Pembayaran:</label>
      <select v-model="caraPembayaran">
        <option value="Tunai">Tunai</option>
        <option value="Transfer">Transfer</option>
      </select>

      <label v-if="caraPembayaran === 'Transfer'">Foto Bukti Transfer:</label>
      <input
        v-if="caraPembayaran === 'Transfer'"
        type="file"
        @change="onFileChange"
      />

      <label>QR Code:</label>
      <input type="text" :value="qrCode" disabled />

      <label>Nilai Total Pembayaran:</label>
      <input type="number" :value="totalPembayaran" disabled />

      <button type="submit">Simpan</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tanggalPenerimaan: '',
      jenisHewan: '',
      namaMudhohi: '',
      alamatMudhohi: '',
      noTeleponMudhohi: '',
      noHewan: '',
      caraPembayaran: 'Tunai',
      buktiTransfer: null,
      qrCode: 'QR-CODE-GENERATED',
      totalPembayaran: 0,
    }
  },
  methods: {
    onFileChange(event) {
      this.buktiTransfer = event.target.files[0]
    },
    addMudhohi() {
      // Logic to add Mudhohi
    },
  },
}
</script>
