import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {api} from '../../config/constants';
import { CategoryObject } from '../../model/category/category';


export const getCategoriesRQ = async (): Promise<CategoryObject[]> => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const response = await axios.get(api.categories, {headers});
  return response?.data?.entries;
};

export const GetCategoriesHK = () => {
  const {data, isLoading, isError} = useQuery(['getCategories'], getCategoriesRQ)
  return {data, isLoading, isError};
}