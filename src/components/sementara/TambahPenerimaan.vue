<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Tambah Penerimaan Zakat</h1>
    <div class="space-y-4">
      <div>
        <label for="jenisZakat" class="block text-sm font-medium text-gray-700"
          >Jenis Zakat</label
        >
        <select
          v-model="form.jenisZakat"
          id="jenisZakat"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Pilih Jenis Zakat</option>
          <option>Zakat Fitrah</option>
          <option>Zakat Maal</option>
          <option>Sadaqah</option>
        </select>
        <span
          v-if="!$v.form.jenisZakat.required && $v.form.jenisZakat.$error"
          class="text-red-500 text-sm"
          >Jenis Zakat diperlukan.</span
        >
      </div>
      <div>
        <label for="jumlah" class="block text-sm font-medium text-gray-700"
          >Jumlah</label
        >
        <input
          v-model="form.jumlah"
          id="jumlah"
          type="text"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        <span
          v-if="!$v.form.jumlah.required && $v.form.jumlah.$error"
          class="text-red-500 text-sm"
          >Jumlah diperlukan.</span
        >
        <span
          v-if="!$v.form.jumlah.numeric && $v.form.jumlah.$error"
          class="text-red-500 text-sm"
          >Jumlah harus berupa angka.</span
        >
      </div>
      <button
        @click="onSubmit"
        class="bg-green-500 text-white py-2 px-4 rounded"
      >
        Simpan
      </button>
    </div>
  </div>
</template>

<script>
import { required, numeric } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

export default {
  name: 'TambahPenerimaan',
  data() {
    return {
      form: {
        jenisZakat: '',
        jumlah: '',
      },
    }
  },
  validations() {
    return {
      form: {
        jenisZakat: { required },
        jumlah: { required, numeric },
      },
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('Formulir tidak valid. Mohon periksa kembali isian Anda.')
        return
      }
      if (confirm('Apakah Anda yakin ingin menyimpan data ini?')) {
        // Simpan data
        alert('Data berhasil disimpan!')
      }
    },
  },
  setup() {
    return { $v: useVuelidate() }
  },
}
</script>
