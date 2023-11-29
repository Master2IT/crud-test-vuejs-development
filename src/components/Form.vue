<template>
  <form class="form flex flex-col gap-5" @submit="handleSubmitForm">
    <h1><span class="capitalize">{{ type }}</span> Customer</h1>
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
    <div class="flex gap-2 justify-end">
      <button class="p-2 rounded bg-gray-500 text-white" type="button" @click="emit('handleCancel')">Cancel</button>
      <button class="p-2 px-10 rounded bg-blue-500 text-white">Submit</button>
    </div>
  </form>
</template>
<script setup>
import {ref, defineEmits, defineProps, onMounted} from 'vue'
import {addToStorage, getOne, updateStorage} from "@/services/storage";

const {type, email} = defineProps(['type', 'email']);
const emit = defineEmits(['handleSubmit', 'handleCancel'])

const form = ref({
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phoneNumber: '',
  email: '',
  bankAccountNumber: ''
})

onMounted(() => {
  if (type === 'update') {
    email && (form.value = getOne(email))
  } else {
    form.value = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '',
      email: '',
      bankAccountNumber: ''
    }
  }
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
  if (customer && customer.email !== form.value.email) {
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
  if (customer && customer.DateOfBirth === form.value.DateOfBirth) {
    alert("Date of Birth is duplicated!")
    isValid = false;
  }

  return isValid
}
const handleSubmitForm = e => {
  e.preventDefault()

  if (validateForm()) {
    if (type === 'create') {
      addToStorage(form.value);
      alert('Customer created successfully.')
      emit('handleSubmit')
    }
    if (type === 'update') {
      updateStorage(form);
      alert('Customer updated successfully.')
      emit('handleSubmit')
    }
  }
}

</script>