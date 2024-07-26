import apiClient from './api'

export const fetchFinancialReport = async (startDate, endDate) => {
  const response = await apiClient.get('/financial-report', {
    params: { startDate, endDate },
  })
  return response.data
}

// Other transaction related services can be added here
