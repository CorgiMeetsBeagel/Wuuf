import { useSearchParams } from 'react-router-dom';

export const swiperLoader = async () => {
  const result = await fetch(`/api/getprofiles`);
  const data = await result.json();
  return data.profiles;
};
