<template>
  <form class="form flex flex-col gap-5" @submit="handleSubmitForm">
    <h1>{{ type }} Customer</h1>
    <input v-model="form.firstName" class="p-3 w-full border rounded" placeholder="First Name"
           type="text"/>
    <input v-model="form.lastName" class="p-3 w-full border rounded" placeholder="Last Name" type="text"/>
    <input v-model="form.dateOfBirth" class="p-3 w-full border rounded" placeholder="Date of Birth"
           type="text"/>
    <input v-model="form.phoneNumber" class="p-3 w-full border rounded" placeholder="Phone Number"
           type="text"/>
    <input v-model="form.email" class="p-3 w-full border rounded" placeholder="Email" type="text"/>
    <input v-model="form.bankAccountNumber" class="p-3 w-full border rounded"
           placeholder="Bank Account Number"
           type="text"/>
    <button class="p-2 rounded bg-blue-500 text-white">Submit</button>
  </form>
</template>
<script setup>
import {ref, defineEmits, defineProps} from 'vue'
import {getOne} from "@/services/storage";

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

const validateForm = () => {
  let isValid = true;
  if (!form.value.firstName ||
      !form.value.lastName ||
      !form.value.dateOfBirth ||
      !form.value.phoneNumber ||
      !form.value.email ||
      !form.value.bankAccountNumber) {
    alert("All fields are required!")
    isValid = false;
  }
  if (!form.value.email.toLowerCase()
      .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
    alert('Email is not valid!')
    isValid = false;
  }
  if (!form.value.bankAccountNumber.toLowerCase().match(/^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/)) {
    alert("Account number is not valid!")
    isValid = false;
  }

  const customer = getOne(form.value.email);

  // Validate email
  if (customer) {
    alert("Email is duplicated!")
    isValid = false;
  }

  if (customer && customer.firstName === form.value.firstName) {
    alert("First Name is duplicated!")
    isValid = false;
  }
  if (customer && customer.lastName === form.value.lastName) {
    alert("Last Name is duplicated!")
    isValid = false;
  }
  if (customer && customer.bankAccountNumber === form.value.bankAccountNumber) {
    alert("Account Number is duplicated!")
    isValid = false;
  }

  return isValid
}
const handleSubmitForm = e => {
  e.preventDefault()

  if (validateForm()) {

  }
}

</script>