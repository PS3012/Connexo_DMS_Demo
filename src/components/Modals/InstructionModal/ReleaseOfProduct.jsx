

function ReleaseOfProduct(_props) {
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
                    {/* <div className="head">General</div> */}
                    <div className="description">
                        <span>The organization shall implement planned arrangements, at appropriate stages, to verify that the product and service requirements have been met.</span>
                    </div>
                    <div className="description">
                        <span>The release of products and services to the customer shall not proceed until the planned arrangements have been satisfactorily completed, unless otherwise approved by a relevant authority and, as applicable, by the customer.The organization shall retain documented information on the release of products and services. The documented information shall include
                        </span>
                    </div>
                    <div className="bullets">
                        <ul>
                            <li>evidence of conformity with the acceptance criteria;</li>
                            <li>traceability to the person(s) authorizing the release.</li>
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

export default ReleaseOfProduct