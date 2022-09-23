import { Delete, Get, Post, Put } from "./pivateRoutes";


const addUser = async (values) => {
  return await Post('/api/auth/new', values);
};

const updateUser = async (values, id) => {
  return await Put(`/users/${id}`, values);
};

const getUser = async (id) => {
  return await Get(`/users/${id}`);
};

const getUsers = async () => {
  const { data, error } = await Get(`/users`);
  return { data: data.data, error };
};

const deleteUser = async (id) => {
  return await Delete('/users',id);
};

export { addUser, deleteUser, getUser, getUsers, updateUser };