/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: 'ForecastItem',
    component: ForecastItem
}

const Template = (args) => <ForecastItem {...args}  />

export const ForecastItemExample = Template.bind({});

ForecastItemExample.args = {
    weekDay: 'Lunes',
    hour: 10,
    state: 'Clear', 
    temperature: 20
}