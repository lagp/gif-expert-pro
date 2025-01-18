import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('GifGrid testing', () => {
  test('should show loading at the begining', () => {
    const category = 'Some'

    jest.mocked(useFetchGifs).mockClear()

    jest.mocked(useFetchGifs).mockReturnValue({
      images: [],
      isLoading: true,
    })

    render(<GifGrid category={category} />)

    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  })

  test('should show items when images was load', () => {
    const category = 'Some'
    const gifs = [
      { id: 'ABC', title: 'Saitama', url: 'http://localhost/saitama.png' },
      { id: '123', title: 'Goku', url: 'http://localhost/goku.png' },
    ]

    jest.mocked(useFetchGifs).mockClear()

    jest.mocked(useFetchGifs).mockReturnValue({
      images: gifs,
      isLoading: false,
    })

    render(<GifGrid category={category} />)

    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
