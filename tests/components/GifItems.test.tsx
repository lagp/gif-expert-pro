import { render } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'
import React from 'react'

describe('GifItems testing', () => {
  test('should do match with the snapshot', () => {
    const title = 'Saitama'
    const url =
      'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=b042654ee79e4bs4kw3qad01n21i9krofgspxw1doc571a9d&ep=v1_gifs_search&rid=giphy.gif&ct=g'

    render(<GifItem title={title} url={url} />)
  })
})
