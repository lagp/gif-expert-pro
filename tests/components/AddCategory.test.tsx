import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components'

describe('AddCategory testing', () => {
  const newCategory = () => {}
  test('should change the input text value', () => {
    render(<AddCategory onNewCategory={() => {}} />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.input(input, { target: { value: 'Saitama' } })

    expect(input.value).toBe('Saitama')
    // screen.debug();
  })
})
