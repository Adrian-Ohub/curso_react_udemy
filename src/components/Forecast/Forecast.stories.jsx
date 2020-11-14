/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Forecast from './Forecast'

export default {
    title: 'Forecast',
    component: Forecast
}

const Template = (args) => <Forecast {...args} />

export const ForecastExample = Template.bind({})

ForecastExample.args = {
    forecastItemList: [
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
}