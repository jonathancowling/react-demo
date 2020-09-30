import React from 'react';

const CountryDeaths = ({country, deaths}) => {
    if (!country) {
        return <span />;
    }
    return <div>{country} has had {deaths} deaths</div>;
}

export default CountryDeaths;