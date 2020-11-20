import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import Header from '../components/header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";

describe(`Header`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <Route>
                    <Header />
                </Route>
            </Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})
