<template>
  <div>
    <div>
      <router-link to="/">跳转A</router-link>
      <router-link style="margin-left: 10px" to="/register/item">
        跳转C
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts"></script>
