import React from 'react'
import CityList from './CityList'
import { render, fireEvent } from '@testing-library/react'

const cities= [
    {city: 'Valencia', country: 'España', countryCode: 'ES'}, 
    {city: 'Barcelona', country: 'España', countryCode: 'ES'},
    {city: 'New York', country: 'EE.UU.', countryCode: 'US'},
    {city: 'Santiago', country: 'Chile', countryCode: 'CL'}
]

test('CityList render', async() => {

    const { findAllByRole } = render(
        <CityList cities={cities} onClickCity={() =>{}} />
    )

    const items = await findAllByRole('button')

    expect(items).toHaveLength(4)
})

test('CityList clickOnItem', async() => {

    const fnClinckOnItem = jest.fn()

    const { findAllByRole } = render(
        <CityList cities={cities} onClickCity={fnClinckOnItem}></CityList>
    )

    const items = await findAllByRole('button')

    fireEvent.click(items[0])

    expect(fnClinckOnItem).toHaveBeenCalledTimes(1)
})