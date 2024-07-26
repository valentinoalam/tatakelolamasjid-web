<template>
  <aside class="w-64 bg-gray-800 text-white h-screen p-4">
    <ul>
      <li>
        <router-link to="/keuangan" class="block py-2 hover:bg-gray-700"
          >Manajemen Keuangan</router-link
        >
      </li>
      <li>
        <router-link to="/zakat" class="block py-2 hover:bg-gray-700"
          >Manajemen Zakat Fitrah dan Zakat Mal</router-link
        >
      </li>
      <li>
        <router-link to="/inventaris" class="block py-2 hover:bg-gray-700"
          >Manajemen Inventaris</router-link
        >
      </li>
      <li>
        <router-link to="/agenda" class="block py-2 hover:bg-gray-700"
          >Manajemen Agenda dan Kegiatan</router-link
        >
      </li>
      <li>
        <router-link to="/dokumentasi" class="block py-2 hover:bg-gray-700"
          >Dokumentasi Agenda Kegiatan</router-link
        >
      </li>
      <li>
        <router-link to="/mustahik" class="block py-2 hover:bg-gray-700"
          >Manajemen Mustahik dan Warga yang berhak disantuni</router-link
        >
      </li>
      <li>
        <router-link to="/akses" class="block py-2 hover:bg-gray-700"
          >Manajemen Akses/Role</router-link
        >
      </li>
      <li>
        <router-link to="/user" class="block py-2 hover:bg-gray-700"
          >Manajemen User</router-link
        >
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>
