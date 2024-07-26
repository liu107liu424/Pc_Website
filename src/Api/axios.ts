import axios, { AxiosError } from "axios";
// // 配置接口地址
if (process.env.NODE_ENV === "development") {
  //开发环境
  axios.defaults.baseURL = "http://localhost:3001";
} else {
  //   //线上环境
  axios.defaults.baseURL = "http://49.234.177.242:8080";
}
axios.defaults.timeout = 5000;
axios.defaults.headers["Content-Type"] = "application/json";
// 添加请求拦截器
axios.interceptors.request.use(
  (config: any) => {
    // 在发送请求之前做些什么
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error: AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (res) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let { code, data } = res.data;
    if (code === 401) {
      localStorage.clear();
    }
    return res.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default axios;
