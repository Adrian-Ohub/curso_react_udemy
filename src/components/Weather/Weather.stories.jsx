/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Weather from './Weather'

export default {
    title: 'Weather',
    component: Weather
}

const Template = (args) => <Weather {...args} />;

export const WeatherSunny = Template.bind({});

WeatherSunny.args = {
  /* the args you need here will depend on your component */
  temperature: 22,
  state: 'Clear'
};
export const WeatherCloud = Template.bind({});

WeatherCloud.args = {
  /* the args you need here will depend on your component */
  temperature: 12,
  state: 'Clouds'
};