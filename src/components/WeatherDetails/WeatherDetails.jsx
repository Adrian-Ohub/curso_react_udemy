import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const WeatherDetails = ({ humidity, wind }) => {
    return (
        <Fragment>
            <Typography variant="h4" color="initial">
                Humedad: {humidity} %
            </Typography>
            <Typography variant="h4" color="initial">
                Viento: {wind} km/h
            </Typography>
        </Fragment>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired, 
    wind: PropTypes.number.isRequired
}

export default WeatherDetails
