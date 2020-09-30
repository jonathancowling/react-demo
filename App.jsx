import React from "react";
import CountryPage from "./pages/Main";
import GlobalSummaryPage from "./pages/Global";
import {
    BrowserRouter,
    Switch, 
    Route,
} from "react-router-dom";

// In this file we'd see any generic top level components and setup
// For example ThemeProvider or Router.

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/country/:country">
                <CountryPage />
            </Route>
            <Route path="/country">
                <CountryPage />
            </Route>
            <Route path="/">
               <GlobalSummaryPage /> 
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;