import HeaderTop from "../../components/Header/HeaderTop";
import { useState } from 'react';
import Grid from '../../components/DataFields/Grid';
import InputDate from '../../components/DataFields/InputDate';
import HeaderBottom from "../../components/Header/HeaderBottom";

function LabIncidentPanel() {
    const formList = ["Document Information", "Incident Details", "Investigation Details", "CAPA", "QA Review", "QA Head/Designee Approval", "Activity Log"]


    const [form, setForm] = useState(formList[0]);
    const [initiatorGroup, setInitiatorGroup] = useState('');
    const [asideWorkFlow, setAsideWorkFlow] = useState(false);
    const [asideFamilyTree, setAsideFamilyTree] = useState(false);
    const labFile = [
        {
            label: "Initial Attachment",
            instruction: "Please Attach all relevant or supporting documents",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        },
        {
            label: "Attachment",
            instruction: "Please Attach all relevant or supporting documents",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        },
        {
            label: "Inv Attachment",
            instruction: "Please Attach all relevant or supporting documents",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        },
        {
            label: "CAPA Attachment",
            instruction: "Please Attach all relevant or supporting documents",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        },
        {
            label: "QA Head Attachment",
            instruction: "Please Attach all relevant or supporting documents",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        },
    ]
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
                    <div><strong> Record Name:&nbsp;</strong>Lab Incident Panel</div>
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

                    </div>

                    {form === formList[0] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>Record Number</label>
                                        <input type="text" value="Jordan/LI/2024/00000001" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>Division Code</label>
                                        <input type="text" value="Jordan" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            Initiator
                                        </label>
                                        <input type="text" value="Amit Guru" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>
                                            Date of Initiation
                                        </label>
                                        <input type="" value="15-Jan-2024" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>Assigned To</label>
                                        <div className="instruction">&nbsp;</div>
                                        <select id="select-state" placeholder="Select..." name="assigend">
                                            <option value="">Select a value</option>
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

                                    <InputDate
                                        label="Due Date"
                                        instruction="Please mention expected date of completion."
                                        isRequired="true"
                                        enableDate="future"
                                    />

                                    <div className="group-input">
                                        <label>Initiator Group </label>
                                        <select name="initiator_group" value={initiatorGroup} onChange={(e) => setInitiatorGroup(e.target.value)}>
                                            <option value="">-- Select --</option>
                                            <option value="CQA">Corporate Quality Assurance</option>
                                            <option value="QAB">Quality Assurance Biopharma</option>
                                            <option value="CQC">Central Quality Control</option>
                                            <option value="CQC">Manufacturing</option>
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
                                        <input type="text" value={initiatorGroup} disabled />
                                    </div>
                                </div>

                                <div className='group-input'>
                                    <label><div className='required'></div>Short Description</label>
                                    <div className="instruction">Please mention brief summary</div>
                                    <textarea name="w3review" rows="2" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label>Other Ref.Doc.No</label>
                                    <input type="text" />
                                </div>

                                <div className='form-flex'>
                                    <div className='group-input'>
                                        <label>Incident Category</label>
                                        <select name="Incident_Category">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Biological">Biological</option>
                                            <option value="Chemical">Chemical</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={labFile[0].label}
                                        required={labFile[0].required}
                                        instruction={labFile[0].instruction}
                                        columnList={labFile[0].columnList}
                                    />
                                </div>

                            </div>
                        </div>
                    ) : form === formList[1] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="group-input">
                                    <label>Incident Details</label>
                                    <textarea name="w3review"></textarea>
                                </div>

                                <div className="group-input">
                                    <label>Document Details</label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Instrument Details</label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Involved Personnel</label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Product Details,If Any</label>
                                    <textarea name="w3review"></textarea>
                                </div>
                                <div className="group-input">
                                    <label>Supervisor Review Comments</label>
                                    <textarea name="w3review"></textarea>
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
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label>Action Taken</label>
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label>Root Cause</label>
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
                                </div>

                            </div>
                        </div>
                    ) : form === formList[3] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="group-input">
                                    <label>Investigation Details</label>
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label>Action Taken</label>
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
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
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
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
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className='form-flex'>
                                    <div className='group-input'>
                                        <label>Effectiveness Check required?</label>
                                        <select name="Effectiveness_Check">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <InputDate
                                        label=" Effect.Chesk Creation Date"
                                        instruction=""
                                        isRequired="false"
                                        enableDate="future"
                                    />

                                </div>

                                <div className='group-input'>
                                    <label>Effect.Chesk Creation Date</label>
                                    <select name="Incident_Type">
                                        <option value="">Enter Your Selection Here</option>
                                        <option value="1">Type A</option>
                                        <option value="2">Type B</option>
                                        <option value="3">Type C</option>
                                    </select>
                                </div>

                                <div className="group-input">
                                    <label>Conclusion</label>
                                    <textarea name="w3review" rows="2" cols="50"></textarea>
                                </div>

                                <div className="sub-head">Extension Justification</div>

                                <div className="group-input">
                                    <label>Due Date Extension Justification</label>
                                    <div className="instruction">Please Mention justification if due date is crossed</div>
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
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

        </>
    )
}

export default LabIncidentPanel
