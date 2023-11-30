<template>
  <table class="my-5 border border-collapse w-full table">
    <thead>
    <tr>
      <th class="border text-sm p-3">First Name</th>
      <th class="border text-sm p-3">Last Name</th>
      <th class="border text-sm p-3">Date of Birth</th>
      <th class="border text-sm p-3">Phone Number</th>
      <th class="border text-sm p-3">Email</th>
      <th class="border text-sm p-3">Bank Account Number</th>
      <th class="border text-sm p-3">-</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(customer, i) in customers" :key="i">
      <td class="border text-center text-sm p-5">{{ customer.firstName }}</td>
      <td class="border text-center text-sm p-5">{{ customer.lastName }}</td>
      <td class="border text-center text-sm p-5">{{ customer.dateOfBirth }}</td>
      <td class="border text-center text-sm p-5">{{ customer.phoneNumber }}</td>
      <td class="border text-center text-sm p-5">{{ customer.email }}</td>
      <td class="border text-center text-sm p-5">{{ customer.bankAccountNumber }}</td>
      <td class="border text-center text-sm p-5 flex gap-2">
        <button class="p-2 rounded bg-gray-500 text-white" data-test-update-customer
                @click="()=> emit('handleEdit', customer.email)">Update
        </button>
        <button class="p-2 rounded bg-red-500 text-white" data-test-delete-customer
                @click="()=> handleRemoveCustomer(customer.email)">Remove
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script setup>
import {defineProps, defineEmits} from "vue";
import {removeFromStorage} from "@/services/storage";

// eslint-disable-next-line
const {customers = []} = defineProps(['customers'])
const emit = defineEmits(['handleRemove', 'handleEdit'])

const handleRemoveCustomer = (email) => {
  const isConfirm = confirm("Are you sure?");
  if (isConfirm) {
    removeFromStorage(email)
    emit('handleRemove')
  }
}
</script>