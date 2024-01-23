import React, { useReducer, useState } from 'react'
import HeaderTop from '../../components/Header/HeaderTop'
import HeaderBottom from '../../components/Header/HeaderBottom';
import InputDate from '../../components/DataFields/InputDate';
import { CurrentDate } from '../../components/DateReturners';
import { MultiSelect } from 'react-multi-select-component';
import Grid from '../../components/DataFields/Grid';
import './DocumentPanel.css';


function DeviationPanel() {
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
    // ------------------Record Workflow-------------
    const progressItems = [
        { id: 1, name: 'Opened', details: 'Document is opened at 10 Jan, 2023 11:12PM' },
        { id: 2, name: 'HOD Review', details: 'Action Item child can be created at this stage.' },
        { id: 3, name: 'Pending QA Review', details: '' },
        { id: 4, name: 'CFT/SME Review', details: '' },
        { id: 5, name: 'Pending Change Implementation', details: 'New Document child can be created at this stage.' },
        { id: 6, name: 'Closed - Done', details: '' },
    ]
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
                    <div><strong> Record Name:&nbsp;</strong>Deviation-Panel</div>
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
                                        <label>Division Code</label>
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
                                        <div className="require"></div>
                                        Short Description
                                    </label>
                                    <textarea type="text" rows="2" />
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
        </>
    )
}

export default DeviationPanel
