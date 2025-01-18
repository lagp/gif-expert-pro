import { fireEvent, render, screen } from '@testing-library/react'
import GifExpertApp from '../src/GifExpertApp'

describe('GifExpertApp testing', () => {
  test('should add a new category', () => {
    const category = 'Dragon Ball'

    render(<GifExpertApp />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    const form = screen.getByRole('form') as HTMLFormElement

    fireEvent.input(input, { target: { value: category } })
    fireEvent.submit(form)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1)
  })

  test('should not to add the same category twice', () => {
    const category = 'Dragon Ball'

    render(<GifExpertApp />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    const form = screen.getByRole('form') as HTMLFormElement

    fireEvent.input(input, { target: { value: category } })
    fireEvent.submit(form)
    fireEvent.input(input, { target: { value: category } })
    fireEvent.submit(form)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1)
  })
})
