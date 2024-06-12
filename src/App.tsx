import React from "react";
import { Provider } from 'react-redux'
import Router from './router';
import { store } from './store';

export default function App() {

    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router />
            </Provider>
        </React.StrictMode>
    )
}