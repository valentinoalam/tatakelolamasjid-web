<template>
  <div>
    <h1>Manajemen Kegiatan</h1>
    <router-link to="/activities/register">Pendaftaran Kegiatan</router-link>
    <router-link to="/activities/participants">Pengelolaan Peserta</router-link>
    <router-link to="/activities/documentation"
      >Dokumentasi Kegiatan</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'Activities',
}
</script>
