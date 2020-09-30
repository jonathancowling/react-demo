import React from 'react';

const CountrySelect = ({ countries, onSelect }) => (
    <select onChange={evt => onSelect(evt.target.value)}>
        {
            countries.map(c =>
                <option key={c} value={c}>{c}</option>
            )
        }
    </select>
);

export default CountrySelect;