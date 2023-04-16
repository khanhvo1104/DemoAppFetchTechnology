import {instance} from './base';

export const getInfo = async () => {
  const response = await instance.get('/info');
  return response.data.message;
};
