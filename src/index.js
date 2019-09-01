import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import store from "./store/index";
import routes from "./routes";
import DevTools from "./DevTools";
import styles from "./country.css";
import { getCountries } from "./actions/actions-countries";

render(
    <Provider store={store}>
    <div>
    <Router history={hashHistory} routes={routes} />
    <DevTools />
    </div>
    </Provider>,
    document.getElementById("root")
);

store.dispatch(getCountries());
