import React, { useState } from "react";
import CountrySelect from '../components/CountrySelect';
import CountryCases from '../components/CountryCases';
import CountryDeaths from '../components/CountryDeaths';
import { useCountries } from '../hooks/countries';
import { useTotalCases } from "../hooks/cases";
import { fetchTotalDeaths } from "../api/covid19";
import { useDeaths } from '../hooks/deaths';
import { useParams } from 'react-router-dom';

const Main = () => {
    const { country: initialCountry } = useParams();
    const [selected, setSelected] = useState(initialCountry);
    const countries = useCountries();
    const cases = useTotalCases(selected);
    const deaths = useDeaths(selected);

    return <div>
        <CountrySelect countries={countries} onSelect={setSelected} />
        <CountryCases country={selected} cases={cases} />
        <CountryDeaths country={selected} deaths={deaths} />
    </div>
}

export default Main;