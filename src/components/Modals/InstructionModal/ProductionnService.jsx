

function ProductionnService(_props) {
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
                    <div className="head"><b>Control of production and service provision</b></div>
                    <div className="description">
                        <span>The organization shall implement production and service provision under controlled conditions. Controlled conditions shall include, as applicable:</span>
                    </div>
                    <div className="bullets">
                        <ul >
                            <li>
                                the availability of documented information that defines:
                                <ol>
                                    <li>the characteristics of the products to be produced, the services to be provided, or the activities to be performed;</li>
                                    <li>the results to be achieved;</li>
                                    <li>the availability and use of suitable monitoring and measuring resources;</li>
                                </ol>
                            </li>
                            <li>the implementation of monitoring and measurement activities at appropriate stages to verify that criteria for control of processes or outputs, and acceptance criteria for products and services, have been met;</li>

                            <li>the use of suitable infrastructure and environment for the operation of processes;</li>

                            <li>the appointment of competent persons, including any required qualification;
                            </li>
                            <li>the validation, and periodic revalidation, of the ability to achieve planned results of the processes for production and service provision, where the resulting output cannot be verified by subsequent monitoring or measurement;</li>
                            <li>the implementation of actions to prevent human error;</li>
                            <li>the implementation of release, delivery and post-delivery activities.</li>
                        </ul>
                    </div>
                    <div className="head"><b>Identification and traceability</b></div>
                    <div className="description">
                        The organization shall use suitable means to identify outputs when it is necessary to ensure the conformity of products and services.
                    </div>

                    <div className="description">
                        The organization shall identify the status of outputs with respect to monitoring and measurement requirements throughout production and service provision.
                    </div>
                    <div className="dexcription">
                        The organization shall control the unique identification of the outputs when traceability is a requirement, and shall retain the documented information necessary to enable traceability.
                    </div>
                    <div className="head"><b>Property belonging to customers or external providers</b></div>

                    <div className="description">The organization shall exercise care with property belonging to customers or external providers while it is under the organization’s control or being used by the organization.</div>
                    <div className="description">The organization shall identify, verify, protect and safeguard customers’ or external providers’ property provided for use or incorporation into the products and services.</div>
                    <div className="description">When the property of a customer or external provider is lost, damaged or otherwise found to be unsuitable for use, the organization shall report this to the customer or external provider and retain documented information on what has occurred</div>
                    <div className="description">NOTE A customer’s or external provider’s property can include materials, components, tools and equipment, premises, intellectual property and personal data.</div>
                    <div className="head"><b>Preservation</b></div>
                    <div className="dexcription">The organization shall preserve the outputs during production and service provision, to the extent necessary to ensure conformity to requirements.</div>
                    <div className="dexcription">NOTE Preservation can include identification, handling, contamination control, packaging, storage, transmission or transportation, and protection.</div>

                    <div className="head"><b>Post-delivery activities</b></div>
                    <div className="description">The organization shall meet requirements for post-delivery activities associated with the products and services.</div>
                    <div className="description">In determining the extent of post-delivery activities that are required, the organization shall consider:</div>

                    <div className="bullets">
                        <ul>
                            <li>statutory and regulatory requirements;</li>
                            <li>the potential undesired consequences associated with its products and services;</li>
                            <li>the nature, use and intended lifetime of its products and services;</li>
                            <li>customer requirements;</li>
                            <li>customer feedback.</li>
                        </ul>
                    </div>
                    <div className="dexcription">
                        NOTE Post-delivery activities can include actions under warranty provisions, contractual obligations such as maintenance services, and supplementary services such as recycling or final disposal.
                    </div>
                    <div className="head"><b>Control of changes</b></div>
                    <div className="dexcription">The organization shall review and control changes for production or service provision, to the extent necessary to ensure continuing conformity with requirements.</div>
                    <div className="dexcription">The organization shall retain documented information describing the results of the review of changes, the person(s) authorizing the change, and any necessary actions arising from the review.</div>
                </div>

                <div className="modal-bottom">
                    <div className="modal-btn btn-1">Submit</div>
                    <div className="modal-btn btn-2" onClick={_props.closeModal}>Cancel</div>
                </div>

            </div>

        </div>
    )
}

export default ProductionnService