import { useState, useEffect } from 'react';
import { fetchCountries } from '../api/covid19';

export const useCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetchCountries().then(setCountries);
    }, []);
    return countries;
}