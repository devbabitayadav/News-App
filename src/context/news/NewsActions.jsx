export const getNews = async (topic) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-10-17&sortBy=publishedAt&apiKey=70d1cfbec9ec452a9585739ab4e8b11e`);
  const data = await response.json();
  console.log(data);
  return data;
};
