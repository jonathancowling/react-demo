import { useState, useEffect } from 'react';
import { fetchTotalCases } from '../api/covid19';

export const useTotalCases = (country) => {
    const [cases, setCases] = useState(null);

    useEffect(() => {
        fetchTotalCases(country).then(setCases);
    }, [country]);

    return cases;
}