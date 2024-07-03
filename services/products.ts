import axios from 'axios';
// Types
import { ApiProduct } from '@/types/product';

export const getProducts = () => {
  return axios.get<ApiProduct[]>('https://fakestoreapi.com/products').then((response) => {
    return response.data;
  }).catch(function (error) {
    console.log(error);
    return [];
  });
}