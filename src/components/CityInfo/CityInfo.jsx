import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const CityInfo = ({ city, country}) => {
    return (
        <Fragment>
            <Typography 
            display="inline" 
            variant="h2" 
            color="primary">
                {city}, </Typography>
            <Typography 
            display="inline" 
            variant="h3" 
            color="secondary">
                {country}</Typography>
        </Fragment>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default CityInfo
