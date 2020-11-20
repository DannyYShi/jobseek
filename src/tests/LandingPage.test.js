import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage';

describe(`Landing Page`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <Route>
                    <LandingPage />
                </Route>
            </Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})
