<template>
  <div>
    <h1>Manage Penerimaan ZISWAF</h1>
    <ziswaf-config></ziswaf-config>
    <ziswaf-list></ziswaf-list>
    <ziswaf-rekap></ziswaf-rekap>
    <ziswaf-cara-bayar></ziswaf-cara-bayar>
    <ziswaf-laporan-tahunan></ziswaf-laporan-tahunan>
  </div>
</template>

<script>
import ZISWAFConfig from '@/components/ZISWAFConfig.vue'
import ZISWAFList from '@/components/ZISWAFList.vue'
import ZISWAFRekap from '@/components/ZISWAFRekap.vue'
import ZISWAFCaraBayar from '@/components/ZISWAFCaraBayar.vue'
import ZISWAFLaporanTahunan from '@/components/ZISWAFLaporanTahunan.vue'

export default {
  components: {
    ZISWAFConfig,
    ZISWAFList,
    ZISWAFRekap,
    ZISWAFCaraBayar,
    ZISWAFLaporanTahunan,
  },
}
</script>
