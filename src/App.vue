<template>
  <div>
    <h1>vue-router</h1>
    <div>
      <template v-for="item in list">
        <!-- <router-link tag="div" :to="{ name: item.name }">
          <button style="margin-left: 10px">跳转{{ item.name }}</button>
        </router-link> -->
        <button style="margin-left: 10px" @click="toPage(item.url)">
          跳转{{ item.name }}
        </button>
      </template>
      <button @click="prev" style="margin-left: 10px">后退</button>
      <!-- <button @click="toPage('A')">跳转A</button>
      <button @click="toPage('B')" style="margin-left: 10px">跳转B</button> -->
    </div>
    <hr />
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

    <!-- <div>{{ route.query }}</div> -->
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const toPage = (path: string) => {
  router.push({
    path,
    query: { key1: path, key2: "6666" },
  });
};

const prev = () => {
  //后退
  router.back();
};

const list = reactive([
  { name: "A", url: "/" },
  { name: "B", url: "/register" },
]);
</script>

<style scoped></style>
