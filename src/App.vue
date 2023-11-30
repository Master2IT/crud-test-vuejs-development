<template>
  <div class="p-5">
    <div v-if="type === 'list'">
      <button class="bg-blue-500 text-white p-2 rounded" data-test-create-customer @click="()=> {
        type = 'form';
        formType = 'create'
      }">Create a new Customer
      </button>
      <Customers :customers="customersData" @handleEdit="handleEdit" @handleRemove="handleRemove"/>
    </div>
    <Form v-else-if="type === 'form'" :email="emailForUpdate" :type="formType" @handleCancel="type = 'list'"
          @handleSubmit="handleSubmit"/>
  </div>
</template>

<script setup>
import Customers from "@/components/Customers.vue";
import {ref} from "vue";
import Form from "@/components/Form.vue";
import {getAll} from "@/services/storage";

const type = ref('list') // list || form
const formType = ref('create') // create || update
const customersData = ref(getAll())
const emailForUpdate = ref(null)

const handleSubmit = () => {
  type.value = 'list'
  customersData.value = getAll()
}
const handleRemove = () => {
  customersData.value = getAll()
}
const handleEdit = email => {
  formType.value = 'update'
  type.value = 'form'
  emailForUpdate.value = email
}

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
