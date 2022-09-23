import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_API_URL
};

const instance = axios.create( config ); 
 
const Post = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.post(url, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Get = async (url, id = null) => {
  const response = {};
  try {
    const { data } = await instance.get(`${url}${id ? '/' + id : ''}`, getHeaders());
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Put = async (endpoint, body) => {
  const response = {};
  try {
    const { data } = await instance.put(config.baseURL + endpoint, body, getHeaders());
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Delete = async (url, id) => {
  const response = {};
  try {
    const { data } = await instance.delete( `${url}/${id}`, getHeaders());
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const getToken = () => {
  const token = localStorage.getItem('token');
  return token || '';
};

const getHeaders = () => {
  return {
    headers: {
      "x-token": getToken(),
    },
  };
};

export { Get, Post, Put, Delete };