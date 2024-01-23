import React, { useReducer, useState } from 'react';
import HeaderTop from '../../../components/Header/HeaderTop';
import { MultiSelect } from 'react-multi-select-component';
import Grid from '../../../components/DataFields/Grid';
import InputDate from '../../../components/DataFields/InputDate';
import { CurrentDate } from '../../../components/DateReturners';
import RelatedRecords from '../../../components/DataFields/RelatedRecords';
import HeaderBottom from '../../../components/Header/HeaderBottom';
import ESignatureModal from '../../../components/Modals/ESignatureModal/ESignatureModal';
import { CFTReviewer, changeCloser, docDetails, docFile, formList, progressItems } from './ChangeControlPanelFunctions';
import '../DocumentPanel.css'

function ChangeControlPanel() {
    const [generalInformation, setGeneralInformation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        recordNumber: 'Jordan/CC/2024/0001',
        site: 'Jordan',
        initiator: 'Amit Guru',
        dateOfInitiation: '24-Jan-2024',
        assignedTo: '',
        dueDate: '',
        initiatorGroup: '',
        shortDescription: '',
        initiatedThrough: '',
        initiatedThroughOthers: '',
        repeat: '',
        repeatNature: '',
        riskLevel: '',
        divisionCode: '',
        natureOfChange: '',
        natureOfChangeOthers: '',
        initialAttachment: '',
        groupComment: ''
    })
    const [changeDetails, setChangeDetails] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        documentDetails: '',
        currentPractice: '',
        proposedChange: '',
        reasonForChange: '',
        anyOtherComments: '',
        supervisorComments: ''
    })
    const [qAReview, setQAReview] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        typeOfChange: '',
        qAReviewComments: '',
        relatedRecords: '',
        qAAttachments: '',
        minorChangeJustification: '',
        majorChangeJustification: '',
        criticalChangeJustification: ''
    })
    const [evaluation, setEvaluation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        qAEvaluationComments: '',
        qAAttachments: '',
        trainingRequired: '',
        trainingComments: ''
    })
    const [additionalInformation, setAdditionalInformation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        cftReviewRequired: '',
        cftReviewerPerson: '',
        groupReviewRequired: '',
        production: '',
        productionPerson: '',
        qualityApprover: '',
        qualityApproverPerson: '',
        others: '',
        othersPerson: '',
        qaEvaluationComments: '',
        qaAttachments: ''
    })
    const [groupComments, setGroupComments] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        qaEvaluationComments: '',
        cftAttachments: '',
        qaComments: '',
        qaHeadDesigneeComments: '',
        warehouseComments: '',
        engineeringComments: '',
        instrumentationComments: '',
        validationComments: '',
        othersComments: '',
        groupComments: ''
    })
    const [riskAssessment, setRiskAssessment] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        riskIdentification: '',
        severityRate: 0,
        occurrence: 0,
        detection: 0,
        riskEvaluation: '',
        migrationAction: ''
    })
    const [qaApprovalComments, setQAApprovalComments] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        qaApprovalComments: '',
        trainingFeedback: '',
        trainingAttachments: ''
    })
    const [changeClosure, setChangeClosure] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        documentDetails: '',
        qaClosureComments: '',
        listOfAttachments: '',
        effectivenessCheckRequired: '',
        effectivenessCheckCreationDate: '',
        effectivenessChecker: '',
        effectivenessCheckPlan: '',
        dueDateExtensionJustification: '',
    })
    const [form, setForm] = useState(formList[0]);
    const [selected, setSelected] = useState([]);

    // ------------------Record Workflow-------------
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
                    <div><strong> Record Name:&nbsp;</strong>Change Control Panel</div>
                    <div><strong> Site:&nbsp;</strong>Jordan</div>
                    <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
                    <div><strong> Initiated By:&nbsp;</strong>Shaleen Mishra</div>
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
                                        <button className="themeBtn" onClick={() => handleESignature('closed', [])}>Cancel</button>
                                    </>
                                }
                                {progressArray.length === 2 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[2].name])}>HOD Review Complete</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[1].name])}>More Information Required</button>
                                    </>
                                }
                                {progressArray.length === 3 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[3].name])}>Send to CFT Reviewers</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[2].name])}>More Information Required</button>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[3].name, progressItems[4].name])}>CFT Review Not Required</button>
                                    </>
                                }
                                {progressArray.length === 4 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[4].name])}>Review Complete</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[2].name, progressItems[3].name])}>Request More Info</button>
                                    </>
                                }
                                {progressArray.length === 5 &&
                                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[5].name])}>Implemented</button>
                                }
                                <button className="themeBtn">Exit</button>
                            </div>
                        </div>
                        <div className="progress-block">
                            {(progressArray === 'Closed-Cancelled') ?
                                <>
                                    <div className="active">Opened</div>
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
                        <div className={form === formList[0] ? 'active' : ''} onClick={() => setForm(formList[0])}>{formList[0]}</div>
                        <div className={form === formList[1] ? 'active' : ''} onClick={() => setForm(formList[1])}>{formList[1]}</div>
                        <div className={form === formList[2] ? 'active' : ''} onClick={() => setForm(formList[2])}>{formList[2]}</div>
                        <div className={form === formList[3] ? 'active' : ''} onClick={() => setForm(formList[3])}>{formList[3]}</div>
                        <div className={form === formList[4] ? 'active' : ''} onClick={() => setForm(formList[4])}>{formList[4]}</div>
                        {generalInformation.groupComment === 'yes' &&
                            <div className={form === formList[5] ? 'active' : ''} onClick={() => setForm(formList[5])}>{formList[5]}</div>
                        }
                        <div className={form === formList[6] ? 'active' : ''} onClick={() => setForm(formList[6])}>{formList[6]}</div>
                        <div className={form === formList[7] ? 'active' : ''} onClick={() => setForm(formList[7])}>{formList[7]}</div>
                        <div className={form === formList[8] ? 'active' : ''} onClick={() => setForm(formList[8])}>{formList[8]}</div>
                        <div className={form === formList[9] ? 'active' : ''} onClick={() => setForm(formList[9])}>{formList[9]}</div>
                    </div>

                    {form === formList[0] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>Record Number</label>
                                        <input type="text" value={generalInformation.recordNumber} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Division Code</label>
                                        <input type="text" value={generalInformation.site} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Initiator</label>
                                        <input type="text" value={generalInformation.initiator} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Date of Initiation</label>
                                        <input type="text" value={generalInformation.dateOfInitiation} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Assigned To</label>
                                        <div className="instruction">&nbsp;</div>
                                        <select value={generalInformation.assignedTo} onChange={(e) => setGeneralInformation({ assignedTo: e.target.value })}>
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
                                        value={generalInformation.dueDate}
                                        returnDate={(date) => setGeneralInformation({ dueDate: date })}
                                    />
                                    <div className="group-input">
                                        <label>Initiator Group </label>
                                        <select value={generalInformation.initiatorGroup} onChange={(e) => setGeneralInformation({ initiatorGroup: e.target.value })}>
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
                                        <input type="text" value={generalInformation.initiatorGroup} disabled />
                                    </div>
                                </div>
                                <div className='group-input'>
                                    <label><div className='required'></div>Short Description</label>
                                    <div className="instruction">Please mention brief summary</div>
                                    <textarea value={generalInformation.shortDescription} onChange={(e) => setGeneralInformation({ shortDescription: e.target.value })}></textarea>
                                </div>
                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>Initiated Through</label>
                                        <div className='instruction'>Please select related information</div>
                                        <select value={generalInformation.initiatedThrough} onChange={(e) => setGeneralInformation({ initiatedThrough: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="recall">Recall</option>
                                            <option value="return">Return</option>
                                            <option value="deviation">Deviation</option>
                                            <option value="complaint">Complaint</option>
                                            <option value="regulatory">Regulatory</option>
                                            <option value="lab-incident">Lab Incident</option>
                                            <option value="improvement">Improvement</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {generalInformation.initiatedThrough === 'others' && <div className="required"></div>}
                                            Other
                                        </label>
                                        <textarea
                                            value={generalInformation.initiatedThroughOthers}
                                            onChange={(e) => setGeneralInformation({ initiatedThroughOthers: e.target.value })}
                                            required={generalInformation.initiatedThrough === 'others'}
                                        ></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Repeat</label>
                                        <div className='instruction'>Please select yes if it is has recurred in past six months</div>
                                        <select value={generalInformation.repeat} onChange={(e) => setGeneralInformation({ repeat: e.target.value })}>
                                            <option>Enter Your Selection Here</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="NA">NA</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {generalInformation.repeat === 'Yes' && <div className="required"></div>}
                                            Repeat Nature
                                        </label>
                                        <textarea
                                            value={generalInformation.repeatNature}
                                            onChange={(e) => setGeneralInformation({ repeatNature: e.target.value })}
                                            required={generalInformation.repeat === 'Yes'}
                                        ></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Risk Level</label>
                                        <select value={generalInformation.riskLevel} onChange={(e) => setGeneralInformation({ riskLevel: e.target.value })}>
                                            <option value="0">-- Select --</option>
                                            <option value="minor">Minor</option>
                                            <option value="major">Major</option>
                                            <option value="critical">Critical</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <div className="required"></div>
                                            Division Code
                                        </label>
                                        <select value={generalInformation.divisionCode} onChange={(e) => setGeneralInformation({ divisionCode: e.target.value })}>
                                            <option value="0">-- Select --</option>
                                            <option value="P1">P1</option>
                                            <option value="P2">P2</option>
                                            <option value="P3">P3</option>
                                            <option value="P4A">P4A</option>
                                            <option value="P4B">P4B</option>
                                            <option value="P5">P5</option>
                                            <option value="P6">P6</option>
                                            <option value="P7">P7</option>
                                            <option value="RLS">RLS</option>
                                            <option value="CRS">CRS</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>Nature Of Change</label>
                                        <select name="natureChange" value={generalInformation.natureOfChange} onChange={(e) => setGeneralInformation({ natureOfChange: e.target.value })}>
                                            <option value="0">-- Select --</option>
                                            <option value="Temporary">Temporary</option>
                                            <option value="Permanent">Permanent</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {generalInformation.natureOfChange === 'Others' && <div className="required"></div>}
                                            If Others
                                        </label>
                                        <textarea
                                            value={generalInformation.natureOfChangeOthers}
                                            onChange={(e) => setGeneralInformation({ natureOfChangeOthers: e.target.value })}
                                            required={generalInformation.natureOfChange === 'Others'}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={docFile[0].label}
                                        required={docFile[0].required}
                                        instruction={docFile[0].instruction}
                                        columnList={docFile[0].columnList}
                                    />
                                </div>
                                <div className="group-input">
                                    <label htmlFor="group_comment_required">Group Comment Required</label>
                                    <select name="group_comment_required" value={generalInformation.groupComment} onChange={(e) => setGeneralInformation({ groupComment: e.target.value })}>
                                        <option value="0">-- Select --</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ) : form === formList[1] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <Grid
                                    label={docDetails.label}
                                    required={docDetails.required}
                                    instruction={docDetails.instruction}
                                    columnList={docDetails.columnList}
                                />
                                <div className="sub-head">
                                    Change Details
                                </div>
                                <div className="group-input">
                                    <label>Current Practice</label>
                                    <textarea value={changeDetails.currentPractice} onChange={(e) => setChangeDetails({ currentPractice: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Proposed Change</label>
                                    <textarea value={changeDetails.proposedChange} onChange={(e) => setChangeDetails({ proposedChange: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Reason for Change</label>
                                    <textarea value={changeDetails.reasonForChange} onChange={(e) => setChangeDetails({ reasonForChange: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Any Other Comments</label>
                                    <textarea value={changeDetails.anyOtherComments} onChange={(e) => setChangeDetails({ anyOtherComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Supervisor Comments</label>
                                    <textarea value={changeDetails.supervisorComments} onChange={(e) => setChangeDetails({ supervisorComments: e.target.value })}></textarea>
                                </div>
                            </div>
                        </div>
                    ) : form === formList[2] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="group-input">
                                    <label>Type of Change</label>
                                    <select name="type_change" value={qAReview.typeOfChange} onChange={(e) => setQAReview({ typeOfChange: e.target.value })}>
                                        <option value="0">-- Select --</option>
                                        <option value="minor">Minor</option>
                                        <option value="major">Major</option>
                                        <option value="critical">Critical</option>
                                    </select>
                                </div>
                                <div className="group-input">
                                    <label>QA Review Comments</label>
                                    <textarea value={qAReview.qAReviewComments} onChange={(e) => setQAReview({ qAReviewComments: e.target.value })}></textarea>
                                </div>
                                <RelatedRecords
                                    label="Related Records"
                                />
                                <div className="group-input">
                                    <Grid
                                        label={docFile[1].label}
                                        required={docFile[1].required}
                                        instruction={docFile[1].instruction}
                                        columnList={docFile[1].columnList}
                                    />
                                </div>
                                {generalInformation.typeOfChange === 'minor' ?
                                    <>
                                        <div className="sub-head">
                                            Minor Change Justification
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <div className="required"></div>
                                                Minor Change Justification
                                            </label>
                                            <textarea value={qAReview.minorChangeJustification} onChange={(e) => setQAReview({ minorChangeJustification: e.target.value })} required={generalInformation.typeOfChange === 'minor'}></textarea>
                                        </div>
                                    </> : ''
                                }
                                {generalInformation.typeOfChange === 'major' ?
                                    <>
                                        <div className="sub-head">
                                            Major Change Justification
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <div className="required"></div>
                                                Major Change Justification
                                            </label>
                                            <textarea value={qAReview.majorChangeJustification} onChange={(e) => setQAReview({ majorChangeJustification: e.target.value })} required={generalInformation.typeOfChange === 'major'}></textarea>
                                        </div>
                                    </> : ''
                                }
                                {generalInformation.typeOfChange === 'critical' ?
                                    <>
                                        <div className="sub-head">
                                            Critical Change Justification
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <div className="required"></div>
                                                Critical Change Justification
                                            </label>
                                            <textarea value={qAReview.criticalChangeJustification} onChange={(e) => setQAReview({ criticalChangeJustification: e.target.value })} required={generalInformation.typeOfChange === 'critical'}></textarea>
                                        </div>
                                    </> : ''
                                }
                            </div>
                        </div>
                    ) : form === formList[3] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="sub-head">
                                    Evaluation Detail
                                </div>
                                <div className="group-input">
                                    <label>QA Evaluation Comments</label>
                                    <textarea value={evaluation.qAEvaluationComments} onChange={(e) => setEvaluation({ qAEvaluationComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={docFile[2].label}
                                        required={docFile[2].required}
                                        instruction={docFile[2].instruction}
                                        columnList={docFile[2].columnList}
                                    />
                                </div>
                                <div className="sub-head">
                                    Training Information
                                </div>
                                <div className="group-input">
                                    <label>Training Required</label>
                                    <select value={evaluation.trainingRequired} onChange={(e) => setEvaluation({ trainingRequired: e.target.value })}>
                                        <option value="">-- Select --</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                {evaluation.trainingRequired === 'Yes' &&
                                    <div className="group-input">
                                        <label>
                                            {evaluation.trainingRequired === 'Yes' && <div className="required"></div>}
                                            Training Comments
                                        </label>
                                        <textarea value={evaluation.trainingComments} onChange={(e) => setEvaluation({ trainingComments: e.target.value })} required={evaluation.trainingRequired === 'Yes'}></textarea>
                                    </div>
                                }
                            </div>
                        </div>
                    ) : form === formList[4] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="sub-head">
                                    CFT Information
                                </div>
                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>CFT Review Required</label>
                                        <select name="type_change" value={additionalInformation.cftReviewRequired} onChange={(e) => setAdditionalInformation({ cftReviewRequired: e.target.value })}>
                                            <option value="0">-- Select --</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {additionalInformation.cftReviewRequired === "Yes" && <div className="required"></div>}
                                            CFT Reviewer Person
                                        </label>
                                        <MultiSelect
                                            options={CFTReviewer}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            required={additionalInformation.cftReviewRequired === "Yes"}
                                            disabled={!additionalInformation.cftReviewRequired === "Yes"}
                                        />
                                    </div>
                                </div>
                                <div className="sub-head">
                                    Concerned Information
                                </div>
                                <div className="group-input">
                                    <label>Is Concerned Group Review Required?</label>
                                    <select name="type_change" value={additionalInformation.groupReviewRequired} onChange={(e) => setAdditionalInformation({ groupReviewRequired: e.target.value })}>
                                        <option value="0">-- Select --</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>Production</label>
                                        <select
                                            name="type_change"
                                            value={additionalInformation.production}
                                            disabled={additionalInformation.groupReviewRequired !== 'Yes'}
                                            onChange={(e) => setAdditionalInformation({ production: e.target.value })}
                                        >
                                            <option value="0">-- Select --</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {additionalInformation.production === 'Yes' && <div className="required"></div>}
                                            Production Person
                                        </label>
                                        <select
                                            name="Production_Person"
                                            value={additionalInformation.productionPerson}
                                            disabled={additionalInformation.production !== 'Yes' || additionalInformation.groupReviewRequired !== 'Yes'}
                                            onChange={(e) => setAdditionalInformation({ productionPerson: e.target.value })}
                                        >
                                            <option value="0">-- Select --</option>
                                            <option value="1">Amit Guru</option>
                                            <option value="2">Shaleen Mishra</option>
                                            <option value="3">Vikas Prajapati</option>
                                            <option value="4">Anshul Patel</option>
                                            <option value="5">Amit Patel</option>
                                            <option value="6">Madhulika Mishra</option>
                                            <option value="7">Jin Kim</option>
                                            <option value="8">Akash Asthana</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>Quality Approver</label>
                                        <select
                                            name="Quality_Approver"
                                            value={additionalInformation.qualityApprover}
                                            disabled={additionalInformation.groupReviewRequired !== 'Yes'}
                                            onChange={(e) => setAdditionalInformation({ qualityApprover: e.target.value })}
                                        >
                                            <option value="0">-- Select --</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {additionalInformation.qualityApprover === 'Yes' && <div className="required"></div>}
                                            Quality Approver Person
                                        </label>
                                        <select
                                            name="Quality_Approver_Person"
                                            value={additionalInformation.qualityApproverPerson}
                                            disabled={additionalInformation.qualityApprover !== 'Yes' || additionalInformation.groupReviewRequired !== 'Yes'}
                                            onChange={(e) => setAdditionalInformation({ qualityApproverPerson: e.target.value })}
                                        >
                                            <option value="0">-- Select --</option>
                                            <option value="1">Amit Guru</option>
                                            <option value="2">Shaleen Mishra</option>
                                            <option value="3">Vikas Prajapati</option>
                                            <option value="4">Anshul Patel</option>
                                            <option value="5">Amit Patel</option>
                                            <option value="6">Madhulika Mishra</option>
                                            <option value="7">Jin Kim</option>
                                            <option value="8">Akash Asthana</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            Others
                                        </label>
                                        <select
                                            name="type_change"
                                            value={additionalInformation.others}
                                            disabled={additionalInformation.groupReviewRequired !== 'Yes'}
                                            onChange={(e) => setAdditionalInformation({ others: e.target.value })}
                                        >
                                            <option value="0">-- Select --</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {additionalInformation.others === 'Yes' && <div className="required"></div>}
                                            Others Person
                                        </label>
                                        <select
                                            name="Production_Person"
                                            value={additionalInformation.othersPerson}
                                            disabled={additionalInformation.others !== 'Yes' || additionalInformation.groupReviewRequired !== 'Yes'}
                                            onChange={(e) => setAdditionalInformation({ othersPerson: e.target.value })}
                                        >
                                            <option value="0">-- Select --</option>
                                            <option value="1">Amit Guru</option>
                                            <option value="2">Shaleen Mishra</option>
                                            <option value="3">Vikas Prajapati</option>
                                            <option value="4">Anshul Patel</option>
                                            <option value="5">Amit Patel</option>
                                            <option value="6">Madhulika Mishra</option>
                                            <option value="7">Jin Kim</option>
                                            <option value="8">Akash Asthana</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="group-input">
                                    <label>QA Evaluation Comments</label>
                                    <textarea value={additionalInformation.qAEvaluationComments} onChange={(e) => setAdditionalInformation({ qAEvaluationComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={docFile[3].label}
                                        required={docFile[3].required}
                                        instruction={docFile[3].instruction}
                                        columnList={docFile[3].columnList}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : form === formList[5] && generalInformation.groupComment === 'yes' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="sub-head">
                                    CFT Feedback
                                </div>
                                <div className="group-input">
                                    <label>QA Evaluation Comments</label>
                                    <textarea value={groupComments.qaEvaluationComments} setGroupComments={(e) => setGroupComments({ qaEvaluationComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={docFile[4].label}
                                        required={docFile[4].required}
                                        instruction={docFile[4].instruction}
                                        columnList={docFile[4].columnList}
                                    />
                                </div>
                                <div className="sub-head">
                                    Concerned Group Feedback
                                </div>
                                <div className="group-input">
                                    <label>QA Comments</label>
                                    <textarea value={groupComments.qaComments} setGroupComments={(e) => setGroupComments({ qaComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>QA Head Designee Comments</label>
                                    <textarea value={groupComments.qaHeadDesigneeComments} setGroupComments={(e) => setGroupComments({ qaHeadDesigneeComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Warehouse Comments</label>
                                    <textarea value={groupComments.warehouseComments} setGroupComments={(e) => setGroupComments({ warehouseComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Engineering Comments</label>
                                    <textarea value={groupComments.engineeringComments} setGroupComments={(e) => setGroupComments({ engineeringComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Instrumentation Comments</label>
                                    <textarea value={groupComments.instrumentationComments} setGroupComments={(e) => setGroupComments({ instrumentationComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Validation Comments</label>
                                    <textarea value={groupComments.validationComments} setGroupComments={(e) => setGroupComments({ validationComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Others Comments</label>
                                    <textarea value={groupComments.othersComments} setGroupComments={(e) => setGroupComments({ othersComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Group Comments</label>
                                    <textarea value={groupComments.groupComments} setGroupComments={(e) => setGroupComments({ groupComments: e.target.value })}></textarea>
                                </div>
                            </div>
                        </div>
                    ) : form === formList[6] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="sub-head">
                                    Risk Assessment
                                </div>
                                <div className="group-input">
                                    <label>Risk Identification</label>
                                    <textarea value={riskAssessment.riskIdentification} onChange={(e) => setRiskAssessment({ riskIdentification: e.target.value })}></textarea>
                                </div>
                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>Severity Rate</label>
                                        <select name="severity" value={riskAssessment.severityRate} onChange={(e) => setRiskAssessment({ severityRate: e.target.value })}>
                                            <option value="0">-- Select --</option>
                                            <option value="1">Low</option>
                                            <option value="2">Medium</option>
                                            <option value="3">High</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>Occurrence</label>
                                        <select name="Occurrence" value={riskAssessment.occurrence} onChange={(e) => setRiskAssessment({ occurrence: e.target.value })}>
                                            <option value="0">-- Select --</option>
                                            <option value="1">Low</option>
                                            <option value="2">Medium</option>
                                            <option value="3">High</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>Detection</label>
                                        <select name="Detection" value={riskAssessment.detection} onChange={(e) => setRiskAssessment({ detection: e.target.value })}>
                                            <option value="0">-- Select --</option>
                                            <option value="1">Low</option>
                                            <option value="2">Medium</option>
                                            <option value="3">High</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>RPN</label>
                                        <div className="instruction">Auto - Calculated</div>
                                        <input type='text' value={riskAssessment.severityRate * riskAssessment.occurrence * riskAssessment.detection} disabled />
                                    </div>
                                </div>
                                <div className="group-input">
                                    <label>Risk Evaluation</label>
                                    <textarea value={riskAssessment.riskEvaluation} onChange={(e) => setRiskAssessment({ riskEvaluation: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Migration Action</label>
                                    <textarea value={riskAssessment.migrationAction} onChange={(e) => setRiskAssessment({ migrationAction: e.target.value })}></textarea>
                                </div>
                            </div>
                        </div>
                    ) : form === formList[7] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="group-input">
                                    <label>QA Approval Comments</label>
                                    <textarea value={qaApprovalComments.qaApprovalComments} onChange={(e) => setQAApprovalComments({ qaApprovalComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Training Feedback</label>
                                    <textarea value={qaApprovalComments.trainingFeedback} onChange={(e) => setQAApprovalComments({ trainingFeedback: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={docFile[5].label}
                                        required={docFile[5].required}
                                        instruction={docFile[5].instruction}
                                        columnList={docFile[5].columnList}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : form === formList[8] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <Grid
                                    label={changeCloser.label}
                                    required={changeCloser.required}
                                    instruction={changeCloser.instruction}
                                    columnList={changeCloser.columnList}
                                />
                                <div className="group-input">
                                    <label>QA Closure Comments</label>
                                    <textarea value={changeClosure.qaClosureComments} onChange={(e) => setChangeClosure({ qaClosureComments: e.target.value })}></textarea>
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={docFile[6].label}
                                        required={docFile[6].required}
                                        instruction={docFile[6].instruction}
                                        columnList={docFile[6].columnList}
                                    />
                                </div>
                                <div className="sub-head">
                                    Effectiveness Check Details
                                </div>
                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>Effectiveness Check Required?</label>
                                        <select value={changeClosure.effectivenessCheckRequired} onChange={(e) => setChangeClosure({ effectivenessCheckRequired: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <InputDate
                                        label="Effectiveness Check Creation Date"
                                        instruction=""
                                        isRequired={changeClosure.effectivenessCheckRequired === 'Yes'}
                                        isDisabled={changeClosure.effectivenessCheckRequired !== 'Yes'}
                                        enableDate="future"
                                        value={changeClosure.effectivenessCheckCreationDate}
                                        returnDate={(date) => setChangeClosure({ effectivenessCheckCreationDate: date })}
                                    />
                                </div>
                                <div className="group-input">
                                    <label>
                                        {changeClosure.effectivenessCheckRequired === 'Yes' && <div className="required"></div>}
                                        Effectiveness Checker
                                    </label>
                                    <select
                                        value={changeClosure.effectivenessChecker}
                                        onChange={(e) => setChangeClosure({ effectivenessChecker: e.target.value })}
                                        required={changeClosure.effectivenessCheckRequired === 'Yes'}
                                        disabled={changeClosure.effectivenessCheckRequired !== 'Yes'}
                                    >
                                        <option value="">Enter Your Selection Here</option>
                                        <option value="1">Amit Guru</option>
                                        <option value="2">Shaleen Mishra</option>
                                        <option value="3">Vikas Prajapati</option>
                                        <option value="4">Anshul Patel</option>
                                        <option value="5">Amit Patel</option>
                                        <option value="6">Madhulika Mishra</option>
                                        <option value="7">Jin Kim</option>
                                        <option value="8">Akash Asthana</option>
                                    </select>
                                </div>
                                <div className="group-input">
                                    <label>
                                        {changeClosure.effectivenessCheckRequired === 'Yes' && <div className="required"></div>}
                                        Effectiveness Check Plan
                                    </label>
                                    <textarea
                                        value={changeClosure.effectivenessCheckPlan}
                                        disabled={changeClosure.effectivenessCheckRequired !== 'Yes'}
                                        required={changeClosure.effectivenessCheckRequired === 'Yes'}
                                        onChange={(e) => setChangeClosure({ effectivenessCheckPlan: e.target.value })}
                                    ></textarea>
                                </div>
                                <div className="sub-head">
                                    Extension Justification
                                </div>
                                <div className="group-input">
                                    <label>Due Date Extension Justification</label>
                                    <div className="instruction">Please Mention justification if due date is crossed</div>
                                    <textarea value={changeClosure.dueDateExtensionJustification} onChange={(e) => setChangeClosure({ dueDateExtensionJustification: e.target.value })}></textarea>
                                </div>
                            </div>
                        </div>
                    ) : form === formList[9] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="sub-head">
                                    Electronic Signatures
                                </div>
                                <div className="activity-log-field">
                                    <div>
                                        <strong>Submitted By:&nbsp;</strong>Shaleen Mishra
                                    </div>
                                    <div>
                                        <strong>Submitted On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>
                                <div className="activity-log-field">
                                    <div>
                                        <strong>Cancelled By:&nbsp;</strong>Shaleen Mishra
                                    </div>
                                    <div>
                                        <strong>Cancelled On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>
                                <div className="activity-log-field">
                                    <div>
                                        <strong>More Information Required By:&nbsp;</strong>Shaleen Mishra
                                    </div>
                                    <div>
                                        <strong>More Information Required On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ''}
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

export default ChangeControlPanel
