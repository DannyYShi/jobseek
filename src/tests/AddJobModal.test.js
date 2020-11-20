import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddJobModal from '../components/modals/AddJobModal';

describe(`AddJobModal`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <Route>
                    <AddJobModal />
                </Route>
            </Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})
