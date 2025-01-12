export interface Gif {
  id: string,
  title: string,
  url: string
}

interface GiphyResponse {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

export const getGifs = async(category: string): Promise<Gif[]> => {
  const api_key = 'kcaqpvpI3hN7t1PDvl0I4RSqFZ2TZVMd'
  const limit = 10
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`

  const resp = await fetch(url)

  const { data = [] }: { data: GiphyResponse[] } = await (resp.json() as Promise<{ data: GiphyResponse[] }>);

  const gifs = data.map((img: GiphyResponse) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  console.log(gifs)
  return gifs
}