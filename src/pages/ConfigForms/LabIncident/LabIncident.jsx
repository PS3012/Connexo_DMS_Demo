import HeaderTop from "../../../components/Header/HeaderTop";
import { useReducer, useState } from 'react';
import Grid from '../../../components/DataFields/Grid';
import InputDate from '../../../components/DataFields/InputDate';
import { currentYear, formList, labFile, site, workFlow } from './LabIncidentFunctions';
import { CurrentDate } from "../../../components/DateReturners";
import RelatedRecords from "../../../components/DataFields/RelatedRecords";
import '../ConfigForms.css'

function LabIncident() {
    const [form, setForm] = useState(formList[0]);
    const [asideWorkFlow, setAsideWorkFlow] = useState(false);
    const [asideFamilyTree, setAsideFamilyTree] = useState(false);
    const [documentInformation, setDocumentInformation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        recordNumber: `${site}/LI/${currentYear}/000001`,
        site: site,
        initiator: 'Amit Guru',
        dateOfInitiation: CurrentDate(),
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

    return (
        <>
            <div id="main-form-container" style={asideWorkFlow || asideFamilyTree ? { 'padding': '0 0 0 300px' } : {}}>

                {asideWorkFlow &&
                    <div className="aside-container">
                        <div className="head">
                            <div>Workflow</div>
                            <div>Trust The Process</div>
                        </div>
                        <div className="content workflow">
                            {workFlow.map((item, index) => (
                                <div className={index === 0 ? "green-state" : index === (workFlow.length - 1) ? "red-state" : ""}>
                                    {item}
                                    {index !== (workFlow.length - 1) && <img src="/down.gif" alt="..." />}
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {asideFamilyTree &&
                    <div className="aside-container">
                        <div className="head">
                            <div>Family Tree</div>
                            <div>Family of Precision</div>
                        </div>
                        <div className="content family-list">
                            <div>CAPA (1)</div>
                            <div>Audit Program (0)</div>
                            <div>Observation (3)</div>
                            <div>Extension (2)</div>
                            <div>Effectiveness Check (0)</div>
                            <div>Change Control (0)</div>
                            <div>Root Cause Analysis (0)</div>
                        </div>
                    </div>
                }

                <div id='config-form-document-page'>
                    <HeaderTop />

                    <div className="top-block">
                        <div><strong> Record Name:&nbsp;</strong>Lab Incident</div>
                        <div><strong> Site:&nbsp;</strong>{site}</div>
                        <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
                        <div><strong> Initiated By:&nbsp;</strong>{documentInformation.initiator}</div>
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

                    <div className="button-block" style={asideWorkFlow || asideFamilyTree ? { 'width': 'calc(100% - 300px)' } : { 'width': '100%' }}>
                        <button className='themeBtn'>Save</button>
                        <button className='themeBtn'>Back</button>
                        <button className='themeBtn'>Next</button>
                        <button className='themeBtn'>Exit</button>
                    </div>

                </div>
                <div className="sticky-buttons">
                    <div onClick={() => { setAsideWorkFlow(!asideWorkFlow); setAsideFamilyTree(false) }}>
                        <svg width="18" height="24" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#ffffff" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34M332.1 128H256V51.9zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288zm220.1-208c-5.7 0-10.6 4-11.7 9.5c-20.6 97.7-20.4 95.4-21 103.5c-.2-1.2-.4-2.6-.7-4.3c-.8-5.1.3.2-23.6-99.5c-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1c-24.4 99-24 96.2-24.8 103.7c-.1-1.1-.2-2.5-.5-4.2c-.7-5.2-14.1-73.3-19.1-99c-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8c8 32.6 26.7 109.5 33.2 136c1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4c1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1c20.8-81.9 30.2-119 34.5-136c1.9-7.6-3.8-14.9-11.6-14.9h-15.8z" />
                        </svg>
                    </div>
                    <div onClick={() => { setAsideFamilyTree(!asideFamilyTree); setAsideWorkFlow(false) }}>
                        <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#ffffff" d="M25.01 49v46H103V49zM153 49v46h78V49zm128 0v46h78V49zm128 0v46h78V49zM55.01 113v64H119v46h18v-46h64v-64h-18v46H73.01v-46zM311 113v64h64v46h18v-46h64v-64h-18v46H329v-46zM89.01 241v46H167v-46zM345 241v46h78v-46zm-226 64v48h128v46h18v-46h128v-48h-18v30H137v-30zm98 112v46h78v-46z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LabIncident;
