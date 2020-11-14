import React from 'react'
import CityInfo from './CityInfo' //SUT: Subject Under Testing
import { render } from '@testing-library/react'

test('CityInfo render', async() => {

    //AAA: Arrange, Act, Assert

    const city = 'Calafell'
    const country ='España'

    const { findAllByRole } = render(
        <CityInfo 
        city={city} 
        country={country}>
        </CityInfo>
    )

    const cityAndCountryComponents = await findAllByRole('heading')


    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

});