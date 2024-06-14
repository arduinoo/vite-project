<template>
  <div>
    <button @click="getUser">get axios</button>
  </div>
  <hr />
  <div>{{ result }}</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getDataApi } from "../service/api";

const result = ref();

async function getUser() {
  try {
    const response = await getDataApi({
      key: 11111111111,
    });
    console.log(response);
    result.value = response;
  } catch (error) {
    console.error(error);
  }
}
</script>
<style></style>
