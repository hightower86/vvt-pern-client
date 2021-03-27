import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const apiGetBlocks = () => {
  const params = {};
  return axios(BASE_URL, { params }).then((res) => res.data);
};
