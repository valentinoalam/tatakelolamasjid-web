<template>
  <div>
    <h1>Welcome to Financial Report App</h1>
    <router-link to="/qurban">Manage Qurban</router-link>
    <router-link to="/mudhohi">Manage Mudhohi</router-link>
    <router-link to="/rekap">Rekap Berjalan</router-link>
    <router-link to="/pindahan">Daftar Pindahan</router-link>
    <router-link to="/pengambilan">Pengambilan Hak Mudhohi</router-link>
    <router-link to="/ziswaf">Manage ZISWAF</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
