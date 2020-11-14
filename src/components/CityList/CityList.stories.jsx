/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: 'CityList',
    component: CityList
}

const Template = (args) => <CityList {...args} />

export const CityListExample = Template.bind({})

CityListExample.args = {
    cities: [
        {city: 'Valencia', country: 'España', countryCode: 'ES'}, 
        {city: 'Barcelona', country: 'España', countryCode: 'ES'},
        {city: 'New York', country: 'EE.UU.', countryCode: 'US'},
        {city: 'Santiago', country: 'Chile', countryCode: 'CL'}

    ],
    onClickCity: action('Click en city')
}