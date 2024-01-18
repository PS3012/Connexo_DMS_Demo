import { useState } from 'react'
import './DataFields.css'
import RelatedRecordModal from '../Modals/RelatedRecordModal/RelatedRecordModal'

function RelatedRecords(_props) {
    const [openModal, setOpenModal] = useState(false)
    const closeRecordModal = () => setOpenModal(false)
    return (
        <>

            <div className="group-input">
                <label>
                    {_props.isRequired === "true" && <div className="required"></div>}
                    {_props.label}
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setOpenModal(true)}>
                        <path fill="#000000" d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2" />
                    </svg>
                </label>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Row</th>
                                <th>Record ID</th>
                                <th>Division</th>
                                <th>Process</th>
                                <th>Short Description</th>
                                <th>Date Opened</th>
                                <th>Assigned To</th>
                                <th>Due Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

            {openModal && <RelatedRecordModal closeModal={closeRecordModal} />}

        </>
    )
}

export default RelatedRecords 
