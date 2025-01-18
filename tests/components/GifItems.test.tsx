import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('GifItems testing', () => {
  const title = 'Saitama'
  const url =
    'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=b042654ee79e4bs4kw3qad01n21i9krofgspxw1doc571a9d&ep=v1_gifs_search&rid=giphy.gif&ct=g'

  test('should match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })

  test('should show the image with the indicated url and alt property', () => {
    render(<GifItem title={title} url={url} />)

    const { src, alt } = screen.getByRole('img') as HTMLImageElement

    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('should show the title in the component', () => {
    render(<GifItem title={title} url={url} />)

    expect(screen.getByText(title)).toBeTruthy()
  })
})
