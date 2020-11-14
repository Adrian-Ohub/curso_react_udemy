/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import CityInfo from './CityInfo'
import 'typeface-roboto'

export default {
    title: 'CityInfo',
    component: CityInfo
}

//export const CityExample = () => (<CityInfo city={'Calafell'} country={'España'}></CityInfo>)

const Template = (args) => <CityInfo {...args} />;

export const CityExample = Template.bind({});

CityExample.args = {
  /* the args you need here will depend on your component */
  city: 'Calafell',
  country: 'España'
};