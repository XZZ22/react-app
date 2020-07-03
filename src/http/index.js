import axios from "axios";
// import { Component } from "react";

import qs from "qs";

// 初始化
const instance = axios.create({
  baseURL: 'https://5b5e71c98e9f160014b88cc9.mockapi.io/api/',
  timeout: 1000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (err) {
  if (err.response.status === 504 || err.response.status === 404) {
    console.log("找不到了");
  } else if (err.response.status === 401) {
    console.log("登录信息失效");
  } else if (err.response.status === 500) {
    console.log("服务器开小差了");
  }
  return Promise.reject(err);
});

// 方法封装

// post
export const Post = (url, data) => {
  let params = qs.stringify(data)
  return axios({
    method: "post",
    url: url,
    data: params,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8"
    }
  });
};

// Get
export const Get = (url,data) => {
  let params = qs.stringify(data)
  return axios({
    method: "get",
    url: url,
    data: params
  });
};

// Put
export const Put = (url, data) => {
  let params = qs.stringify(data)
  return axios({
    method: "put",
    url: url,
    data: params,
  });
};

// Delect
export const Delect = (url,data) => {
  let params = qs.stringify(data)
  return axios({
    method: "delete",
    url: url,
    data: params,
  });
};

