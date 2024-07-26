<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Manajemen Keuangan</h1>
    <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">
      Add New Financial Record
    </button>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 bg-gray-200">Date</th>
          <th class="py-2 px-4 bg-gray-200">Description</th>
          <th class="py-2 px-4 bg-gray-200">Amount</th>
          <th class="py-2 px-4 bg-gray-200">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Populate with financial records -->
        <tr>
          <td class="border px-4 py-2">2024-07-01</td>
          <td class="border px-4 py-2">Donation</td>
          <td class="border px-4 py-2">$100</td>
          <td class="border px-4 py-2">
            <button class="bg-green-500 text-white px-2 py-1 rounded">
              Edit
            </button>
            <button class="bg-red-500 text-white px-2 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ManajemenKeuangan',
}
</script>
