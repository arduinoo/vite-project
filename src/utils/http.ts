import axios from "axios";

// 创建一个 axios 实例
const http = axios.create({
  baseURL: "http://localhost:3000", // 假设你有一个环境变量来设置基本 URL
  timeout: 5000, // 请求超时时间
  // 其他配置...
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    console.log("请求拦截器-config: ", config);
    // 在发送请求之前做些什么，例如添加 token 到 headers
    // if (store.getters.token) {
    // config.headers["X-Token"] = "66666666666";
    // config.headers["X-Lang"] = "zh_cn";
    // }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    const res = response;
    console.log("响应拦截器-res: ", res);
    // 如果自定义的 code 不是 20000，则判断为错误
    if (res.status !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res.data;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default http;
