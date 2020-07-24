import { URL } from '../const/const';
import { resultApiInterface } from '../const/types';

const getProperty = async () => {
  let result: resultApiInterface = {
    properties: null,
    error: null,
  };

  try {
    const resultApi = await fetch(URL);
    const data = await resultApi.json();
    result.properties = data;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export { getProperty };
