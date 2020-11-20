import React from 'react'
import ReactDOM from 'react-dom'
import DetailsModal from '../components/modals/DetailsModal'



it('renders without crashing', () => {
    const isShowing = () => { }
    const toggle = () => { }
    const div = document.createElement('div');
    const card = {
        card_id: 1,
        company_name: "Facebook",
        position_applied: "Web Developer",
        job_location: 'test',
        job_url: 'www.test.com',
        job_description: 'some random description'
    }
    const id = 2
    const updateList = () => { }
    ReactDOM.render(
        <DetailsModal
            isShowing={isShowing}
            hide={toggle}
            id={id}
            company_name={card.company_name}
            job_position={card.position_applied}
            job_location={card.job_location}
            job_url={card.job_url}
            job_description={card.job_description}
            updateList={updateList} />
        , div);
    ReactDOM.unmountComponentAtNode(div);
})