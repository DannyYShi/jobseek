import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './DetailsModal.css';
import Modal from './Modal';
import config from '../../app/config'

const DetailsModal = ({ isShowing, hide, company_name, job_position, job_location, job_url, job_description, id, updateList }) => {
    const [companyName, setCompanyName] = useState(company_name);
    const [position, setPosition] = useState(job_position);
    const [jobLocation, setJobLocation] = useState(job_location);
    const [jobURL, setJobURL] = useState(job_url);
    const [jobDescription, setJobDescription] = useState(job_description);

    const updateCardInfo = async (url = config.CARD_ENDPOINT, data = {}) => {
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        updateList()
    }

    function handleSubmit() {
        updateCardInfo(config.CARD_ENDPOINT + id, {
            'company_name': companyName,
            'position_applied': position,
            'job_location': jobLocation,
            'job_url': jobURL,
            'job_description': jobDescription
        })
    }

    return isShowing ? ReactDOM.createPortal(
        <>
            <Modal {...{ isShowing, hide }}>
                <h1>Job Details</h1>
                <p>Use this to keep track of the details of your job application.</p>
                <form className='card-details-form' onSubmit={handleSubmit}>
                    <label>Company name:
                        <input
                            type='text'
                            value={companyName}
                            onChange={(e) => {
                                setCompanyName(e.target.value);
                            }} />
                    </label>

                    <label>
                        Job position:
                         <input
                            type='text'
                            value={position}
                            onChange={(e) => {
                                setPosition(e.target.value);
                            }} />
                    </label>

                    <label>
                        Job Location:
                         <input
                            type='text'
                            value={jobLocation}
                            onChange={(e) => {
                                setJobLocation(e.target.value);
                            }} />
                    </label>

                    <label>
                        Job URL:
                         <input
                            type='text'
                            value={jobURL}
                            onChange={(e) => {
                                setJobURL(e.target.value);
                            }} />
                    </label>

                    <label>
                        Job Description:
                        <textarea
                            value={jobDescription}
                            onChange={(e) => {
                                setJobDescription(e.target.value);
                            }} />
                    </label>

                    <button type='submit'>SAVE</button>
                </form>
            </Modal>
        </>, document.body) : null;
}
export default DetailsModal;

