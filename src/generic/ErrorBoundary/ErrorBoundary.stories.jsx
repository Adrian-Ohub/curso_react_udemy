/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default {
    title: 'ErrorBoundary',
    component: ErrorBoundary
}

//const Template = (args) => <ErrorBoundary {...args} />

const prop = undefined
const ComponentWithoutError = () => <h1>Sin errores</h1>   
const ComponentWithError = () =><h1>{prop.hola}</h1>

export const ErrorBoundayWithoutError = () => <ErrorBoundary>
    <ComponentWithoutError></ComponentWithoutError>
</ErrorBoundary>
export const ErrorBoundayWithError = () => <ErrorBoundary>
    <ComponentWithError></ComponentWithError>
</ErrorBoundary>





