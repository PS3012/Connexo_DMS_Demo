import { useReducer, useState } from 'react'
import './ConfigForms.css'
import { MultiSelect } from 'react-multi-select-component';
import HeaderTop from '../../components/Header/HeaderTop';
import Grid from '../../components/DataFields/Grid';
import InputDate from '../../components/DataFields/InputDate';
import { CurrentDate } from '../../components/DateReturners';
import FlexField from '../../components/DataFields/FlexField';
import RelatedRecords from '../../components/DataFields/RelatedRecords';

function ChangeControlForm() {
    const formList = ["General Information", "Change Details", "QA Review", "Evaluation", "Additional Information", "Group Comments", "Risk Assessment", "QA Approval Comments", "Change Closure", "Activity Log"]
    const [changeControl, setChangeControl] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        shortDescription: '',
        initiatorGroup: '',
        initiatedThrough: '',
        repeat: '',
        trainingRequired: '',
        typeOfChange: 0,
        severityRate: 0,
        occurrence: 0,
        detection: 0,
        CFTReviewers: 0,
        groupReviewRequired: 0,
        production: 0,
        productionPerson: 0,
        qualityApprover: 0,
        qualityApproverPerson: 0,
        others: 0,
        othersPerson: 0
    })
    const [form, setForm] = useState(formList[0]);
    const [selected, setSelected] = useState([]);
    const [groupComment, setGroupComment] = useState(0)
    const [asideWorkFlow, setAsideWorkFlow] = useState(false)
    const [asideFamilyTree, setAsideFamilyTree] = useState(false)
    const CFTReviewer = [
        { label: "Anshul Patel", value: "1" },
        { label: "Mango", value: "mango", disabled: true },
        { label: "Amit", value: "2", },
    ];
    const docFile = [
        {
            label: 'Initial attachment',
            instruction: 'Please Attach all relevant or supporting documents',
            required: true,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        }, {
            label: 'QA Attachments',
            instruction: 'Please Attach all relevant or supporting documents',
            required: true,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        }, {
            label: 'QA Attachments',
            instruction: 'Please Attach all relevant or supporting documents',
            required: true,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        }, {
            label: 'QA Attachments',
            instruction: 'Please Attach all relevant or supporting documents',
            required: true,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        }, {
            label: 'CFT Attachments',
            instruction: 'Please Attach all relevant or supporting documents',
            required: true,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        }, {
            label: 'Training Attachments',
            instruction: 'Please Attach all relevant or supporting documents',
            required: true,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        }, {
            label: 'List of Attachments',
            instruction: 'Please Attach all relevant or supporting documents',
            required: true,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        },
    ]
    const docDetails = {
        label: 'Document Details',
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: '2.1.1.1', name: 'Current Document No.', type: 'text' },
            { id: '2.1.1.2', name: 'Current Version No.', type: 'number' },
            { id: '2.1.1.3', name: 'New Document No.', type: 'text' },
            { id: '2.1.1.4', name: 'New Version No.', type: 'number' },
            { id: '2.1.1.5', name: 'Remarks', type: 'text' },
        ]
    }
    const changeCloser = {
        label: 'Document Details',
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: '2.1.1.1', name: 'Affected Documents', type: 'text' },
            { id: '2.1.1.2', name: 'Document Name', type: 'number' },
            { id: '2.1.1.3', name: 'Document No.', type: 'text' },
            { id: '2.1.1.4', name: 'Version No.', type: 'number' },
            { id: '2.1.1.5', name: 'Implementation Date', type: 'date' },
            { id: '2.1.1.6', name: 'New Document No.', type: 'text' },
            { id: '2.1.1.7', name: 'New Version No.', type: 'text' },
            { id: '2.1.1.8', name: 'Remarks', type: 'text' },

        ]
    }

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
                            <div className="green-state">
                                Opened
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                Under HOD Review
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                HOD Review Completed
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                Under CFT Review
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                Approved
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                Implemented
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div className="red-state">
                                Closed-Done
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div className="red-state">
                                Closed- Cancelled
                            </div>
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

                <div id="config-form-document-page">

                    <HeaderTop />

                    <div className="top-block">
                        <div><strong> Record Name:&nbsp;</strong>Change Control</div>
                        <div><strong> Site:&nbsp;</strong>Jordan</div>
                        <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
                        <div><strong> Initiated By:&nbsp;</strong>Shaleen Mishra</div>
                    </div>

                    <div className='document-block'>
                        <div className="document-tabs">
                            <div className={form === formList[0] ? 'active' : ''} onClick={() => setForm(formList[0])}>{formList[0]}</div>

                            <div className={form === formList[1] ? 'active' : ''} onClick={() => setForm(formList[1])}>{formList[1]}</div>

                            <div className={form === formList[2] ? 'active' : ''} onClick={() => setForm(formList[2])}>{formList[2]}</div>

                            <div className={form === formList[3] ? 'active' : ''} onClick={() => setForm(formList[3])}>{formList[3]}</div>

                            <div className={form === formList[4] ? 'active' : ''} onClick={() => setForm(formList[4])}>{formList[4]}</div>

                            {groupComment === 'yes' &&
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
                                    <div className="group-input">
                                        <label>Record Number</label>
                                        <input type="text" value="Jordan/CC/2024/00000001" disabled />
                                    </div>
                                    <div className='form-flex'>
                                        <div className="group-input">
                                            <label>Initiator</label>
                                            <input type="text" value="Amit Guru" disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Date of Initiation</label>
                                            <input type="" value={CurrentDate()} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <div className="required"></div>
                                                Assigned To
                                            </label>
                                            <select name="assign_to">
                                                <option value="">Select a value</option>
                                                <option value="2">Shaleen Mishra</option>
                                            </select>
                                        </div>
                                        <InputDate
                                            label="Due Date"
                                            instruction="Please mention expected date of completion."
                                            isRequired="true"
                                            enableDate="future"
                                        />
                                        <div className="group-input">
                                            <label htmlFor="initiatorGroup">
                                                <div className="required"></div>
                                                Initiator Group
                                            </label>
                                            <select name="initiatorGroup" value={changeControl.initiatorGroup} onChange={(e) => setChangeControl({ initiatorGroup: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="CQA">Corporate Quality Assurance</option>
                                                <option value="QAB">Quality Assurance Bio-Pharma</option>
                                                <option value="CQC">Central Quality Control</option>
                                                <option value="Manu">Manufacturing</option>
                                                <option value="PSG">Plasma Sourcing Group</option>
                                                <option value="CS" >Central Stores</option>
                                                <option value="ITG">Information Technology Group</option>
                                                <option value="MM" >Molecular Medicine</option>
                                                <option value="CL" >Central Laboratory</option>
                                                <option value="TT" >Tech team</option>
                                                <option value="QA" > Quality Assurance</option>
                                                <option value="QM" >Quality Management</option>
                                                <option value="IA" >IT Administration</option>
                                                <option value="ACC">Accounting</option>
                                                <option value="LOG">Logistics</option>
                                                <option value="SM" >Senior Management</option>
                                                <option value="BA" >Business Administration</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Initiator Group Code</label>
                                            <input type="text" value={changeControl.initiatorGroup} disabled />
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <div className="require"></div>
                                            Short Description
                                        </label>
                                        <input type="text" />
                                    </div>
                                    <div className='form-flex'>
                                        <div className="group-input">
                                            <label>Initiated Through</label>
                                            <div className='instruction'>Please select related information</div>
                                            <select name="initiated_through" value={changeControl.initiatedThrough} onChange={(e) => setChangeControl({ initiatedThrough: e.target.value })}>
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
                                                {changeControl.initiatedThrough === 'others' && <div className="required"></div>}
                                                Other
                                            </label>
                                            <textarea name="w3review" required={changeControl.initiatedThrough === 'others'}></textarea>
                                        </div>
                                        <div className="group-input">
                                            <label>Repeat</label>
                                            <div className='instruction'>Please select yes if it is has recurred in past six months</div>
                                            <select name="repeat" value={changeControl.repeat} onChange={(e) => setChangeControl({ repeat: e.target.value })}>
                                                <option>Enter Your Selection Here</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                                <option value="NA">NA</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {changeControl.repeat === 'Yes' && <div className="required"></div>}
                                                Repeat Nature
                                            </label>
                                            <textarea name="w3review" required={changeControl.repeat === 'Yes'}></textarea>
                                        </div>
                                        <div className="group-input">
                                            <label>Risk Level</label>
                                            <select name="risk_level">
                                                <option value="0">-- Select --</option>
                                                <option value="minor">Minor</option>
                                                <option value="major">Major</option>
                                                <option value="critical">Critical</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <div className="required"></div>
                                                Division
                                            </label>
                                            <select name="div_code">
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
                                            <select name="natureChange" value={changeControl.natureOfChange} onChange={(e) => setChangeControl({ natureOfChange: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="Temporary">Temporary</option>
                                                <option value="Permanent">Permanent</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {changeControl.natureOfChange === 'Others' && <div className="required"></div>}
                                                If Others
                                            </label>
                                            <textarea name="w3review" required={changeControl.natureOfChange === 'Others'}></textarea>
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
                                        <select name="group_comment_required" value={groupComment} onChange={(e) => setGroupComment(e.target.value)}>
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
                                    <FlexField
                                        label="Current Practice"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Proposed Change"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Reason for Change"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Any Other Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Supervisor Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                </div>
                            </div>
                        ) : form === formList[2] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="group-input">
                                        <label>Type of Change</label>
                                        <select name="type_change" value={changeControl.typeOfChange} onChange={(e) => setChangeControl({ typeOfChange: e.target.value })}>
                                            <option value="0">-- Select --</option>
                                            <option value="minor">Minor</option>
                                            <option value="major">Major</option>
                                            <option value="critical">Critical</option>
                                        </select>
                                    </div>
                                    <FlexField
                                        label="QA Review Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
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
                                    {changeControl.typeOfChange === 'minor' ?
                                        <>
                                            <div className="sub-head">
                                                Minor Change Justification
                                            </div>
                                            <FlexField
                                                label="Minor Change Justification"
                                                instruction=""
                                                isRequired={changeControl.typeOfChange === 'minor' ? "true" : "false"}
                                            />
                                        </> : ''
                                    }
                                    {changeControl.typeOfChange === 'major' ?
                                        <>
                                            <div className="sub-head">
                                                Major Change Justification
                                            </div>
                                            <FlexField
                                                label="Major Change Justification"
                                                instruction=""
                                                isRequired={changeControl.typeOfChange === 'Major' ? "true" : "false"}
                                            />
                                        </> : ''
                                    }
                                    {changeControl.typeOfChange === 'critical' ?
                                        <>
                                            <div className="sub-head">
                                                Critical Change Justification
                                            </div>
                                            <FlexField
                                                label="Critical Change Justification"
                                                instruction=""
                                                isRequired={changeControl.typeOfChange === 'Critical' ? "true" : "false"}
                                            />
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
                                    <FlexField
                                        label="QA Evaluation Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
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
                                        <select name="training_required" value={changeControl.trainingRequired} onChange={(e) => setChangeControl({ trainingRequired: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    {changeControl.trainingRequired === 'Yes' &&
                                        <FlexField
                                            label="Training Comments"
                                            instruction=""
                                            isRequired={changeControl.trainingRequired === 'Yes' ? "true" : "false"}
                                        />
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
                                            <label>CFT Reviewer</label>
                                            <select name="type_change" value={changeControl.CFTReviewers} onChange={(e) => setChangeControl({ CFTReviewers: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {changeControl.CFTReviewers === "Yes" && <div className="required"></div>}
                                                CFT Reviewer Person
                                            </label>
                                            <MultiSelect
                                                options={CFTReviewer}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                required={changeControl.CFTReviewers === "Yes"}
                                                disabled={!changeControl.CFTReviewers === "Yes"}
                                            />
                                        </div>
                                    </div>
                                    <div className="sub-head">
                                        Concerned Information
                                    </div>
                                    <div className="group-input">
                                        <label>Is Concerned Group Review Required?</label>
                                        <select name="type_change" value={changeControl.groupReviewRequired} onChange={(e) => setChangeControl({ groupReviewRequired: e.target.value })}>
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
                                                value={changeControl.production}
                                                disabled={changeControl.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setChangeControl({ production: e.target.value })}
                                            >
                                                <option value="0">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {changeControl.production === 'Yes' && <div className="required"></div>}
                                                Production Person
                                            </label>
                                            <select
                                                name="Production_Person"
                                                value={changeControl.productionPerson}
                                                disabled={changeControl.production !== 'Yes' || changeControl.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setChangeControl({ productionPerson: e.target.value })}
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
                                                value={changeControl.qualityApprover}
                                                disabled={changeControl.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setChangeControl({ qualityApprover: e.target.value })}
                                            >
                                                <option value="0">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {changeControl.qualityApprover === 'Yes' && <div className="required"></div>}
                                                Quality Approver Person
                                            </label>
                                            <select
                                                name="Quality_Approver_Person"
                                                value={changeControl.qualityApproverPerson}
                                                disabled={changeControl.qualityApprover !== 'Yes' || changeControl.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setChangeControl({ qualityApproverPerson: e.target.value })}
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
                                                value={changeControl.others}
                                                disabled={changeControl.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setChangeControl({ others: e.target.value })}
                                            >
                                                <option value="0">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {changeControl.others === 'Yes' && <div className="required"></div>}
                                                Others Person
                                            </label>
                                            <select
                                                name="Production_Person"
                                                value={changeControl.othersPerson}
                                                disabled={changeControl.others !== 'Yes' || changeControl.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setChangeControl({ othersPerson: e.target.value })}
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
                                    <FlexField
                                        label="QA Evaluation Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
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
                        ) : form === formList[5] && groupComment === 'yes' ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="sub-head">
                                        CFT Feedback
                                    </div>
                                    <FlexField
                                        label="QA Evaluation Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
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
                                    <FlexField
                                        label="QA Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="QA Head Designee Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Warehouse Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Engineering Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Instrumentation Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Validation Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Others Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Group Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                </div>
                            </div>
                        ) : form === formList[6] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="sub-head">
                                        Risk Assessment
                                    </div>
                                    <FlexField
                                        label="Risk Identification"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <div className='form-flex'>
                                        <div className="group-input">
                                            <label>Severity Rate</label>
                                            <select name="severity" value={changeControl.severityRate} onChange={(e) => setChangeControl({ severityRate: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="1">Low</option>
                                                <option value="2">Medium</option>
                                                <option value="3">High</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Occurrence</label>
                                            <select name="Occurrence" value={changeControl.occurrence} onChange={(e) => setChangeControl({ occurrence: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="1">Low</option>
                                                <option value="2">Medium</option>
                                                <option value="3">High</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Detection</label>
                                            <select name="Detection" value={changeControl.detection} onChange={(e) => setChangeControl({ detection: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="1">Low</option>
                                                <option value="2">Medium</option>
                                                <option value="3">High</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>RPN</label>
                                            <div className="instruction">Auto - Calculated</div>
                                            <input type='text' name='RPN' value={changeControl.severityRate * changeControl.occurrence * changeControl.detection} disabled />
                                        </div>
                                    </div>
                                    <FlexField
                                        label="Risk Evaluation"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Migration Action"
                                        instruction=""
                                        isRequired="false"
                                    />
                                </div>
                            </div>
                        ) : form === formList[7] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <FlexField
                                        label="QA Approval Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Training Feedback"
                                        instruction=""
                                        isRequired="false"
                                    />
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
                                    <FlexField
                                        label="QA Closure Comments"
                                        instruction=""
                                        isRequired="false"
                                    />
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
                                            <select name="effectivenessCheckRequired" value={changeControl.effectivenessCheckRequired} onChange={(e) => setChangeControl({ effectivenessCheckRequired: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <InputDate
                                            label="Effectiveness Check Creation Date"
                                            instruction=""
                                            isRequired={changeControl.effectivenessCheckRequired === 'Yes'}
                                            isDisabled={changeControl.effectivenessCheckRequired !== 'Yes'}
                                            enableDate="future"
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            {changeControl.effectivenessCheckRequired === 'Yes' && <div className="required"></div>}
                                            Effectiveness Checker
                                        </label>
                                        <select name="Effectiveness_checker" required={changeControl.effectivenessCheckRequired === 'Yes'} disabled={changeControl.effectivenessCheckRequired !== 'Yes'}>
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
                                    <FlexField
                                        label="Effectiveness Check Plan"
                                        instruction=""
                                        isRequired={changeControl.effectivenessCheckRequired === 'Yes' ? "true" : "false"}
                                    />
                                    <div className="sub-head">
                                        Extension Justification
                                    </div>
                                    <FlexField
                                        label="Due Date Extension Justification"
                                        instruction="Please Mention justification if due date is crossed"
                                        isRequired="false"
                                    />
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

export default ChangeControlForm
