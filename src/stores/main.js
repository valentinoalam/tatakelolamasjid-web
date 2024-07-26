import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    inventoryHistory: [],
    activities: [],
    participants: [],
    activityDocumentation: [],
    qurbanAnimals: [],
    qurbanParticipants: [],
    qurbanDistribution: [],
    qurbanHistory: [],
    muzakki: [],
    zakatReceipts: [],
    zakatDistribution: [],
    zakatReports: [],
    cashFlow: [],
    financialReports: [],
    budgets: [],
    users: [],
    roles: [],
    positions: [],
    username: 'user123',
    email: 'user@example.com',
    theme: 'light',
    language: 'en',
  }),
  actions: {
    updateAccount({ username, email, password }) {
      // Logic untuk memperbarui akun pengguna
      this.username = username
      this.email = email
      if (password) {
        // Update password jika ada
      }
      alert('Akun berhasil diperbarui')
    },
    updateSettings({ theme, language }) {
      // Logic untuk memperbarui pengaturan aplikasi
      this.theme = theme
      this.language = language
      alert('Pengaturan berhasil diperbarui')
    },
    backupData() {
      // Logic untuk backup data
      alert('Data berhasil di-backup')
    },
    restoreData() {
      // Logic untuk restore data
      alert('Data berhasil di-restore')
    },
  },
})
