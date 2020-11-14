/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import WelcomeScreen from './WelcomeScreen'

export default {
    title: 'WelcomeScreen',
    component: WelcomeScreen
}

const Template = (args) => <WelcomeScreen {...args} />

export const WelcomeScreenExample = Template.bind({})

WelcomeScreenExample.args = {
    
}