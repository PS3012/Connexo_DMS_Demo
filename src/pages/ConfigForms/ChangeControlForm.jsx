import { useReducer, useState } from 'react'
import './ConfigForms.css'
import { MultiSelect } from 'react-multi-select-component';
import HeaderTop from '../../components/Header/HeaderTop';
import Grid from '../../components/DataFields/Grid';
import InputDate from '../../components/DataFields/InputDate';
import { CurrentDate } from '../../components/DateReturners';
import FlexField from '../../components/DataFields/FlexField';

function ChangeControlForm() {
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
    const [form, setForm] = useState("General Information");
    const [selected, setSelected] = useState([]);
    const [groupComment, setGroupComment] = useState(0);
    
    const membership = [
        { label: "Grapes", value: "grapes" },
        { label: "Mango", value: "mango", disabled: true },
        { label: "Strawberry", value: "strawberry" },
    ];
    const CFTReviewer = [
        { label: "Anshul Patel", value: "1" },
        { label: "Mango", value: "mango", disabled: true },
        { label: "Amit", value: "2" },
    ];
    const docFile = [
        {
            label: "Initial attachment",
            instruction: "Please Attach all relevant or supporting documents",
            required: true,
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "File" ,columnList:[] },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
        {
            label: "QA Attachments",
            instruction: "Please Attach all relevant or supporting documents",
            required: true,
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "File" },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
        {
            label: "QA Attachments",
            instruction: "Please Attach all relevant or supporting documents",
            required: true,
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "File" },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
        {
            label: "QA Attachments",
            instruction: "Please Attach all relevant or supporting documents",
            required: true,
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "File" },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
        {
            label: "CFT Attachments",
            instruction: "Please Attach all relevant or supporting documents",
            required: true,
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "File" },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
        {
            label: "Training Attachments",
            instruction: "Please Attach all relevant or supporting documents",
            required: true,
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "File" },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
        {
            label: "List of Attachments",
            instruction: "Please Attach all relevant or supporting documents",
            required: true,
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "File" },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
    ];
    const docDetails = {
        label: "Document Details",
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: "2.1.1.1", name: "Current Document No.", type: "text" },
            { id: "2.1.1.2", name: "Current Version No.", type: "number" },
            { id: "2.1.1.3", name: "New Document No.", type: "text" },
            { id: "2.1.1.4", name: "New Version No.", type: "number" },
            { id: "2.1.1.5", name: "Remarks", type: "text" },
        ],
    };
    const changeCloser = {
        label: "Document Details",
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: "2.1.1.1", name: "Affected Documents", type: "text" },
            { id: "2.1.1.2", name: "Document Name", type: "number" },
            { id: "2.1.1.3", name: "Document No.", type: "text" },
            { id: "2.1.1.4", name: "Version No.", type: "number" },
            { id: "2.1.1.5", name: "Implementation Date", type: "date" },
            { id: "2.1.1.6", name: "New Document No.", type: "text" },
            { id: "2.1.1.7", name: "New Version No.", type: "text" },
            { id: "2.1.1.8", name: "Remarks", type: "text" },
        ],
    };

    return (
        <>
            <HeaderTop />

            <div id="config-form-document-page">
                <div className="top-block">
                    <div className="head">New Change Control</div>
                    <div className="content">
                        Site / Process : Jordan / Change Control
                    </div>
                </div>

                <div className="document-block">
                    <div className="document-tabs">
                        <div
                            className={form === "General Information" ? "active" : ""}
                            onClick={() => setForm("General Information")}
                        >
                            General Information
                        </div>

                        <div
                            className={form === "Change Details" ? "active" : ""}
                            onClick={() => setForm("Change Details")}
                        >
                            Change Details
                        </div>

                        <div
                            className={form === "QA Review" ? "active" : ""}
                            onClick={() => setForm("QA Review")}
                        >
                            QA Review
                        </div>

                        <div
                            className={form === "Evaluation" ? "active" : ""}
                            onClick={() => setForm("Evaluation")}
                        >
                            Evaluation
                        </div>

                        <div
                            className={form === "Additional Information" ? "active" : ""}
                            onClick={() => setForm("Additional Information")}
                        >
                            Additional Information
                        </div>

                        {groupComment === "yes" && (
                            <div
                                className={form === "Group Comments" ? "active" : ""}
                                onClick={() => setForm("Group Comments")}
                            >
                                Group Comments
                            </div>
                        )}

                        <div
                            className={form === "Risk Assessment" ? "active" : ""}
                            onClick={() => setForm("Risk Assessment")}
                        >
                            Risk Assessment
                        </div>

                        <div
                            className={form === "QA Approval Comments" ? "active" : ""}
                            onClick={() => setForm("QA Approval Comments")}
                        >
                            QA Approval Comments
                        </div>

                        <div
                            className={form === "Change Closure" ? "active" : ""}
                            onClick={() => setForm("Change Closure")}
                        >
                            Change Closure
                        </div>

                        <div
                            className={form === "Activity Log" ? "active" : ""}
                            onClick={() => setForm("Activity Log")}
                        >
                            Activity Log
                        </div>
                    </div>

                    {form === 'General Information' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="group-input">
                                    <label>Record Number</label>
                                    <input type="text" value="Jordan/EA/2024/00000001" disabled />
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
                                            Division Code
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
                                    <label htmlFor="group_comment_required">
                                        Group Comment Required
                                    </label>
                                    <select
                                        name="group_comment_required"
                                        value={groupComment}
                                        onChange={(e) => setGroupComment(e.target.value)}
                                    >
                                        <option value="0">-- Select --</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ) : form === "Change Details" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <Grid
                                    label={docDetails.label}
                                    required={docDetails.required}
                                    instruction={docDetails.instruction}
                                    columnList={docDetails.columnList}
                                />
                                <div className="sub-head">Change Details</div>
                                <div className="group-input">
                                    <label>Current Practice </label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Proposed Change</label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Reason for Change</label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Any Other Comments</label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Supervisor Comments</label>
                                    <textarea name="w3review"></textarea>
                                </div>
                            </div>
                        </div>
                    ) : form === "QA Review" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="group-input">
                                    <label>Type of Change</label>
                                    <select name="type_change" value={changeControl.typeOfChange} onChange={(e) => setChangeControl({ typeOfChange: e.target.value })}>
                                        <option value="0">-- Select --</option>
                                        <option value="minor">Minor</option>
                                        <option value="major">Major</option>
                                        <option value="critical">Critical</option>
                                    </select>
                                </div>
                                <div className="group-input">
                                    <label>QA Review Comments</label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Related Records</label>
                                    <MultiSelect
                                        options={membership}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
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
                                        <div className="sub-head">Minor Change Justification</div>
                                        <div className="group-input">
                                            <label>
                                                <div className="required"></div>
                                                Minor Change Justification
                                            </label>
                                            <textarea name="minor_justification"></textarea>
                                        </div>
                                    </> : ''
                                }
                                {changeControl.typeOfChange === 'major' ?
                                    <>
                                        <div className="sub-head">Major Change Justification</div>
                                        <div className="group-input">
                                            <label>
                                                <div className="required"></div>
                                                Major Change Justification
                                            </label>
                                            <textarea name="major_justification"></textarea>
                                        </div>
                                    </> : ''
                                }
                                {changeControl.typeOfChange === 'critical' ? (
                                    <>
                                        <div className="sub-head">
                                            Critical Change Justification
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <div className="required"></div>
                                                Critical Change Justification
                                            </label>
                                            <textarea name="critical_justification"></textarea>
                                        </div>
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    ) : form === "Evaluation" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="sub-head">Evaluation Detail</div>

                                <div className="group-input">
                                    <label>QA Evaluation Comments</label>
                                    <textarea></textarea>
                                </div>

                                <div className="group-input">
                                    <Grid
                                        label={docFile[2].label}
                                        required={docFile[2].required}
                                        instruction={docFile[2].instruction}
                                        columnList={docFile[2].columnList}
                                    />
                                </div>

                                <div className="sub-head">Training Information</div>

                                <div className="group-input">
                                    <label>Training Required</label>
                                    <select name="training_required" value={changeControl.trainingRequired} onChange={(e) => setChangeControl({ trainingRequired: e.target.value })}>
                                        <option value="">-- Select --</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                {changeControl.trainingRequired === 'Yes' &&
                                    <div className="group-input">
                                        <label>
                                            <div className="required"></div>
                                            Training Comments
                                        </label>
                                        <textarea name='training_comments' required></textarea>
                                    </div>
                                }

                            </div>
                        </div>
                    ) : form === 'Additional Information' ? (
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

                                <div className="group-input">
                                    <label>QA Evaluation Comments</label>
                                    <textarea></textarea>
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
                    ) : form === "Group Comments" && groupComment === "yes" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="sub-head">CFT Feedback</div>

                                <div className="group-input">
                                    <label>QA Evaluation Comments</label>
                                    <textarea></textarea>
                                </div>

                                <div className="group-input">
                                    <Grid
                                        label={docFile[4].label}
                                        required={docFile[4].required}
                                        instruction={docFile[4].instruction}
                                        columnList={docFile[4].columnList}
                                    />
                                </div>

                                <div className="sub-head">Concerned Group Feedback</div>

                                <div className="form-flex">
                                    <div className="group-input">
                                        <label>
                                            <b>QA Comments</b>
                                        </label>
                                        <textarea></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>QA Head Designee Comments</b>
                                        </label>
                                        <textarea></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Warehouse Comments</b>
                                        </label>
                                        <textarea></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Engineering Comments</b>
                                        </label>
                                        <textarea></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Instrumentation Comments</b>
                                        </label>
                                        <textarea></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Validation Comments</b>
                                        </label>
                                        <textarea></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Others Comments</b>
                                        </label>
                                        <textarea></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            <b>Group Comments</b>
                                        </label>
                                        <textarea></textarea>
                                    </div>
                                </div>

                                <div className='form-flex'>

                                    <div className="group-input">
                                        <label>QA Comments</label>
                                        <textarea></textarea>

                                    </div>


                                    <div className="group-input">
                                        <label>QA Head Designee Comments</label>
                                        <textarea></textarea>

                                    </div>

                                    <div className="group-input">
                                        <label>Warehouse Comments</label>
                                        <textarea></textarea>

                                    </div>

                                    <div className="group-input">
                                        <label>Engineering Comments</label>
                                        <textarea></textarea>

                                    </div>

                                    <div className="group-input">
                                        <label>Instrumentation Comments</label>
                                        <textarea></textarea>

                                    </div>


                                    <div className="group-input">
                                        <label>Validation Comments</label>
                                        <textarea></textarea>

                                    </div>

                                    <div className="group-input">
                                        <label>Others Comments</label>
                                        <textarea></textarea>

                                    </div>


                                    <div className="group-input">
                                        <label>Group Comments</label>
                                        <textarea></textarea>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ) : form === "Risk Assessment" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="sub-head">Risk Assessment</div>

                                <div className="group-input">
                                    <label>Risk Identification</label>
                                    <textarea></textarea>
                                </div>

                                <div className="form-flex">
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

                                <div className="group-input">
                                    <label>Risk Evaluation</label>
                                    <textarea></textarea>
                                </div>

                                <div className="group-input">
                                    <label>Migration Action</label>
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                    ) : form === "QA Approval Comments" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="group-input">
                                    <label>QA Approval Comments</label>
                                    <textarea></textarea>
                                </div>

                                <div className="group-input">
                                    <label>Training Feedback</label>
                                    <textarea></textarea>
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
                    ) : form === "Change Closure" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <Grid
                                    label={changeCloser.label}
                                    required={changeCloser.required}
                                    instruction={changeCloser.instruction}
                                    columnList={changeCloser.columnList}
                                />

                                <div className="group-input">
                                    <label>QA Closure Comments </label>
                                    <textarea name="w3review"></textarea>
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

                                <div className="group-input">
                                    <label>
                                        {changeControl.effectivenessCheckRequired === 'Yes' && <div className="required"></div>}
                                        Effectiveness Check Plan
                                    </label>
                                    <textarea name="w3review" required={changeControl.effectivenessCheckRequired === 'Yes'} disabled={changeControl.effectivenessCheckRequired !== 'Yes'}></textarea>
                                </div>

                                <div className="sub-head">Extension Justification</div>

                                <div className="group-input">
                                    <label>Due Date Extension Justification</label>
                                    <div className="instruction">Please Mention justification if due date is crossed</div>
                                    <textarea name="w3review"></textarea>
                                </div>
                            </div>
                        </div>
                    ) : form === "Activity Log" ? (
                        <div className="document-form">
                            <div className="details-form-data">
                                <div className="sub-head">Electronic Signatures</div>

                                <div className="form-flex">
                                    <div className="group-input">
                                        <label>Submitted By</label>
                                        <input type="text" name="submitted_by" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>Submitted On</label>
                                        <input type="text" name="submitted_on" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>Cancelled By</label>
                                        <input type="text" name="cancelled_by" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>Cancelled On</label>
                                        <input type="text" name="cancelled_on" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>More Information Required By</label>
                                        <input type="text" name="more_info_req_by" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>More Information Required On</label>
                                        <input type="text" name="more_info_req_on" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className="button-block">
                    <button className="themeBtn">Save</button>
                    <button className="themeBtn">Back</button>
                    <button className="themeBtn">Next</button>
                    <button className="themeBtn">Exit</button>
                </div>
            </div>
        </>
    );
}

export default ChangeControlForm;
