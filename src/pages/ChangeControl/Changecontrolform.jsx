import { useState } from 'react'
import './Changecontrolform.css'
import { MultiSelect } from 'react-multi-select-component';
import HeaderTop from '../../components/Header/HeaderTop';


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



    return (
        <>
            {/* <header>
                <div className="header_rcms_top">
                    <div className="container-fluid">
                        <div className="container">
                            <div></div>
                        </div>
                    </div>
                </div>

                <div className="header_rcms_middle">
                    <div className="container-fluid">
                        <div className="middle-head">
                            <div className="logo-container">
                                <div className="logo">
                                    <img src="/logo.png" alt="..." />
                                </div>
                                <div className="logo">
                                    <img src="logo1.png" alt="..." />
                                </div>
                            </div>

                            <div className="icon-grid">
                                <div className="icon-drop">
                                    <div className="icon">
                                        <i className="fa-solid fa-user-gear"></i>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="icon-block">
                                        <div><a id="/form-division">Quality Management System</a></div>
                                        <div><a data-bs-toggle="modal" data-bs-target="#import-export-modal">
                                            Import/Export Terms
                                        </a></div>
                                        <div><a href="#">MedDRA</a></div>
                                        <div><a href="#">Report Duplicate Translate Terms</a></div>
                                        <div><a href="#">Spellcheck Languages</a></div>
                                        <div><a href="#">Spellcheck Settings</a></div>
                                        <div><a href="#">Translate Terms</a></div>
                                        <div><a href="/designate-proxy">Designate Proxy</a></div>
                                    </div>
                                </div>
                                <div className="icon-drop">
                                    <div className="icon">
                                        <i className="fa-solid fa-user-tie"></i>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="icon-block small-block">
                                        <div className="image">
                                            <img src="/amit_guru.jpg" alt="..."
                                                className="w-100 h-100" />
                                            <img src="/logo.png" alt="..."
                                                className="w-100 h-100"></img>
                                        </div>
                                        <div data-bs-toggle="modal" data-bs-target="#">Settings</div>
                                        <div data-bs-toggle="modal" data-bs-target="#">About</div>
                                        <div><a href="#">Help</a></div>
                                        <div><a href="/">Helpdesk Personnel</a></div>
                                        <div><a href="/">Log Out</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
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
                                        <label className='font-weight-detailsform'><b>Assigned To</b><span>*</span></label>
                                        <select id="select-state" className='form-control' placeholder="Select..." name="assign_to">
                                            <option value="">Select a value</option>
                                            <option value="2">Shaleen Mishra</option>
                                        </select>                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Due Date</b><span>*</span></label>
                                        <div className='instruction'>Please mention expected date of completion</div>
                                        <input type="date" className="form-control" placeholder="" />
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Initiator Group *</b></label>
                                        <input type="date" className="form-control" placeholder="" />
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Initiator Group Code</b><span>*</span></label>
                                        <input type="" className="form-control" value="" disabled />
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Short Description *</b></label>
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
                                    <div className="file-attachment-field">
                                        <div className="file-attachment-list" id="in_attachment"></div>
                                        <div className="add-btn">
                                            <div>Add</div>
                                            <input type="file" id="myfile" name="in_attachment[]" multiple="" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    ) : form === 'Change Details' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

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
                                    <div className="file-attachment-field">
                                        <div className="file-attachment-list" id="in_attachment"></div>
                                        <div className="add-btn">
                                            <div>Add</div>
                                            <input type="file" id="myfile" name="in_attachment[]" multiple="" />
                                        </div>
                                    </div>

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
                                    <div className="file-attachment-field">
                                        <div className="file-attachment-list" id="in_attachment"></div>
                                        <div className="add-btn">
                                            <div>Add</div>
                                            <input type="file" id="myfile" name="in_attachment[]" multiple="" />
                                        </div>
                                    </div>
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
                                    <div className="file-attachment-field">
                                        <div className="file-attachment-list" id="in_attachment"></div>
                                        <div className="add-btn">
                                            <div>Add</div>
                                            <input type="file" id="myfile" name="in_attachment[]" multiple="" />
                                        </div>
                                    </div>
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
                                    <div className="file-attachment-field">
                                        <div className="file-attachment-list" id="in_attachment"></div>
                                        <div className="add-btn">
                                            <div>Add</div>
                                            <input type="file" id="myfile" name="in_attachment[]" multiple="" />
                                        </div>
                                    </div>
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
                        <div></div>
                    ) : form === 'QA Approval Comments' ? (
                        <div></div>
                    ) : form === 'Change Closure' ? (
                        <div></div>
                    ) : form === 'Activity Log' ? (
                        <div></div>
                    ) : ''}
                </div>

                <div className="button-block">
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </div >
        </>
    )
}

export default Changecontrolform
