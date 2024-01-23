import HeaderTop from "../../../components/Header/HeaderTop";
import { useReducer, useState } from 'react';
import Grid from '../../../components/DataFields/Grid';
import InputDate from '../../../components/DataFields/InputDate';
import HeaderBottom from "../../../components/Header/HeaderBottom";
import ESignatureModal from "../../../components/Modals/ESignatureModal/ESignatureModal";
import { formList, labFile, progressItems } from "./LabIncidentPanelFunctions";
import RelatedRecords from "../../../components/DataFields/RelatedRecords";

function LabIncidentPanel() {
    const [form, setForm] = useState(formList[0]);
    const [documentInformation, setDocumentInformation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        recordNumber: `Estonia/SOP/2024/000001`,
        site: "Estonia",
        initiator: 'Amit Guru',
        dateOfInitiation: "25-Jan-2024",
        assignedTo: '',
        dueDate: '',
        initiatorGroup: '',
        shortDescription: '',
        otherReferenceDocument: '',
        incidentCategory: '',
        invocationType: '',
        initialAttachment: ''
    })
    const [incidentDetails, setIncidentDetails] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        incidentDetails: '',
        documentDetails: '',
        instrumentDetails: '',
        involvedPersonnel: '',
        productDetails: '',
        supervisorReviewComments: '',
        attachment: ''
    })
    const [investigationDetails, setInvestigationDetails] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        invAttachment: '',
        investigationDetails: '',
        actionTaken: '',
        rootCause: ''
    })
    const [capa, setCapa] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        investigationDetails: '',
        actionTaken: '',
        capaAttachment: ''
    })
    const [qAReview, setQAReview] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        qAReviewComments: '',
        qAHeadAttachments: ''
    })
    const [qAHeadApproval, setQAHeadApproval] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        investigationDetails: '',
        effectivenessCheckRequired: '',
        effectivenessCheckCreationDate: '',
        effectivenessChecker: '',
        conclusion: '',
        dueDateExtensionJustification: '',
    })
    const handleChange = (updatedData) => {
        setDocumentInformation({ initialAttachment: updatedData })
    };

    // ------------------Record Workflow------------
    const [progressArray, setProgressArray] = useState([progressItems[0].name])
    const [signatureModal, setSignatureModal] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [keywordElements, setKeywordElements] = useState([])
    const closeSignatureModal = () => setSignatureModal(false);
    function handleESignature(key, elements) {
        setKeyword(key)
        setKeywordElements(elements)
        for (let ele of elements) {
            let updatedItemIndex = progressItems.findIndex((item) => item.name === ele);
            if (updatedItemIndex !== -1) {
                progressItems[updatedItemIndex].details = 'Updated';
            } else {
                console.error('Item with name "Opened" not found.');
            }
        }
        setSignatureModal(true)
    }
    function signatureValue(key) {
        if (key) {
            if (keyword === 'add') {
                addProgress(keywordElements)
            } else if (keyword === 'remove') {
                removeProgress(keywordElements)
            } else {
                setProgressArray('Closed-Cancelled')
            }
        } else {
            alert('E-Signature Not Matched.')
        }
    }
    function addProgress(addEle) {
        for (let ele of addEle) {
            setProgressArray((prevArray) => [...prevArray, ele])
        }
    }
    function removeProgress(removeEle) {
        setProgressArray(progressArray.filter((item) => !removeEle.includes(item)));
    }
    return (
        <>
            <HeaderTop />
            <HeaderBottom />

            <div id="document-panel">

                <div className="top-block">
                    <div><strong> Record Name:&nbsp;</strong>Lab Incident Panel</div>
                    <div><strong> Site:&nbsp;</strong>{documentInformation.site}</div>
                    <div><strong> Current Status:&nbsp;</strong>{progressArray[progressArray.length - 1]}</div>
                    <div><strong> Initiated By:&nbsp;</strong>{documentInformation.initiator}</div>
                </div>

                <div className="inner-block">

                    <div className="workflow-bar">
                        <div className="workflow-top-block">
                            <div className="head">Record Workflow</div>
                            <div className="btn-bar">
                                <button className="themeBtn">Audit Trail</button>
                                <button className="themeBtn">Print</button>
                                {progressArray.length === 1 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[1].name])}>Submit</button>
                                    </>
                                }
                                {progressArray.length === 2 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[2].name])}>Incident Review Complete</button>
                                        <button className="themeBtn" onClick={() => handleESignature('closed', [])}>Cancellation Request</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[1].name])}>Request More Information</button>
                                    </>
                                }
                                {progressArray.length === 3 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[3].name])}>Investigation Completed</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[2].name])}>Request More Information</button>
                                    </>
                                }
                                {progressArray.length === 4 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[4].name])}>All Activities Completed</button>
                                    </>
                                }
                                {progressArray.length === 5 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[5].name])}>Review</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[4].name, progressItems[3].name])}>Further Investigation Required</button>
                                    </>
                                }
                                {progressArray.length === 6 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[6].name])}>QA Review Complete</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[5].name])}>Return to Pending CAPA</button>
                                    </>
                                }
                                {progressArray.length === 7 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[7].name])}>QA Head Approval</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[6].name])}>Return to QA Review</button>
                                    </>
                                }
                                <button className="themeBtn">Exit</button>
                            </div>
                        </div>
                        <div className="progress-block">
                            {(progressArray === 'Closed-Cancelled') ?
                                <>
                                    <div className="active">Opened</div>
                                    <div className="active">Pending Incident Review</div>
                                    <div className="active closed">Closed-Cancelled</div>
                                </>
                                : progressItems.map((item) => (
                                    <div key={item.id} className={progressArray.includes(item.name) ? 'active' : ''}>
                                        {item.name}
                                        {item.details && <div className="details">{item.details}</div>}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className='document-block'>
                    <div className="document-tabs">
                        {formList.map((item, index) => (
                            <div key={index} className={form === item ? 'active' : ''} onClick={() => setForm(item)}>{item}</div>
                        ))}
                    </div>

                    {form === formList[0] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>Record Number</label>
                                        <input type="text" value={documentInformation.recordNumber} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Division Code</label>
                                        <input type="text" value={documentInformation.site} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Initiator</label>
                                        <input type="text" value={documentInformation.initiator} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Date of Initiation</label>
                                        <input type="text" value={documentInformation.dateOfInitiation} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Assigned To</label>
                                        <div className="instruction">&nbsp;</div>
                                        <select value={documentInformation.assignedTo} onChange={(e) => setDocumentInformation({ assignedTo: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="amit_guru">Amit Guru</option>
                                            <option value="shaleen_mishra">Shaleen Mishra</option>
                                            <option value="vikas_prajapati">Vikas Prajapati</option>
                                            <option value="anshul_patel">Anshul Patel</option>
                                            <option value="amit_patel">Amit Patel</option>
                                            <option value="madhulika_mishra">Madhulika Mishra</option>
                                        </select>
                                    </div>
                                    <InputDate
                                        label="Due Date"
                                        instruction="Please mention expected date of completion."
                                        isRequired="true"
                                        enableDate="future"
                                        value={documentInformation.dueDate}
                                        returnDate={(date) => setDocumentInformation({ dueDate: date })}
                                    />
                                    <div className="group-input">
                                        <label>Initiator Group </label>
                                        <select value={documentInformation.initiatorGroup} onChange={(e) => setDocumentInformation({ initiatorGroup: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="CQA">Corporate Quality Assurance</option>
                                            <option value="QAB">Quality Assurance BioPharma</option>
                                            <option value="CQC">Central Quality Control</option>
                                            <option value="Manu.">Manufacturing</option>
                                            <option value="PSG">Plasma Sourcing Group</option>
                                            <option value="CS">Central Stores</option>
                                            <option value="ITG">Information Technology Group</option>
                                            <option value="MM">Molecular Medicine</option>
                                            <option value="CL">Central Laboratory</option>
                                            <option value="TT">Tech team</option>
                                            <option value="QA"> Quality Assurance</option>
                                            <option value="QM">Quality Management</option>
                                            <option value="IA">IT Administration</option>
                                            <option value="ACC">Accounting</option>
                                            <option value="LOG">Logistics</option>
                                            <option value="SM">Senior Management</option>
                                            <option value="BA">Business Administration</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>Initiator Group Code</label>
                                        <input type="text" value={documentInformation.initiatorGroup} disabled />
                                    </div>
                                </div>
                                <div className='group-input'>
                                    <label><div className='required'></div>Short Description</label>
                                    <div className="instruction">Please mention brief summary</div>
                                    <textarea value={documentInformation.shortDescription} onChange={(e) => setDocumentInformation({ shortDescription: e.target.value })}></textarea>
                                </div>
                                <RelatedRecords
                                    label="Other Reference Document No"
                                />
                                <div className='form-flex'>
                                    <div className='group-input'>
                                        <label>Incident Category</label>
                                        <select value={documentInformation.incidentCategory} onChange={(e) => setDocumentInformation({ incidentCategory: e.target.value })}>
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Biological">Biological</option>
                                            <option value="Chemical">Chemical</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div className='group-input'>
                                        <label>Invocation Type</label>
                                        <select value={documentInformation.invocationType} onChange={(e) => setDocumentInformation({ invocationType: e.target.value })}>
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="auto">Auto</option>
                                            <option value="manual">Manual</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={labFile[0].label}
                                        required={labFile[0].required}
                                        instruction={labFile[0].instruction}
                                        columnList={labFile[0].columnList}
                                        initialValues={documentInformation.initialAttachment}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : form === formList[1] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="group-input">
                                    <label>Incident Details</label>
                                    <textarea value={incidentDetails.incidentDetails} onChange={(e) => setIncidentDetails({ incidentDetails: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Document Details</label>
                                    <textarea value={incidentDetails.documentDetails} onChange={(e) => setIncidentDetails({ documentDetails: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Instrument Details</label>
                                    <textarea value={incidentDetails.instrumentDetails} onChange={(e) => setIncidentDetails({ instrumentDetails: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Involved Personnel</label>
                                    <textarea value={incidentDetails.involvedPersonnel} onChange={(e) => setIncidentDetails({ involvedPersonnel: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Product Details,If Any</label>
                                    <textarea value={incidentDetails.productDetails} onChange={(e) => setIncidentDetails({ productDetails: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Supervisor Review Comments</label>
                                    <textarea value={incidentDetails.supervisorReviewComments} onChange={(e) => setIncidentDetails({ supervisorReviewComments: e.target.value })}></textarea>
                                </div>
                                <div className='group-input'>
                                    <Grid
                                        label={labFile[1].label}
                                        required={labFile[1].required}
                                        instruction={labFile[1].instruction}
                                        columnList={labFile[1].columnList}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : form === formList[2] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className='group-input'>
                                    <Grid
                                        label={labFile[2].label}
                                        required={labFile[2].required}
                                        instruction={labFile[2].instruction}
                                        columnList={labFile[2].columnList}
                                    />
                                </div>
                                <div className="group-input">
                                    <label>Investigation Details</label>
                                    <textarea value={investigationDetails.investigationDetails} onChange={(e) => setInvestigationDetails({ investigationDetails: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Action Taken</label>
                                    <textarea value={investigationDetails.actionTaken} onChange={(e) => setInvestigationDetails({ actionTaken: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Root Cause</label>
                                    <textarea value={investigationDetails.rootCause} onChange={(e) => setInvestigationDetails({ rootCause: e.target.value })}></textarea>
                                </div>

                            </div>
                        </div>
                    ) : form === formList[3] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="group-input">
                                    <label>Investigation Details</label>
                                    <textarea value={capa.investigationDetails} onChange={(e) => setCapa({ investigationDetails: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Action Taken</label>
                                    <textarea value={capa.actionTaken} onChange={(e) => setCapa({ actionTaken: e.target.value })}></textarea>
                                </div>
                                <div className='group-input'>
                                    <Grid
                                        label={labFile[3].label}
                                        required={labFile[3].required}
                                        instruction={labFile[3].instruction}
                                        columnList={labFile[3].columnList}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : form === formList[4] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="group-input">
                                    <label>QA Review Comments</label>
                                    <textarea value={qAReview.qAReviewComments} onChange={(e) => setQAReview({ qAReviewComments: e.target.value })}></textarea>
                                </div>
                                <div className='group-input'>
                                    <Grid
                                        label={labFile[4].label}
                                        required={labFile[4].required}
                                        instruction={labFile[4].instruction}
                                        columnList={labFile[4].columnList}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : form === formList[5] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="sub-head">Closure</div>
                                <div className="group-input">
                                    <label>Investigation Details</label>
                                    <textarea value={qAHeadApproval.investigationDetails} onChange={(e) => setQAHeadApproval({ investigationDetails: e.target.value })}></textarea>
                                </div>
                                <div className='form-flex'>
                                    <div className='group-input'>
                                        <label>Effectiveness Check required?</label>
                                        <select value={qAHeadApproval.effectivenessCheckRequired} onChange={(e) => setQAHeadApproval({ effectivenessCheckRequired: e.target.value })}>
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <InputDate
                                        label="Effectiveness Check Creation Date"
                                        instruction=""
                                        isDisabled={qAHeadApproval.effectivenessCheckRequired !== "Yes"}
                                        isRequired="false"
                                        enableDate="future"
                                        value={qAHeadApproval.effectivenessCheckCreationDate}
                                        returnDate={(date) => setQAHeadApproval({ effectivenessCheckCreationDate: date })}
                                    />
                                </div>
                                <div className='group-input'>
                                    <label>Effectiveness Checker</label>
                                    <select
                                        value={qAHeadApproval.effectivenessChecker}
                                        disabled={qAHeadApproval.effectivenessCheckRequired !== "Yes"}
                                        onChange={(e) => setQAHeadApproval({ effectivenessChecker: e.target.value })}
                                    >
                                        <option value="">-- Select --</option>
                                        <option value="amit_guru">Amit Guru</option>
                                        <option value="shaleen_mishra">Shaleen Mishra</option>
                                        <option value="vikas_prajapati">Vikas Prajapati</option>
                                        <option value="anshul_patel">Anshul Patel</option>
                                        <option value="amit_patel">Amit Patel</option>
                                        <option value="madhulika_mishra">Madhulika Mishra</option>
                                    </select>
                                </div>
                                <div className="group-input">
                                    <label>Conclusion</label>
                                    <textarea value={qAHeadApproval.conclusion} onChange={(e) => setQAHeadApproval({ conclusion: e.target.value })}></textarea>
                                </div>
                                <div className="sub-head">Extension Justification</div>
                                <div className="group-input">
                                    <label>Due Date Extension Justification</label>
                                    <div className="instruction">Please Mention justification if due date is crossed</div>
                                    <textarea value={qAHeadApproval.dueDateExtensionJustification} onChange={(e) => setQAHeadApproval({ dueDateExtensionJustification: e.target.value })}></textarea>
                                </div>
                            </div>
                        </div>
                    ) : form === formList[6] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>


                                <div className='activity-log-field'>
                                    <div>
                                        <strong> Submitted By:&nbsp;</strong>Shaleen Mishra
                                    </div>
                                    <div>
                                        <strong> Submitted On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>

                                <div className='activity-log-field'>
                                    <div>
                                        <strong> Incident Review Completed By:&nbsp;</strong>Anshul Jain
                                    </div>
                                    <div>
                                        <strong> Incident Review Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>

                                <div className='activity-log-field'>
                                    <div>
                                        <strong> Investigation Review Completed By:&nbsp;</strong>Amit Guru
                                    </div>
                                    <div>
                                        <strong> Investigation Review Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>

                                <div className='activity-log-field'>
                                    <div>
                                        <strong> Inv and CAPA Review Comp. By:&nbsp;</strong>Piyush Shau
                                    </div>
                                    <div>
                                        <strong>Inv and CAPA Review Comp. On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>

                                <div className='activity-log-field'>
                                    <div>
                                        <strong> QA Review Completed By:&nbsp;</strong>Gopal
                                    </div>
                                    <div>
                                        <strong>QA Review Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>

                                <div className='activity-log-field'>
                                    <div>
                                        <strong>QA Head Approval Completed By:&nbsp;</strong>Amit Patel
                                    </div>
                                    <div>
                                        <strong>QA Head Approval Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>



                                <div className='activity-log-field'>
                                    <div>
                                        <strong>Cancelled By:&nbsp;</strong>Amit Guru
                                    </div>
                                    <div>
                                        <strong>Cancelled On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>

                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className="button-block">
                    <button className='themeBtn'>Save</button>
                    <button className='themeBtn'>Back</button>
                    <button className='themeBtn'>Next</button>
                    <button className='themeBtn'>Exit</button>
                </div>

            </div>

            {signatureModal && <ESignatureModal closeModal={closeSignatureModal} returnSignature={signatureValue} />}

        </>
    )
}

export default LabIncidentPanel
