import { useState } from 'react'
import './Changecontrolform.css'
import { MultiSelect } from 'react-multi-select-component';
import HeaderTop from '../../components/Header/HeaderTop';
import Grid from '../../components/DataFields/Grid';


function Changecontrolform() {


    const membership = [
        { label: "Grapes", value: "grapes" },
        { label: "Mango", value: "mango", disabled: true },
        { label: "Strawberry", value: "strawberry", },
    ];

    const cftreviewer = [
        { label: "Anshul Patel", value: "1" },
        { label: "Mango", value: "mango", disabled: true },
        { label: "Amit", value: "2", },
    ];


    const [form, setForm] = useState("General Information");

    const [selected, setSelected] = useState([]);

    const docFile = {
        label: 'Document Details',
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: '2.1.1.1', name: 'Title of Dcoument', type: 'text' },
            { id: '2.1.1.2', name: 'Attached File', type: 'File' },
            { id: '2.1.1.3', name: 'Remark', type: 'text' },
            
        ]
    }

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

            <HeaderTop />

            <div id='config-form-document-page'>
                <div className="top-block">
                    <div className="head">New Change Control</div>
                    <div className="content">
                        Site-Division / Project : Jordan / Change Control
                    </div>
                </div>

                <div className='document-block'>
                    <div className="document-tabs">
                        <div className={form === 'General Information' ? 'active' : ''} onClick={() => setForm('General Information')}>General Information</div>

                        <div className={form === 'Change Details' ? 'active' : ''} onClick={() => setForm('Change Details')}>Change Details</div>

                        <div className={form === 'QA Review' ? 'active' : ''} onClick={() => setForm('QA Review')}>QA Review</div>

                        <div className={form === 'Evaluation' ? 'active' : ''} onClick={() => setForm('Evaluation')}>Evaluation</div>

                        <div className={form === 'Additional Information' ? 'active' : ''} onClick={() => setForm('Additional Information')}>Additional Information</div>

                        <div className={form === 'Group Comments' ? 'active' : ''} onClick={() => setForm('Group Comments')}>Group Comments</div>

                        <div className={form === 'Risk Assessment' ? 'active' : ''} onClick={() => setForm('Risk Assessment')}>Risk Assessment</div>

                        <div className={form === 'QA Approval Comments' ? 'active' : ''} onClick={() => setForm('QA Approval Comments')}>QA Approval Comments</div>

                        <div className={form === 'Change Closure' ? 'active' : ''} onClick={() => setForm('Change Closure')}>Change Closure</div>

                        <div className={form === 'Activity Log' ? 'active' : ''} onClick={() => setForm('Activity Log')}>Activity Log</div>

                    </div>

                    {form === 'General Information' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Record Number</b></label>
                                    <input type="text" className="form-control" value="Jordan/EA/2024/00000001" disabled />
                                </div>
                                <div className='form-flex'>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Initiator</b></label>
                                        <input type="text" className="form-control" value="Amit Guru" disabled />
                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Date of Initiation</b></label>
                                        <input type="" className="form-control" value="10-Jan-2024" disabled />
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Assigned To</b><span className="required">&nbsp;*</span></label>
                                        <select id="select-state" className='form-control' placeholder="Select..." name="assign_to">
                                            <option value="">Select a value</option>
                                            <option value="2">Shaleen Mishra</option>
                                        </select>                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Due Date</b><span className="required">&nbsp;*</span></label>
                                        <div className='instruction'>Please mention expected date of completion</div>
                                        <input type="date" className="form-control" placeholder="" />
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Initiator Group <span className="required">&nbsp;*</span></b></label>
                                        <input type="date" className="form-control" placeholder="" />
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Initiator Group Code</b></label>
                                        <input type="" className="form-control" value="" disabled />
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Short Description <span className="required">&nbsp;*</span></b></label>
                                    <div className='instruction'>Please mention brief summary</div>
                                    <textarea className="form-control" name="w3review" rows="4" cols="50"></textarea>

                                </div>

                                <div className='form-flex'>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Initiated Through</b></label>
                                        <div className='instruction'>Please select related information</div>
                                        <select name="initiated_through" className='form-control'>
                                            <option>Enter Your Selection Here</option>
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
                                        <label className='font-weight-detailsform'><b>Other</b></label>
                                        <div className='instruction'>Please select yes if it is has recurred in past six months</div>
                                        <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Repeat</b></label>
                                        <div className='instruction'>Please select yes if it is has recurred in past six months</div>
                                        <select name="initiated_through" className='form-control'>
                                            <option>Enter Your Selection Here</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                            <option>NA</option>
                                        </select>
                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Repeat Nature</b></label>
                                        <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Risk Level</b></label>
                                        <select name="risk_level" className="form-control">
                                            <option value="0">-- Select --</option>
                                            <option value="minor">Minor</option>
                                            <option value="major">Major</option>
                                            <option value="critical">Critical</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Division Code</b><span>*</span></label>
                                        <select name="div_code" className="form-control">
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
                                        <label className='font-weight-detailsform'><b>Nature Of Change</b></label>
                                        <select name="natureChange">
                                            <option value="0">-- Select --</option>
                                            <option value="Temporary">Temporary</option>
                                            <option value="Permanent">Permanent</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>If Others</b></label>
                                        <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                    </div>



                                </div>

                                <div className="group-input">
                                    <label type="others"><b>Initial attachment</b></label>
                                    <div className="instruction">Please Attach all relevant or supporting documents</div>
                                    <Grid
                                        label={docFile.label}
                                        required={docFile.required}
                                        instruction={docFile.instruction}
                                        columnList={docFile.columnList}
                                    />

                                </div>

                            </div>
                        </div>

                    ) : form === 'Change Details' ? (
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
                                    <label className='font-weight-detailsform'><b>Current Practice </b></label>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Proposed Change</b></label>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Reason for Change</b></label>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Any Other Comments</b></label>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Supervisor Comments</b></label>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                </div>

                            </div>
                        </div>

                    ) : form === 'QA Review' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Type of Change</b></label>
                                    <select name="type_chnage" className="form-control">
                                        <option value="0">-- Select --</option>
                                        <option value="major">Major</option>
                                        <option value="minor">Minor</option>
                                        <option value="critical">Critical</option>
                                    </select>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>QA Review Comments</b></label>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>

                                </div>
                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Related Records</b></label>
                                    <MultiSelect
                                        options={membership}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select" />
                                </div>

                                <div className="group-input">
                                    <label type="others"><b>QA Attachments</b></label>
                                    <div className="instruction">Please Attach all relevant or supporting documents</div>
                                    <Grid
                                        label={docFile.label}
                                        required={docFile.required}
                                        instruction={docFile.instruction}
                                        columnList={docFile.columnList}
                                    />


                                </div>

                            </div>
                        </div>

                    ) : form === 'Evaluation' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="sub-head">
                                    Evaluation Detail
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>QA Evaluation Comments</b></label>
                                    <textarea className="form-control" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label type="text"><b>QA Attachments</b></label>
                                    <div className="instruction">Please Attach all relevant or supporting documents</div>
                                    <Grid
                                        label={docFile.label}
                                        required={docFile.required}
                                        instruction={docFile.instruction}
                                        columnList={docFile.columnList}
                                    />

                                </div>

                                <div className="sub-head">
                                    Training Information
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Training Required</b></label>
                                    <select name="type_chnage" className="form-control">
                                        <option value="0">-- Select --</option>
                                        <option value="major">No</option>
                                        <option value="minor">Yes</option>
                                    </select>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Training Comments</b></label>
                                    <textarea className="form-control" rows="3" cols="50"></textarea>
                                </div>

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
                                        <label className='font-weight-detailsform'><b>CFT Reviewer</b></label>
                                        <select name="type_change" className="form-control">
                                            <option value="0">-- Select --</option>
                                            <option value="major">No</option>
                                            <option value="minor">Yes</option>
                                        </select>
                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>CFT Reviewer Person</b></label>
                                        <MultiSelect
                                            options={cftreviewer}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select" />                                            </div>

                                </div>

                                <div className="sub-head">
                                    Concerned Information
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Is Concerned Group Review Required?</b></label>
                                    <select name="type_change" className="form-control">
                                        <option value="0">-- Select --</option>
                                        <option value="major">No</option>
                                        <option value="minor">Yes</option>
                                    </select>
                                </div>

                                <div className='form-flex'>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Production</b></label>
                                        <select name="type_change" className="form-control">
                                            <option value="0">-- Select --</option>
                                            <option value="major">No</option>
                                            <option value="minor">Yes</option>
                                        </select>
                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Production Person</b></label>
                                        <select name="Production_Person" className="form-control">
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
                                        <label className='font-weight-detailsform'><b>Quality Approver</b></label>
                                        <select name="type_change" className="form-control">
                                            <option value="0">-- Select --</option>
                                            <option value="major">No</option>
                                            <option value="minor">Yes</option>
                                        </select>
                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b> Quality Approver Person</b></label>
                                        <select name="Production_Person" className="form-control">
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
                                        <label className='font-weight-detailsform'><b>Others</b></label>
                                        <select name="type_change" className="form-control">
                                            <option value="0">-- Select --</option>
                                            <option value="major">No</option>
                                            <option value="minor">Yes</option>
                                        </select>
                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Others Person</b></label>
                                        <select name="Production_Person" className="form-control">
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
                                    <label className='font-weight-detailsform'><b>QA Evaluation Comments</b></label>
                                    <textarea className="form-control" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label type="others"><b>QA Attachments</b></label>
                                    <div className="instruction">Please Attach all relevant or supporting documents</div>
                                    <Grid
                                        label={docFile.label}
                                        required={docFile.required}
                                        instruction={docFile.instruction}
                                        columnList={docFile.columnList}
                                    />

                                </div>

                            </div>
                        </div>

                    ) : form === 'Group Comments' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="sub-head">
                                    CFT Feedback
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>QA Evaluation Comments</b></label>
                                    <textarea className="form-control" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label type="text"><b>CFT Attachment</b></label>
                                    <div className="instruction">Please Attach all relevant or supporting documents</div>
                                    <Grid
                                        label={docFile.label}
                                        required={docFile.required}
                                        instruction={docFile.instruction}
                                        columnList={docFile.columnList}
                                    />

                                </div>

                                <div className="sub-head">
                                    Concerned Group Feedback
                                </div>

                                <div className='form-flex'>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>QA Comments</b></label>
                                        <textarea className="form-control" rows="3" cols="50"></textarea>

                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>QA Head Designee Comments</b></label>
                                        <textarea className="form-control" rows="3" cols="50"></textarea>

                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Warehouse Comments</b></label>
                                        <textarea className="form-control" rows="3" cols="50"></textarea>

                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Engineering Comments</b></label>
                                        <textarea className="form-control" rows="3" cols="50"></textarea>

                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Instrumentation Comments</b></label>
                                        <textarea className="form-control" rows="3" cols="50"></textarea>

                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Validation Comments</b></label>
                                        <textarea className="form-control" rows="3" cols="50"></textarea>

                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Others Comments</b></label>
                                        <textarea className="form-control" rows="3" cols="50"></textarea>

                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Group Comments</b></label>
                                        <textarea className="form-control" rows="3" cols="50"></textarea>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ) : form === 'Risk Assessment' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="sub-head">
                                    Risk Assessment
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Risk Identification</b></label>
                                    <textarea className="form-control" rows="3" cols="50"></textarea>
                                </div>



                                <div className='form-flex'>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Severity Rate</b></label>
                                        <select name="severity" className='form-control'>
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">Negligible</option>
                                            <option value="2">Moderate</option>
                                            <option value="3">Major</option>
                                            <option value="4">Fatal</option>
                                        </select>
                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Occurrence</b></label>
                                        <select name="Occurrence" id="analysisP">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="5">Extremely Unlikely</option>
                                            <option value="4">Rare</option>
                                            <option value="3">Unlikely</option>
                                            <option value="2">Likely</option>
                                            <option value="1">Very Likely</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Detection</b></label>
                                        <select name="Detection" id="analysisN" >
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="5">Impossible</option>
                                            <option value="4">Rare</option>
                                            <option value="3">Unlikely</option>
                                            <option value="2">Likely</option>
                                            <option value="1">Very Likely</option>
                                        </select>
                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>RPN</b></label>
                                        <div className="instruction">Auto - Calculated</div>
                                        <input type='text' name='RPN' id='' disabled />
                                    </div>

                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Risk Evaluation</b></label>
                                    <textarea className="form-control" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Migration Action</b></label>
                                    <textarea className="form-control" rows="3" cols="50"></textarea>
                                </div>
                            </div>
                        </div>
                    ) : form === 'QA Approval Comments' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>


                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>QA Approval Comments</b></label>
                                    <textarea className="form-control" rows="3" cols="50"></textarea>
                                </div>


                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Training Feedback</b></label>
                                    <textarea className="form-control" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label type="text"><b>Training Attachments</b></label>
                                    <div className="instruction">Please Attach all relevant or supporting documents</div>
                                    <Grid
                                        label={docFile.label}
                                        required={docFile.required}
                                        instruction={docFile.instruction}
                                        columnList={docFile.columnList}
                                    />

                                </div>

                            </div>
                        </div>
                    ) : form === 'Change Closure' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <Grid
                                    label={changeCloser.label}
                                    required={changeCloser.required}
                                    instruction={changeCloser.instruction}
                                    columnList={changeCloser.columnList}
                                />

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>QA Closure Comments </b></label>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="group-input">
                                    <label type="text"><b>List Of Attachments</b></label>
                                    <div className="instruction">Please Attach all relevant or supporting documents</div>
                                    <Grid
                                        label={docFile.label}
                                        required={docFile.required}
                                        instruction={docFile.instruction}
                                        columnList={docFile.columnList}
                                    />

                                </div>

                                <div className="sub-head">
                                    Effectiveness Check Details
                                </div>

                                <div className='form-flex'>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Effectivess Check Required?</b></label>
                                        <select name="severity" className='form-control'>
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>

                                        </select>
                                    </div>


                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Effectiveness Check Creation Date</b></label>
                                        <input type='date' className='form-control' />
                                    </div>

                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Effectiveness Checker</b></label>
                                    <select name="Effectiveness_checker">
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
                                    <label className='font-weight-detailsform'><b>Effectiveness Check Plan</b></label>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className="sub-head">
                                    Extension Justification
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Due Date Extension Justification</b></label>
                                    <div className="instruction">Please Mention justification if due date is crossed</div>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                </div>

                            </div>
                        </div>

                    ) : form === 'Activity Log' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="sub-head">
                                    Electronic Signatures
                                </div>

                                <div className='form-flex'>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Submitted By</b></label>

                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Submitted On</b></label>

                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Cancelled By</b></label>

                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Cancelled On</b></label>

                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>More Information Required By</b></label>

                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>More Information Required On</b></label>

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
            </div >
        </>
    )
}

export default Changecontrolform
