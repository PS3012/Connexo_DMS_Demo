

function ControlofExternally(_props) {
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
                    <div className="head">General</div>
                    <div className="description">
                        <span>The organization shall ensure that externally provided processes, products and services conform to requirements.</span>
                    </div>
                    <div className="bullets">
                        <ul >
                            <li>
                                he approval of:
                                <ol>
                                    <li>products and services;</li>
                                    <li>methods, processes and equipment;</li>
                                    <li>the release of products and services;</li>
                                </ol>
                            </li>
                            <li>competence, including any required qualification of persons;</li>
                            <li>the external providers’ interactions with the organization;</li>
                            <li>control and monitoring of the external providers’ performance to be applied by the organization;
                            </li>
                            <li>verification or validation activities that the organization, or its customer, intends to perform at the external providers’ premises.</li>
                        </ul>
                    </div>
                    <div className="description">
                        The organization shall determine the controls to be applied to externally provided processes, products and services when:
                    </div>
                    <div className="bullets">
                        <ul >
                            <li>
                                products and services from external providers are intended for incorporation into the organization’s own products and services;
                            </li>
                            <li>products and services are provided directly to the customer(s)by external providers on behalf of the organization;</li>
                            <li>a process, or part of a process, is provided by an external provider as a result of a decision by the organization.</li>
                        </ul>
                    </div>
                    <div className="description">
                        The organization shall determine and apply criteria for the evaluation, selection, monitoring of performance, and re-evaluation of external providers, based on their ability to provide processes or products and services in accordance with requirements. The organization shall retain documented information of these activities and any necessary actions arising from the evaluations.
                    </div>
                    <div className="head"><b>Type and extent of control</b></div>
                    <div className="dexcription">
                        The organization shall ensure that externally provided processes, products and services do not adversely affect the organization’s ability to consistently deliver conforming products and services to its customers.
                    </div>
                    <div className="description">
                        The organization shall:
                    </div>
                    <div className="bullets">
                        <ul>
                            <li>ensure that externally provided processes remain within the control of its quality management system;</li>
                            <li>define both the controls that it intends to apply to an external provider and those it intends to apply to the resulting output;</li>
                            <li>
                                take into consideration:
                                <ol>
                                    <li>the potential impact of the externally provided processes, products and services on the organization’s ability to consistently meet customer and applicable statutory and regulatory requirements;</li>
                                    <li>the effectiveness of the controls applied by the external provider;</li>
                                    <li>determine the verification, or other activities, necessary to ensure that the externally provided processes, products and services meet requirements.</li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                    <div className="head"><b>Information for external providers</b></div>
                    <div className="dexcription">The organization shall ensure the adequacy of requirements prior to their communication to the external provider.</div>
                    <div className="bullets">
                        <ul>
                            <li>the processes, products and services to be provided;</li>
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

export default ControlofExternally