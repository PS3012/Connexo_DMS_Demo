import './ConfigForms.css'
import HeaderTop from "../../components/Header/HeaderTop";
import { useState } from 'react';
import Grid from '../../components/DataFields/Grid';

function LabIncident() {

    const [form, setForm] = useState("General Information");
    const [initiatorGroup, setInitiatorGroup] = useState('')
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

    return (
        <>
            <HeaderTop />

            <div id='config-form-document-page'>
                <div className="top-block">
                    <div className="head">Lab Incident</div>
                </div>

                <div className='document-block'>
                    <div className="document-tabs">

                        <div className={form === 'General Information' ? 'active' : ''} onClick={() => setForm('General Information')}>General Information</div>

                        <div className={form === 'Incident Details' ? 'active' : ''} onClick={() => setForm('Incident Details')}>Incident Details</div>

                        <div className={form === 'Investigation Details' ? 'active' : ''} onClick={() => setForm('Investigation Details')}>Investigation Details</div>

                        <div className={form === 'CAPA' ? 'active' : ''} onClick={() => setForm('CAPA')}>CAPA</div>

                        <div className={form === 'QA Review' ? 'active' : ''} onClick={() => setForm('QA Review')}>QA Review</div>

                        <div className={form === 'QA Head/Designee Approval' ? 'active' : ''} onClick={() => setForm('QA Head/Designee Approval')}>QA Head/Designee Approval</div>

                        <div className={form === 'Activity Log' ? 'active' : ''} onClick={() => setForm('Activity Log')}>Activity Log</div>

                    </div>

                    {form === "General Information" ? (
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

                                    <div className="group-input">
                                        <label>
                                            Due Date
                                        </label>
                                        <div className="instruction">
                                            Please mention expected date of completion
                                        </div>
                                        <input type="date" placeholder="" />
                                    </div>

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
                                    <label>Short Description{" "}<span className="required">&nbsp;*</span></label>
                                    <div className="instruction">Please mention brief summary</div>
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
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
                    ) : form === "Incident Details" ? (
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
                    ) : form === "Investigation Details" ? (
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
                    ) : form === "CAPA" ? (
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
                    ) : form === "QA Review" ? (
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
                    ) : form === "QA Head/Designee Approval" ? (
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

                                    <div className='group-input'>
                                        <label>Effect.Chesk Creation Date</label>
                                        <input type='date' />
                                    </div>

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
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="sub-head">Extension Justification</div>

                                <div className="group-input">
                                    <label>Due Date Extension Justification</label>
                                    <div className="instruction">Please Mention justification if due date is crossed</div>
                                    <textarea name="w3review" rows="3" cols="50"></textarea>
                                </div>

                            </div>
                        </div>
                    ) : form === "Activity Log" ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className='form-flex'>
                                    <div className='group-input'>
                                        <label>Submitted By</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>Submitted On</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>Incident Review Completed By</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>Incident Review Completed On</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>Investigation Completed By</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>Investigation Completed On</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>Inv andCAPA Review Comp. By</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>Inv andCAPA Review Comp. On</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>QA Review Completed By</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>QA Review Completed On</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>QA Head Approval Completed By</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>QA Head Approval Completed On</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>Cancelled By</label>
                                    </div>

                                    <div className='group-input'>
                                        <label>Cancelled On</label>
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
    )
}

export default LabIncident;
