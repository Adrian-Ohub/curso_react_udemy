/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'AppFrame',
    component: AppFrame
}

const Template = () => 
    <Router>
        <AppFrame>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolores, ex nam aliquid adipisci consequatur excepturi ratione quos iure, temporibus ullam, fuga cumque eum ducimus. Officia velit praesentium eaque vitae.
        </AppFrame>
    </Router> 

export const AppFrameExample = Template.bind({})
