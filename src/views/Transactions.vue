<template>
  <div>
    <h1>Transactions</h1>
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<script>
import TransactionList from '../components/Accounting/TransactionList.vue'
import AddTransaction from '../components/Accounting/AddTransaction.vue'

export default {
  components: {
    TransactionList,
    AddTransaction,
  },
}
</script>
