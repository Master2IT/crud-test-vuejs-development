<template>
  <form class="form flex flex-col gap-5" @submit="handleSubmitForm">
    <h1>{{ type }} Customer</h1>
    <input id="firstname" v-model="form.firstName" class="p-3 w-full border rounded" placeholder="First Name"
           type="text"/>
    <input id="lastname" v-model="form.lastName" class="p-3 w-full border rounded" placeholder="Last Name" type="text"/>
    <input id="dateofbirth" v-model="form.dateOfBirth" class="p-3 w-full border rounded" placeholder="Date of Birth"
           type="text"/>
    <input id="phonenumber" v-model="form.phoneNumber" class="p-3 w-full border rounded" placeholder="Phone Number"
           type="text"/>
    <input id="email" v-model="form.email" class="p-3 w-full border rounded" placeholder="Email" type="text"/>
    <input id="bankaccountnumber" v-model="form.bankAccountNumber" class="p-3 w-full border rounded" placeholder="Bank Account Number"
           type="text"/>
    <button class="p-2 rounded bg-blue-500 text-white">Submit</button>
  </form>
</template>
<script setup>
import {ref, defineEmits, defineProps} from 'vue'

const {type} = defineProps(['type']);
const emit = defineEmits(['handleSubmit'])

const form = ref({
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phoneNumber: '',
  email: '',
  bankAccountNumber: ''
})

const handleSubmitForm = e => {
  e.preventDefault()
  emit('handleSubmit', form.value)
}

</script>