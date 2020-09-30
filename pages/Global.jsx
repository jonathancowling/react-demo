import React from "react";
import { useSummary } from '../hooks/summary';

const Main = () => {

    const summary = useSummary();

    return <div>
        <p>
            Globally there are {summary.cases} cases
        </p>
        <p>
            Globally there are {summary.deaths} deaths
        </p>
        <p>
            Globally there are {summary.recovered} recovered
        </p>
    </div>
}

export default Main;