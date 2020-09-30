import { useState, useEffect } from 'react';
import { fetchGlobalSummary } from '../api/covid19';

export const useSummary = () => {
    const [summary, setSummary] = useState({});
    
    useEffect(() => {
        fetchGlobalSummary().then(setSummary);
    }, []);

    return summary;
}
