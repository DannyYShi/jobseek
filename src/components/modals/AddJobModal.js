import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal'
import config from '../../app/config'

const AddJobModal = ({ isShowing, hide, list, updateList }) => {
    const [companyName, setCompanyName] = useState("");
    const [position, setPosition] = useState("");

    const postData = async (url = config.CARD_ENDPOINT, data = {}) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return response.json();
    };

    function handleSubmit() {
        postData(config.CARD_ENDPOINT, {
            'list_id': list.list_id,
            'company_name': companyName,
            'position_applied': position,
        }).then((data) => {
            updateList();
        });
    }

    return isShowing ? ReactDOM.createPortal(
        <>
            <Modal {...{ isShowing, hide }}>
                <h1>Add Job</h1>
                <form onSubmit={handleSubmit}>
                    <label>Company name:
                        <input
                            required
                            value={companyName}
                            onChange={(e) => {
                                setCompanyName(e.target.value);
                            }} />
                    </label>

                    <label>
                        Job position:
                         <input
                            required
                            value={position}
                            onChange={(e) => {
                                setPosition(e.target.value);
                            }} />
                    </label>
                    <button type='submit'>SAVE JOB</button>
                </form>
            </Modal>

        </>, document.body) : null;
}

export default AddJobModal;

