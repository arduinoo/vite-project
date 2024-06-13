import { createMemoryHistory, createRouter } from "vue-router";

import A from "../components/A.vue";
import B from "../components/B.vue";

const routes = [
  { path: "/", component: A },
  { path: "/register", component: B },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
