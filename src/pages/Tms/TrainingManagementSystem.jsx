import { useState } from 'react';
import './TrainingManagementSystem.css';
import HeaderTop from '../../components/Header/HeaderTop';
import HeaderBottom from '../../components/Header/HeaderBottom';

function TrainingManagementSystem() {

    const [trainingType, setTrainingType] = useState(0);

    return (
        <>
            
                <HeaderTop />
                <HeaderBottom />
                <div className='TrainingManagementSystem-page'>
                    <div className="top-block">
                        <div className="head">New Training Plan</div>
                    </div>

                    <div className='details-form'>
                        <div className='form-contain'>
                            <div className='sub-head'>Basic Information</div>

                            <div className='details-form-data'>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Training Plan Name</b></label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className='group-input-flex'>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Training Plan ID</b></label>
                                        <div className='static'>Not-Applicable</div>
                                    </div>

                                    <div className="group-input">
                                        <label className='font-weight-detailsform'><b>Training Plan Type</b></label>
                                        <select name="training_plan_type" value={trainingType} onChange={(e) => setTrainingType(e.target.value)}>
                                            <option value="0">-- Select --</option>
                                            <option value="Read-Understand">Read &amp; Understand</option>
                                            <option value="Read-Understand-with-Questions">Read &amp; Understand with Questions </option>
                                            <option value="Classroom-Training">Classroom Training</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Training Plan Description <span className="required">&nbsp;*</span></b></label>
                                    <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                                </div>

                                <div className='group-input-flex'>
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
            
        </>
    )
}

export default TrainingManagementSystem;
