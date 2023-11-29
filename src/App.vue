<template>
  <div class="p-5">
    <div v-if="type === 'list'">
      <button class="bg-blue-500 text-white p-2 rounded" @click="type = 'form'">Create a new Customer</button>
      <Customers/>
    </div>
    <Form v-else-if="type === 'form'" type="Create" @handleSubmit="handleSubmit"/>
  </div>
</template>

<script setup>
import Customers from "@/components/Customers.vue";
import {ref} from "vue";
import Form from "@/components/Form.vue";

const type = ref('form')
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
