// import React from 'react'
import "./modal.css";
function OperationModal(_props) {
    return (
        <div className="custom-modal" id="e-signature-modal">
            <div className="modal-container">
                <div className="modal-top">
                    <div className="head">
                        Instructions
                    </div>
                    <div className="close-modal" onClick={_props.closeModal}>
                        x
                    </div>
                </div>
                <div className="modal-middle">
                    <div className="description">
                        <span>The organization shall plan, implement and control the processes (see 4.4) needed to meet the requirements for the provision of products and services, and to implement the actions determined in Clause 6, by:</span>
                    </div>
                    <div className="bullets">
                        <ul >
                            <li>determining the requirements for the products and services;</li>
                            <li>
                                establishing criteria for:
                                <ol>
                                    <li>The Processes;</li>
                                    <li>the acceptance of products and services;</li>
                                </ol>
                            </li>
                            <li>determining the resources needed to achieve conformity to the product and service requirements;</li>
                            <li>implementing control of the processes in accordance with the criteria;</li>
                            <li>determining, maintaining and retaining documented information to the extent necessary:
                                <ol>
                                    <li>to have confidence that the processes have been carried out as planned;</li>
                                    <li>to demonstrate the conformity of products and services to their requirements.</li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        The output of this planning shall be suitable for the organization’s operations.
                    </div>
                    <div className="description">
                        The organization shall control planned changes and review the consequences of unintended changes, taking action to mitigate any adverse effects, as necessary.
                    </div>
                    <div className="dexcription">
                        The organization shall ensure that outsourced processes are controlled (see 8.4).
                    </div>
                </div>
                <div className="modal-bottom">
                    <div className="modal-btn btn-1">Submit</div>
                    <div className="modal-btn btn-2" onClick={_props.closeModal}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default OperationModal