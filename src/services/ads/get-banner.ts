import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {api} from '../../config/constants';

export const getBannerRQ = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const response = await axios.get(api.headerImage, {headers});
  return response;
};

export const GetBannerHK = () => {
  const {data, isLoading, isError} = useQuery(['getBanner'], getBannerRQ);
  return {dataBanner: data, isLoadingBanner: isLoading, isErrorBanner: isError};
};
