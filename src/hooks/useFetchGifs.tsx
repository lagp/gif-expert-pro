import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'

import { getGifs, Gif } from '../helpers/getGifs'

interface FetchGifProps {
  category: string
}

export const useFetchGifs = ({ category }: FetchGifProps) => {
  const [images, setImages] = useState<Gif[]>([])

  const getImages = useCallback(() => {
    getGifs(category)
      .then(newImages => setImages(newImages))
      .catch(error => console.log(error))
  }, [category])

  useEffect(() => {
    getImages()
  }, [getImages])

  return {
    images: images,
    isLoading: true,
  }
}

useFetchGifs.propTypes = {
  category: PropTypes.string.isRequired,
}
