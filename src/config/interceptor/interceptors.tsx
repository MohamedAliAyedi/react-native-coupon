import axios from 'axios';

export const interceptors = async (
  baseURL: string,
  headers: any,
  body: any,
  method: any,
) => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 40000,
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    method: method,
  });
  instance.interceptors.request.use(
    async config => {
      return config;
    },

    function (error) {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function (response: any) {
      let data = response;
      return Promise.resolve(data);
    },
    function (error) {
      console.error(error);
    },
  ),
    function (err: any) {
      console.error(err);
      return Promise.reject(err);
    };

  return new Promise((resolve, reject) => {
    let result: any = null;
    if (method == 'POST') {
      result = instance.post(baseURL, body, headers);
    } else {
      result = instance.get(baseURL, headers);
    }
    result
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((errer: any) => {
        reject(errer);
      });
  });
};
