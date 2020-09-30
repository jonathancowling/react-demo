import React from 'react';

const CountryCases = ({ country, cases }) => {
    if (!country) {
        return <span />;
    }
    return <div>{country} has had {cases} cases</div>;
}

export default CountryCases;