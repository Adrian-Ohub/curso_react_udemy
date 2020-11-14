import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    {
    weekDay: 'Lunes',  
    hour: 12,     
    state: 'Clear',
    temperature: 22
    },
    {
    weekDay: 'Martes',  
    hour: 11,     
    state: 'Clouds',
    temperature: 20
    },
    {
    weekDay: 'Miercoles',  
    hour: 10,     
    state: 'Rain',
    temperature: 18
    },
    {
    weekDay: 'Jueves',  
    hour: 11,     
    state: 'Thunderstorm',
    temperature: 15
    }
]

test('Forecast render', async () => {

    // Identificar mediante un id unico para encontrar cada item
    //
    const { findAllByTestId } = render(
        <Forecast forecastItemList={forecastItemList}></Forecast>
    )

    const forecastItems = await findAllByTestId('forecast-item-container')

    expect(forecastItems).toHaveLength(4)

})