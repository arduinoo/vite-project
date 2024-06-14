import { createMemoryHistory, createRouter } from "vue-router";

import A from "../views/A.vue";
import B from "../views/B.vue";
import C from "../views/C.vue";

const routes = [
  { path: "/", name: "A", component: A },
  {
    path: "/register",
    name: "B",
    component: B,
    children: [{ path: "item", name: "C", component: C }],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
