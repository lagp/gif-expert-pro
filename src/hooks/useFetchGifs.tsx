import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifs, Gif } from '../helpers/getGifs';

interface FetchGifProps {
  category: string
}

export const useFetchGifs = ( {category}: FetchGifProps ) => {

  const [images, setImages] = useState<Gif[]>([]);

  const getImages = () => {
    getGifs(category)
      .then((newImages) => setImages(newImages))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getImages()
  }, []);

  return {
    images: images,
    isLoading: true
  }
}

useFetchGifs.propTypes = {
  category: PropTypes.string.isRequired
}
