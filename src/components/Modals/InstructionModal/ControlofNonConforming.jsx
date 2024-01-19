
function ControlofNonConforming(_props) {
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
                        <span>The organization shall ensure that outputs that do not conform to their requirements are identified and controlled to prevent their unintended use or delivery.</span>
                    </div>
                    <div className="description">
                        <span>The organization shall take appropriate action based on the nature of the nonconformity and its effect on the conformity of products and services. This shall also apply to nonconforming products and services detected after delivery of products, during or after the provision of services.</span>
                    </div>
                    <div className="description">
                        <span>The organization shall deal with nonconforming outputs in one or more of the following ways:</span>
                    </div>
                    <div className="bullets">
                        <ul >
                            <li>correction;</li>
                            <li>
                                segregation, containment, return or suspension of provision of products and services;
                            </li>
                            <li>informing the customer;</li>
                            <li>obtaining authorization for acceptance under concession.</li>
                        </ul>
                    </div>
                    <div className="description">
                        <span>Conformity to the requirements shall be verified when nonconforming outputs are corrected.</span>
                    </div>
                    <div className="head"><b>The organization shall retain documented information that:</b></div>

                    <div className="bullets">
                        <ul >
                            <li>describes the nonconformity;
                            </li>
                            <li>
                                describes the actions taken;
                            </li>
                            <li>
                                describes any concessions obtained;
                            </li>
                            <li>
                                identifies the authority deciding the action in respect of the nonconformity.
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

export default ControlofNonConforming