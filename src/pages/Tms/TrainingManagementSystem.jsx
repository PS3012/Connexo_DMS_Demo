import { useReducer, useState } from 'react';
import './TrainingManagementSystem.css';
import HeaderTop from '../../components/Header/HeaderTop';
import InputDate from '../../components/DataFields/InputDate';

function TrainingManagementSystem() {

    const [trainingType, setTrainingType] = useState(0);
    const [asideWorkFlow, setAsideWorkFlow] = useState(false);
    const [asideFamilyTree, setAsideFamilyTree] = useState(false);
    // const [generalInformation, setGeneralInformation] = useReducer((prev, next) => ({
    //     ...prev, ...next
    // }), {
    //     recordNumber: `${site}/CC/${currentYear}/000001`,
    //     site: site,
    //     initiator: 'Amit Guru',
    //     dateOfInitiation: CurrentDate(),
    //     assignedTo: '',
    //     dueDate: '',
    //     initiatorGroup: '',
    //     shortDescription: '',
    //     initiatedThrough: '',
    //     initiatedThroughOthers: '',
    //     repeat: '',
    //     repeatNature: '',
    //     riskLevel: '',
    //     divisionCode: '',
    //     natureOfChange: '',
    //     natureOfChangeOthers: '',
    //     initialAttachment: '',
    //     groupComment: ''
    // })

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
                <HeaderTop />


                <div className='TrainingManagementSystem-page'>
                    <div className="top-block">
                        <div><strong> Record Name:&nbsp;</strong>Training Management Plan</div>
                        <div><strong> Site:&nbsp;</strong>Jordan</div>
                        <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
                        <div><strong> Initiated By:&nbsp;</strong>Shaleen Mishra</div>
                    </div>

                    <div className='details-form'>
                        <div className='form-contain'>
                            <div className='sub-head'>Basic Information</div>

                            <div className='details-form-data'>

                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>Record Number</label>
                                        <input type="text" value="null/CC/2024/000001" disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Division Code</label>
                                        <input type="text" value="" disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Initiator</label>&nbsp;
                                        <input type="text" value="Amit Guru" disabled />
                                    </div>
                                    <div className="group-input">
                                        <InputDate
                                            label="Date of Initiation"
                                            instruction="Please mention expected date of completion."
                                            isRequired="true"
                                            enableDate="future"
                                            isDisabled="true"
                                        />
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'>Description</label>
                                    {/* <div className='required'></div> */}
                                    <textarea className="form-control" name="w3review" rows="2" cols="50"></textarea>
                                </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Effective Criteria(in %)</b></label>
                                        <input type="number" className='form-control' />
                                    </div>

                                    {trainingType === 'Read-Understand-with-Questions' &&
                                        <div className="group-input">
                                            <label htmlFor="quiz">Quiz</label>
                                            <select name="quiz">
                                                <option value="0">-- Select --</option>
                                                <option value="1">Quiz 1</option>
                                                <option value="2">Quiz 2</option>
                                            </select>
                                        </div>
                                    }   
                            </div>
                        </div>

                    </div>

                    <div className='details-form'>
                        <div className='selecting-form-flex'>
                            <div className='Selecting-Sop-form'>
                                <div className='form-contain'>
                                    <div className='sub-head'>Selecting-SOPs</div>

                                    <div className="inner-block-content">
                                        <div className='inner-part-search-box'>

                                            <div className="search-bar">

                                                <input type="text" name="search" placeholder="Search SOP's" />
                                                <label type="search">
                                                    <svg width="15" height="15" viewBox="0 0 376 384" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#fff" d="m267 235l106 106l-32 32l-106-106v-17l-6-6q-39 33-90 33q-58 0-98.5-40.5T0 138.5t40.5-98t98-40.5t98 40.5T277 139q0 51-33 90l6 6zm-128 0q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28" />
                                                    </svg>
                                                </label>

                                            </div>
                                        </div>


                                        <div className="selection-table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>&nbsp;</th>
                                                        <th>Document Number</th>
                                                        <th>Document Title</th>
                                                        <th>Originator</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='Selecting-Trainees-form'>
                                <div className='form-contain'>
                                    <div className='sub-head'>Selecting Trainees</div>

                                    <div className='inner-block-content'>
                                        <div className='inner-part-search-box'>

                                            <div className="search-bar">

                                                <input type="text" name="search" placeholder="Search Trainees" />
                                                <label type="search">
                                                    <svg width="15" height="15" viewBox="0 0 376 384" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#fff" d="m267 235l106 106l-32 32l-106-106v-17l-6-6q-39 33-90 33q-58 0-98.5-40.5T0 138.5t40.5-98t98-40.5t98 40.5T277 139q0 51-33 90l6 6zm-128 0q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28" />
                                                    </svg>
                                                </label>

                                            </div>
                                        </div>

                                        <div className="selection-table">
                                            <table className="">
                                                <thead>
                                                    <tr>
                                                        <th>&nbsp;</th>
                                                        <th>Trainees Name</th>
                                                        <th>Department</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center">
                                                            <input type="checkbox" id="trainee" name="trainees[]" value="1" />

                                                        </td>
                                                        <td>Amit Guru</td>
                                                        <td>Quality Assurance </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <input type="checkbox" id="trainee" name="trainees[]" value="2" />
                                                        </td>
                                                        <td>Shaleen Mishra</td>
                                                        <td>Quality Assurance </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <input type="checkbox" id="trainee" name="trainees[]" value="3" />
                                                        </td>
                                                        <td>Vikas Prajapati</td>
                                                        <td>Quality Assurance </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <input type="checkbox" id="trainee" name="trainees[]" value="4" />
                                                        </td>
                                                        <td>Anshul Patel</td>
                                                        <td>Quality Assurance </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <input type="checkbox" id="trainee" name="trainees[]" value="5" />
                                                        </td>
                                                        <td>Amit Patel</td>
                                                        <td>Quality Assurance </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <input type="checkbox" id="trainee" name="trainees[]" value="7" />
                                                        </td>
                                                        <td>Jin Kim</td>
                                                        <td>Quality Assurance </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <input type="checkbox" id="trainee" name="trainees[]" value="8" />
                                                        </td>
                                                        <td>Akash Asthana</td>
                                                        <td>Quality Assurance </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

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

export default TrainingManagementSystem;
