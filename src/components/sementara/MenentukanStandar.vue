<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">
      Menentukan Standar Rupiah & KG Beras
    </h1>
    <div class="space-y-4">
      <div>
        <label for="rupiah" class="block text-sm font-medium text-gray-700"
          >Rupiah Beras</label
        >
        <input
          v-model="form.rupiah"
          id="rupiah"
          type="text"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        <span
          v-if="!$v.form.rupiah.required && $v.form.rupiah.$error"
          class="text-red-500 text-sm"
          >Rupiah beras diperlukan.</span
        >
        <span
          v-if="!$v.form.rupiah.numeric && $v.form.rupiah.$error"
          class="text-red-500 text-sm"
          >Rupiah harus berupa angka.</span
        >
      </div>
      <div>
        <label for="kg" class="block text-sm font-medium text-gray-700"
          >KG Beras</label
        >
        <input
          v-model="form.kg"
          id="kg"
          type="text"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        <span
          v-if="!$v.form.kg.required && $v.form.kg.$error"
          class="text-red-500 text-sm"
          >KG beras diperlukan.</span
        >
        <span
          v-if="!$v.form.kg.numeric && $v.form.kg.$error"
          class="text-red-500 text-sm"
          >KG harus berupa angka.</span
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
  name: 'MenentukanStandar',
  data() {
    return {
      form: {
        rupiah: '',
        kg: '',
      },
    }
  },
  validations() {
    return {
      form: {
        rupiah: { required, numeric },
        kg: { required, numeric },
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
