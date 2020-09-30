import { useEffect, useState } from "react";
import { fetchTotalDeaths } from "../api/covid19";

export const useDeaths = (country) => {
    const [deaths, setDeaths] = useState(0);

    useEffect(() => {
        fetchTotalDeaths(country).then(setDeaths);
    }, [country]);

    return deaths;
}