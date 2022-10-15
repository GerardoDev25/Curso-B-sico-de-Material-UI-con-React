import { urlFetch } from '../constants';

export const getUser = async (user) => {
  try {
    const resp = await fetch(urlFetch + user);
    return await resp.json();
  } catch (error) {
    return {};
  }
};
