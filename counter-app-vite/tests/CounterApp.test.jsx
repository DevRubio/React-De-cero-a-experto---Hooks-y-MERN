import {render, screen} from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en el <CounterApp/>', () => { 
    const initialValue = 10;
    test('debe hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot()
     })

    test('debe mostrar el valor inicial de 10 <CounterApp value={100}', () => { 
        render(<CounterApp value={100}/>)
        expect(screen.getAllByText('100')).toBeTruthy()
     })
 })