import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components'

describe('AddCategory testing', () => {
  test('should change the input text value', () => {
    render(<AddCategory onNewCategory={() => {}} />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.input(input, { target: { value: 'Saitama' } })

    expect(input.value).toBe('Saitama')
    // screen.debug();
  })

  test('should do nothing when no input value', () => {
    const inputValue = ''
    const onNewCategoryMockFn = jest.fn()

    render(<AddCategory onNewCategory={() => {}} />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    const form = screen.getByRole('form') as HTMLFormElement

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')

    expect(onNewCategoryMockFn).not.toHaveBeenCalled()
  })

  test('should call onNewCategory when input has a value', () => {
    const inputValue = 'Saitama'
    const onNewCategoryMockFn = jest.fn()

    render(<AddCategory onNewCategory={onNewCategoryMockFn} />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    const form = screen.getByRole('form') as HTMLFormElement

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')

    expect(onNewCategoryMockFn).toHaveBeenCalled()
    expect(onNewCategoryMockFn).toHaveBeenCalledTimes(1)
    expect(onNewCategoryMockFn).toHaveBeenCalledWith(inputValue)
  })
})
