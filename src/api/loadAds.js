export const loadAds = async(url) => {
  const response = await fetch(url);

  return response.json();
};