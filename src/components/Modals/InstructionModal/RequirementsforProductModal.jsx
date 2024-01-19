// import React from 'react'

function RequirementsforProductModal(_props) {
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
                    <div className="head"><b>Customer Communication</b></div>
                    <div className="description">
                        <span>Communication with customers shall include:</span>
                    </div>
                    <div className="bullets">
                        <ul >
                            <li>Providing information relating to products and services;</li>
                            <li>
                                Handling inquiries, contracts, or orders, including changes;
                            </li>
                            <li>Obtaining customer feedback relating to products and services, including customer complaints;</li>
                            <li>Handling or controlling customer property;</li>
                            <li>Establishing specific requirements for contingency actions, when relevant.
                            </li>
                        </ul>
                    </div>
                    <div className="head"><b>Determining the Requirements for Products and Services</b></div>
                    <div className="description">
                        When determining the requirements for the products and services to be offered to customers, the organization shall ensure that:
                    </div>
                    <div className="bullets">
                        <ul >
                            <li>determining the requirements for the products and services;
                                <ul>
                                    <li>The Processes;</li>
                                    <li>the acceptance of products and services;</li>
                                </ul>
                            </li>
                            <li>
                                establishing criteria for:

                            </li>
                        </ul>
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

export default RequirementsforProductModal