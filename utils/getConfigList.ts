export const getConfigList = async (url: string) => {
  return await fetch(url, {
    method: 'GET',
  }).then((response) => { return response.json(); });
};
