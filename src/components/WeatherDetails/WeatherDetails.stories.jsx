/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import WeatherDetails from './WeatherDetails'

export default {
    title: 'WeatherDetails',
    component: WeatherDetails
}

const Template = (args) => <WeatherDetails {...args} />;

export const WeatherDetailsExample = Template.bind({});

WeatherDetailsExample.args = {
    humidity: 60,
    wind: 25
}