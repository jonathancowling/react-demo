export const fetchCountries = async () => {
    const res = await fetch('https://api.covid19api.com/countries');
    const data = await res.json();
    return data.map(country => country.Slug).sort();
}

export const fetchTotalCases = async (country) => {
    if (!country) {
        return null;
    }
    const res = await fetch(`https://api.covid19api.com/total/country/${country}/status/confirmed`);
    const data = await res.json();
    if (!data || !data.length) {
        return 0;
    }
    return data[data.length - 1].Cases;
}

export const fetchTotalDeaths = async (country) => {
    if (!country) {
        return null;
    }
    const res = await fetch(`https://api.covid19api.com/total/country/${country}/status/deaths`);
    const data = await res.json();
    if (!data || !data.length) {
        return 0;
    }
    return data[data.length - 1].Cases;
}

export const fetchGlobalSummary = async () => {
    const res = await fetch(`https://api.covid19api.com/summary`);
    const data = await res.json();
    const global = data.Global;
    return {
        deaths: global.TotalDeaths,
        cases: global.TotalConfirmed,
        recovered: global.TotalRecovered,
    }
}