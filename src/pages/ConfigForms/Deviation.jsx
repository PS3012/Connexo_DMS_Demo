import React, { useReducer, useState } from 'react';
import './ConfigForms.css';
import HeaderTop from '../../components/Header/HeaderTop';
import InputDate from '../../components/DataFields/InputDate';
import { CurrentDate } from '../../components/DateReturners';
import { MultiSelect } from 'react-multi-select-component';
import Grid from '../../components/DataFields/Grid';


function Deviation() {
    const formList = ["General Information", "Deviation Details", "Product Information", "Project Details", "QA Review", "Group Assessment", "Group Comments", "QA Evaluation & Approval", "Investigation & CAPA", "Investigation Impact Assessment", "Conclusion & Closer", "Activity Log"]

    const [form, setForm] = useState(formList[0]);
    const [selected, setSelected] = useState([]);
    const [asideWorkFlow, setAsideWorkFlow] = useState(false);
    const [asideFamilyTree, setAsideFamilyTree] = useState(false);
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
    const deviationfile = [
        {
            label: "Deviation Attachment",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        },
        {
            label: "Product Details",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Product Name', type: 'text' },
                { id: '2.1.1.2', name: 'Batch No.', type: 'number' },
                { id: '2.1.1.3', name: 'Manufacturing stage', type: 'text' },
                { id: '2.1.1.3', name: 'Stage Batch No.', type: 'number' },
                { id: '2.1.1.3', name: 'Date Of Manufacturing', type: 'number' },
                { id: '2.1.1.3', name: 'Date Of Expiry', type: 'number' },
                { id: '2.1.1.3', name: 'Market', type: 'number' },
            ]
        },
        {
            label: "Material Details",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Material Name', type: 'text' },
                { id: '2.1.1.2', name: 'Lot Number.', type: 'number' },
                { id: '2.1.1.3', name: 'Date of Manufacturing ', type: 'text' },
                { id: '2.1.1.3', name: 'Date Of Expiry/Retest', type: 'number' },
                { id: '2.1.1.3', name: 'A.R. Number', type: 'number' },

            ]
        },
        {
            label: "Equipment/Instruments Details",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Equipment/Instruments Name', type: 'text' },
                { id: '2.1.1.2', name: 'Equipment/Instruments ID', type: 'number' },
                { id: '2.1.1.3', name: 'Equipment/Instruments Comments', type: 'text' },

            ]
        },
        {
            label: "QA Head Attachment",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },

            ]
        },
        {
            label: "Group Attachments",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },

            ]
        },
        {
            label: "Closure Attachments",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },

            ]
        },
    ]
    const deviation = [
        { label: "Anshul Patel", value: "1" },
        { label: "Mango", value: "mango", },
        { label: "Amit", value: "2" },

    ];
    const QaReview = [
        { label: "Anshul Patel", value: "1" },
        { label: "Shaleen Mishra", value: "2", },
        { label: "Amit Guru", value: "3" },
        { label: "Amit Patel", value: "4" },

    ];
    const ImpactOnOtherGroup = [
        { label: "Anshul Patel", value: "1" },
        { label: "Shaleen Mishra", value: "2", },
        { label: "Amit Guru", value: "3" },
        { label: "Amit Patel", value: "4" },

    ];

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
                <div id='config-form-document-page'>
                    <HeaderTop />
                    <div className="top-block">
                        <div><strong> Record Name:&nbsp;</strong>Deviation-Form</div>
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

                            <div className={form === formList[5] ? 'active' : ''} onClick={() => setForm(formList[5])}>{formList[5]}</div>

                            <div className={form === formList[6] ? 'active' : ''} onClick={() => setForm(formList[6])}>{formList[6]}</div>

                            <div className={form === formList[7] ? 'active' : ''} onClick={() => setForm(formList[7])}>{formList[7]}</div>

                            <div className={form === formList[8] ? 'active' : ''} onClick={() => setForm(formList[8])}>{formList[8]}</div>

                            <div className={form === formList[9] ? 'active' : ''} onClick={() => setForm(formList[9])}>{formList[9]}</div>

                            <div className={form === formList[10] ? 'active' : ''} onClick={() => setForm(formList[10])}>{formList[10]}</div>

                            <div className={form === formList[11] ? 'active' : ''} onClick={() => setForm(formList[11])}>{formList[11]}</div>
                        </div>
                        {form === formList[0] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className='form-flex'>

                                        <div className='group-input'>
                                            <label>Record Number</label>
                                        </div>

                                        <div className='group-input'>
                                            <label>Site/Location Code</label>
                                        </div>

                                        <div className='group-input'>
                                            <label>Initiator</label>
                                        </div>

                                        <div className='group-input'>
                                            <label>Assigned to</label>
                                        </div>

                                        <InputDate
                                            label="Date of Initiation"
                                            instruction=""
                                            isRequired="false"
                                            enableDate="future"
                                        />

                                        <div className="group-input">
                                            <label>Date Opened</label>
                                            <input type="" value={CurrentDate()} disabled />
                                        </div>

                                        <div className="group-input">
                                            <label htmlFor="initiatorGroup">
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
                                            Short Description
                                        </label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                    <div className="group-input">
                                        <label>Severity Level</label>
                                        <select>
                                            <option value="">-- Select --</option>
                                            <option value="">Major</option>
                                            <option value="">Minor</option>
                                            <option value="">Critical</option>
                                        </select>
                                    </div>

                                    <div className="tripple-grid">
                                        <div className='group-input'>
                                            <label>Deviation Type</label>
                                            <select name="initiatorGroup">
                                                <option>-- Select --</option>
                                                <option>Planned</option>
                                                <option>UnPlanned</option>
                                            </select>
                                        </div>
                                        <InputDate
                                            label="Due Date"
                                            instruction=""
                                            isRequired="false"
                                            enableDate="future"
                                        />

                                        <div className='group-input'>
                                            <label>Is Recurring</label>
                                            <select name="initiatorGroup">
                                                <option>-- Select --</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className='form-flex'>
                                        <div className='group-input'>
                                            <label>Related Deviation No.</label>
                                            <select name="related_deviation">
                                                <option>-- Select --</option>
                                                <option value="01">#0001</option>
                                                <option value="02">#0002</option>
                                                <option value="03">#0003</option>
                                                <option value="04">#0004</option>
                                                <option value="05">#0005</option>
                                            </select>
                                        </div>

                                        <div className='group-input'>
                                            <label>Other Ref.Doc.No</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[1] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className='form-flex'>

                                        <div className="group-input">
                                            <label>
                                                Current Procedure
                                            </label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>
                                                Deviation Description
                                            </label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>
                                                Nature of Deviation
                                            </label>
                                            <MultiSelect
                                                options={deviation}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                required={changeControl.CFTReviewers === "Yes"}
                                                disabled={!changeControl.CFTReviewers === "Yes"}
                                            />
                                        </div>

                                        <div className="group-input">
                                            <Grid
                                                label={deviationfile[0].label}
                                                required={deviationfile[0].required}
                                                instruction={deviationfile[0].instruction}
                                                columnList={deviationfile[0].columnList}
                                            />
                                        </div>

                                        <div className="group-input">
                                            <label>
                                                Deviation Reason
                                            </label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>
                                                Supervisor Comments
                                            </label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>
                                                Immediate Action
                                            </label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>
                                                Justification
                                            </label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ) : form === formList[2] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className="sub-head">
                                        Product Details
                                    </div>

                                    <div className="group-input">
                                        <Grid
                                            label={deviationfile[1].label}
                                            required={deviationfile[1].required}
                                            instruction={deviationfile[1].instruction}
                                            columnList={deviationfile[1].columnList}
                                        />
                                    </div>
                                    <div className="sub-head">
                                        Material Details
                                    </div>

                                    <div className="group-input">
                                        <Grid
                                            label={deviationfile[2].label}
                                            required={deviationfile[2].required}
                                            instruction={deviationfile[2].instruction}
                                            columnList={deviationfile[2].columnList}
                                        />
                                    </div>
                                    <div className="sub-head">
                                        Equipment/Instruments Details
                                    </div>

                                    <div className="group-input">
                                        <Grid
                                            label={deviationfile[3].label}
                                            required={deviationfile[3].required}
                                            instruction={deviationfile[3].instruction}
                                            columnList={deviationfile[3].columnList}
                                        />
                                    </div>

                                    <div className="sub-head">
                                        Other type CAPA Details
                                    </div>

                                    <div className='group-input'>
                                        <label>Details</label>
                                        <input type="text" />
                                    </div>

                                    <div className='group-input'>
                                        <label>Comments</label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                </div>
                            </div>
                        ) : form === formList[3] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className="sub-head">
                                        Project Details
                                    </div>
                                    <div className="form-flex">
                                        <div className="group-input">
                                            <label>Project Details Application</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Initiator Group</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Site Number</label>
                                            <input type="number" />
                                        </div>

                                        <div className="group-input">
                                            <label>Subject Number</label>
                                            <input type="number" />
                                        </div>

                                        <div className="group-input">
                                            <label>Subject Initials</label>
                                            <input type="number" />
                                        </div>

                                        <div className="group-input">
                                            <label>Type of Deviation</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Other</label>
                                            <input type="text" />
                                        </div>

                                        <div className="group-input">
                                            <label>Sponsor</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[4] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className="group-input">
                                        <label>
                                            Impact On
                                        </label>
                                        <MultiSelect
                                            options={QaReview}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            required={changeControl.CFTReviewers === "Yes"}
                                            disabled={!changeControl.CFTReviewers === "Yes"}
                                        />
                                    </div>

                                    <div className="group-input">
                                        <Grid
                                            label={deviationfile[4].label}
                                            required={deviationfile[4].required}
                                            instruction={deviationfile[4].instruction}
                                            columnList={deviationfile[4].columnList}
                                        />
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            QA Review Comments
                                        </label>
                                        <textarea type="text" rows="2" />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[5] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className="sub-head">
                                        Concerned Groups
                                    </div>

                                    <div className="group-input">
                                        <label>Is Group Review Required?</label>
                                        <select>
                                            <option>Enter Your Selection Here</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>

                                    <div className="form-flex">

                                        <div className="group-input">
                                            <label>Production</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Production Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Quality Control</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Quality Control Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Microbiology</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Microbiology Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Warehouse</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Warehouse Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Engineering</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Engineering Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Instrumentation</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Instrumentation Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Validation</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Validation Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Research & Development</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Research & Development Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Packaging Development</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Packaging Development Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Business Development (International)</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Business Development (International) Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Business Development (Domestic)</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Business Development (Domestic) Person Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Health Safety Environment (Safety)</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Health Safety Environment (Safety) Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Health Safety Environment (Environment)</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Health Safety Environment (Environment) Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Health Safety Environment (Health)</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Health Safety Environment (Health) Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Customer Group</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Customer Group Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Regulatory Affairs (International)</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Regulatory Affairs (International) Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Regulatory Affairs (Domestic)</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Regulatory Affairs (Domestic) Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Qualified</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Qualified Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Information Technology</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Information Technology Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Procurement</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Procurement Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Clinical Pharmacology Unit</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Clinical Pharmacology Unit Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Project Management</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Project Management Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Clinical Operations</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Clinical Operations Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Bioanalytical Laboratory</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Bioanalytical Laboratory Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Pharmacovigilance</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Pharmacovigilance Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Medical Writing</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Medical Writing Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Statistics</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Statistics Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Data Management</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Data Management Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Logistics</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Logistics Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Others</label>
                                            <select>
                                                <option>Enter Your Selection Here</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>

                                        <div className="group-input">
                                            <label>Others Person</label>
                                            <select name="Production-Person">
                                                <option value="piyush">-- Select --</option>
                                                <option value="piyush">Amit Guru</option>
                                                <option value="piyush">Amit Patel</option>
                                                <option value="piyush">Anshul Patel</option>
                                                <option value="piyush">Shaleen Mishra</option>
                                                <option value="piyush">Vikas Prajapati</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ) : form === formList[6] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>


                                    <div className='form-flex'>

                                        <div className="group-input">
                                            <label>Production Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Quality Control Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Microbiology Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Warehouse Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Engineering Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Instrumentation Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Validation Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>R & D Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Packaging Development Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>BD (International) Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>BD (Domestic) Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>HSE (Safety) Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>HSE (Environment) Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>HSE (Health) Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Customer Group</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>RA (International)  Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>RA (Domestic) Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Qualified Person (QP) Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>IT Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Procurement Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>CP Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Project Management Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Clinical Operations Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>BL Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Pharmacovigilance Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Medical Writing Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Statistics Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Data Management Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Logistics Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>

                                        <div className="group-input">
                                            <label>Others Comments</label>
                                            <textarea type="text" rows="2" />
                                        </div>
                                    </div>

                                    <div className="group-input">
                                        <Grid
                                            label={deviationfile[5].label}
                                            required={deviationfile[5].required}
                                            instruction={deviationfile[5].instruction}
                                            columnList={deviationfile[5].columnList}
                                        />
                                    </div>

                                </div>
                            </div>
                        ) : form === formList[7] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className="group-input">
                                        <label>Category</label>
                                        <select>
                                            <option>Enter Your Selection Here</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>QA Evaluation Comments</label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                    <div className="group-input">
                                        <label>QA Head/Designee Comments</label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                </div>
                            </div>
                        ) : form === formList[8] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className="sub-head">
                                        Root Cause Details
                                    </div>

                                    <div className="group-input">
                                        <label>Root Cause Details</label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                    <div className="group-input">
                                        <label>Action Taken</label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                    <div className="sub-head">
                                        CAPA
                                    </div>

                                    <div className="group-input">
                                        <label>Currective Action</label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                    <div className="group-input">
                                        <label>Preventive Action</label>
                                        <textarea type="text" rows="2" />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[9] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className="group-input">
                                        <label>Impact On Product Quality</label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            Impact On Other Group
                                        </label>
                                        <MultiSelect
                                            options={ImpactOnOtherGroup}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            required={changeControl.CFTReviewers === "Yes"}
                                            disabled={!changeControl.CFTReviewers === "Yes"}
                                        />
                                    </div>

                                    <div className="group-input">
                                        <label>Impact On Subject Safety</label>
                                        <input type="text" />
                                    </div>

                                    <div className="group-input">
                                        <label>Impact On Data</label>
                                        <input type="text" />
                                    </div>

                                    <div className="group-input">
                                        <label>QA Assessment Comments</label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                </div>
                            </div>
                        ) : form === formList[10] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className="sub-head">
                                        Conclusion & Closure Details
                                    </div>

                                    <div className="group-input">
                                        <label>Closure Comments</label>
                                        <textarea type="text" rows="2" />
                                    </div>

                                    <div className="group-input">
                                        <Grid
                                            label={deviationfile[5].label}
                                            required={deviationfile[5].required}
                                            instruction={deviationfile[5].instruction}
                                            columnList={deviationfile[5].columnList}
                                        />
                                    </div>


                                </div>
                            </div>
                        ) : form === formList[11] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong> Submitted By:&nbsp;</strong>Harsh Mishra
                                        </div>
                                        <div>
                                            <strong> Submitted On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Review Completed By:&nbsp;</strong>Amit Guru
                                        </div>
                                        <div>
                                            <strong>Review Completed On:&nbsp;</strong>16 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>QA More Info Required By:&nbsp;</strong>Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong>QA More Info Required On:&nbsp;</strong>17 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>QA Review Completed By:&nbsp;</strong>Shrijit Pandey
                                        </div>
                                        <div>
                                            <strong>QA Review Completed On:&nbsp;</strong>18 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Cancelled By:&nbsp;</strong>Madhulikha Mishra
                                        </div>
                                        <div>
                                            <strong>Cancelled On:&nbsp;</strong>19 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Group Feedback By:&nbsp;</strong>Amit Patel
                                        </div>
                                        <div>
                                            <strong>Group Feedback On:&nbsp;</strong>19 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Evaluation Completed By:&nbsp;</strong>Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong>Evaluation Completed On:&nbsp;</strong>20 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Additional Groups Requested By:&nbsp;</strong>Manish Khatriya
                                        </div>
                                        <div>
                                            <strong>Additional Groups Requested On:&nbsp;</strong>21 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Additional Groups Selected By:&nbsp;</strong>Shiavam Patel
                                        </div>
                                        <div>
                                            <strong>Additional Groups Selected On:&nbsp;</strong>22 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Inv. Assessment Submitted By:&nbsp;</strong>Manish Malviya
                                        </div>
                                        <div>
                                            <strong>Inv. Assessment Submitted On:&nbsp;</strong>23 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Impact Assessed By:&nbsp;</strong>Harsh Mishra
                                        </div>
                                        <div>
                                            <strong>Impact Assessed On:&nbsp;</strong>24 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>CAPA Submitted By:&nbsp;</strong>Amit Guru
                                        </div>
                                        <div>
                                            <strong>CAPA Submitted On:&nbsp;</strong>25 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Approved By:&nbsp;</strong>Piyush Sahu
                                        </div>
                                        <div>
                                            <strong>Approved On:&nbsp;</strong>26 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Rejected By:&nbsp;</strong>Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong>Rejected On:&nbsp;</strong>27 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>QA Review Closed By:&nbsp;</strong>Amit Patel
                                        </div>
                                        <div>
                                            <strong>QA Review Closed On:&nbsp;</strong>28 Jan, 2023 11:00 PM
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

export default Deviation
