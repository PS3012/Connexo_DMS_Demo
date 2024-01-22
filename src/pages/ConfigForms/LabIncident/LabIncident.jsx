import HeaderTop from "../../../components/Header/HeaderTop";
import { useReducer, useState } from 'react';
import Grid from '../../../components/DataFields/Grid';
import InputDate from '../../../components/DataFields/InputDate';
import { formList } from './LabIncidentFunctions';
import '../ConfigForms.css'

function LabIncident() {
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
    const [documentInformation, setDocumentInformation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        initiatorGroup: ''
    })

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
                        <div><strong> Record Name:&nbsp;</strong>Lab Incident</div>
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
                                        <div className='group-input'>
                                            <label>Invocation Type</label>
                                            <select name="Invocation_Type">
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
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
                                    <div className="sub-head">Questionnaire</div>

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
