import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {api} from '../../config/constants';
import { BannerObject } from '../../model/banner/banner';

export const getBannerRQ = async (): Promise<BannerObject> => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const response = await axios.get(api.headerImage, {headers});
  return response?.data;
};

export const GetBannerHK = () => {
  const {data, isLoading, isError} = useQuery(['getBanner'], getBannerRQ);
  return {dataBanner: data, isLoadingBanner: isLoading, isErrorBanner: isError};
};
