export const getGifs = async (category) => {

   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Tl5lEo448R9uRVreW5mhBeQ8dIfZF5Ok`;
   const resp = await fetch(url);
   const { data } = await resp.json();

   const gifs = data.map(img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url
      }
   });

   return gifs;
}