import './ConfigForms.css'
import HeaderTop from "../../components/Header/HeaderTop";
import { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import Grid from '../../components/DataFields/Grid';

function RootCauseAnalysis() {

    const [form, setForm] = useState("Investigation");
    const [selected, setSelected] = useState([]);

    const rootCauseInvestigators = [

        { label: "Amit Guru", value: "1" },
        { label: "Shaleen Mishra", value: "2" },
        { label: "Madhulika Mishra", value: "3" },
        { label: "Amit Patel", value: "4" },
        { label: "Harsh Mishra", value: "5" },

    ];
    const rootCauseDepartments = [
        { label: "Work Instruction", value: "1" },
        { label: "Quality Assurance", value: "2" },
        { label: "Specifications", value: "3" },
        { label: "Production", value: "4" },
    ];
    const rootCauseMethodology = [
        { label: "Why-Why Chart", value: "why" },
        { label: "Failure Mode and Effect Analysis", value: "Failure" },
        { label: "Fishbone or Ishikawa Diagram", value: "Fishbone" },
        { label: "Is/Is Not Analysis", value: "Is/Is" },
    ];
    const FailureMode = {
        label: 'Failure Mode and Effect Analysis',
        instruction: <div> (Launch Instruction)</div>,
        required: false,
        columnList: [
            { id: '2.1.1', name: 'Risk Factor', type: 'text' },
            { id: '2.1.2', name: '	Risk element', type: 'text' },
            { id: '2.1.2', name: 'Probable cause of risk element', type: 'text' },
            { id: '2.1.2', name: 'Existing Risk Controls', type: 'text' },
            { id: '2.1.2', name: '	Initial Severity- H(3)/M(2)/L(1)', type: 'text' },
            { id: '2.1.2', name: 'Initial Probability- H(3)/M(2)/L(1)', type: 'text' },
            { id: '2.1.2', name: '	Initial Detectability- H(1)/M(2)/L(3)', type: 'text' },
            { id: '2.1.2', name: 'Initial RPN', type: 'text' },
            { id: '2.1.2', name: '	Risk Acceptance (Y/N)', type: 'text' },
            { id: '2.1.2', name: 'Proposed Additional Risk control measure (Mandatory for Risk elements having RPN>4)', type: 'text' },
            { id: '2.1.2', name: 'Residual Severity- H(3)/M(2)/L(1)', type: 'text' },
            { id: '2.1.2', name: 'Residual Probability- H(3)/M(2)/L(1)', type: 'text' },
            { id: '2.1.2', name: 'Residual Detectability- H(1)/M(2)/L(3)', type: 'text' },
            { id: '2.1.2', name: 'Residual RPN', type: 'text' },
            { id: '2.1.2', name: '	Risk Acceptance (Y/N)', type: 'text' },
            { id: '2.1.2', name: 'Mitigation proposal (Mention either CAPA reference number, IQ, OQ or PQ)', type: 'text' },

        ]
    }
    const rootcauseAttachment = {
        label: 'Initial Attachment',
        instruction: <div>Please Attach all relevant or supporting documents</div>,
        required: false,
        columnList: [
            { id: '2.1.1', name: 'Title of Document', type: 'text' },
            { id: '2.1.2', name: 'Attached File', type: 'file' },
            { id: '2.1.2', name: 'Remark', type: 'text' },

        ]
    }

    return (
        <>
            <HeaderTop />
            <div id='config-form-document-page'>
                <div className="top-block">
                    <div className="head">Root Cause Analysis</div>
                </div>

                <div className='document-block'>

                    <div className="document-tabs">
                        <div className={form === 'Investigation' ? 'active' : ''} onClick={() => setForm('Investigation')}>Investigation</div>

                        <div className={form === 'Investigation & Root Cause' ? 'active' : ''} onClick={() => setForm('Investigation & Root Cause')}>Investigation & Root Cause</div>

                        <div className={form === 'Signatures' ? 'active' : ''} onClick={() => setForm('Signatures')}>Signatures</div>

                    </div>

                    {form === 'Investigation' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className='form-flex'>
                                    <div className='group-input'>
                                        <label>Originator</label>
                                        <input type='text' value='Amit Guru' disabled />
                                    </div>
                                    <div className='group-input'>
                                        <label>Date Opened</label>
                                        <div className='instruction'>When was this Investigation record opened?</div>
                                        <input type='text' name='date-opened' value="15 Jan,2024" disabled />
                                    </div>
                                </div>

                                <div className='group-input'>
                                    <label>Short Description</label>
                                    <div className='instruction'>Investigation short description to be presented on desktop</div>
                                    <textarea id="w3review" name="w3review" rows="4" cols="50" />
                                </div>

                                <div className='form-flex'>
                                    <div className='group-input'>
                                        <label>Assigned to</label>
                                        <div className='instruction'>Lead Investigator</div>
                                        <select name="assigned-to">
                                            <option value="0">-- Select --</option>
                                            <option value="1">Amit Guru</option>
                                            <option value="2">Shaleen Mishra</option>
                                            <option value="3">Madhulika Mishra</option>
                                            <option value="4">Amit Patel</option>
                                            <option value="5">Harsh Mishra</option>
                                        </select>
                                    </div>

                                    <div className='group-input'>
                                        <label>Date Due</label>
                                        <div className='instruction'>Last date this Investigation should be closed by</div>
                                        <input type='date' name='date-opened' />
                                    </div>

                                    <div className='group-input'>
                                        <label>Type</label>
                                        <select name="Type">
                                            <option value="0">-- Select --</option>
                                            <option value="1">Facillties</option>
                                            <option value="2">Other</option>
                                            <option value="3">Stabillity</option>
                                            <option value="4">Raw Material</option>
                                            <option value="5">Clinical Production</option>
                                            <option value="6">Commercial Production</option>
                                            <option value="7">Labellling</option>
                                            <option value="8">laboratory</option>
                                            <option value="9">Utillities</option>
                                            <option value="10">Validation</option>
                                        </select>
                                    </div>

                                    <div className='group-input'>
                                        <label>Priority Level</label>
                                        <div className='instruction'>Choose high if Immidiate actions are required</div>
                                        <select name="priority_level">
                                            <option value="0">-- Select --</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>

                                    <div className='group-input'>
                                        <label>Additional Investigators</label>
                                        <MultiSelect
                                            options={rootCauseInvestigators}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select" />

                                    </div>

                                    <div className='group-input'>
                                        <label>Department(s)</label>
                                        <MultiSelect
                                            options={rootCauseDepartments}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select" />
                                    </div>
                                </div>

                                <div className="sub-head">
                                    Investigation details
                                </div>

                                <div className='group-input'>
                                    <label>Description</label>
                                    <textarea id="w3review" name="w3review" rows="2" cols="50" />
                                </div>

                                <div className='group-input'>
                                    <label>Comments</label>
                                    <textarea id="w3review" name="w3review" rows="2" cols="50" />
                                </div>

                                <div className="group-input">
                                    <Grid
                                        label={rootcauseAttachment.label}
                                        required={rootcauseAttachment.required}
                                        instruction={rootcauseAttachment.instruction}
                                        columnList={rootcauseAttachment.columnList}
                                    />
                                </div>

                                <div className='group-input'>
                                    <label>Related URL</label>
                                    <input type='text' />
                                </div>


                            </div>
                        </div>

                    ) : form === 'Investigation & Root Cause' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className='group-input'>
                                    <label>Root Cause Methodology</label>
                                    <MultiSelect
                                        options={rootCauseMethodology}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select" />
                                </div>

                                <div className="group-input">
                                    <Grid
                                        label={FailureMode.label}
                                        required={FailureMode.required}
                                        instruction={FailureMode.instruction}
                                        columnList={FailureMode.columnList}
                                    />
                                </div>

                                <div className='group-input'>
                                    <label>Is/Is Not Analysis</label>
                                    <div className='instruction'> (Launch Instruction)</div>


                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>Will Be</th>
                                                <th>Will Not Be</th>
                                                <th>Rationale</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>What</th>
                                                <td>
                                                    <textarea name="what_will_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="what_will_not_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="what_rationable"></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Where</th>
                                                <td>
                                                    <textarea name="where_will_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="where_will_not_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="where_rationable"></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>When</th>
                                                <td>
                                                    <textarea name="when_will_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="when_will_not_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="when_rationable"></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Coverage</th>
                                                <td>
                                                    <textarea name="coverage_will_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="coverage_will_not_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="coverage_rationable"></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Who</th>
                                                <td>
                                                    <textarea name="who_will_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="who_will_not_be"></textarea>
                                                </td>
                                                <td>
                                                    <textarea name="who_rationable"></textarea>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="group-input">
                                    <label><b>Investigation Summary</b></label>
                                    <textarea id="w3review" name="w3review" rows="3" cols="50" />
                                </div>

                                <div className='sub-head'>
                                    Geographic Information
                                </div>

                                <div className='form-flex'>
                                    <div className='group-input'>
                                        <label>Zone</label>
                                        <select name="Zone">
                                            <option>-- Select --</option>
                                            <option>Asia</option>
                                            <option>Europe</option>
                                            <option>Africa</option>
                                            <option>Central America</option>
                                            <option>South America</option>
                                            <option>Oceania</option>
                                            <option>North America</option>
                                        </select>
                                    </div>
                                    <div className='group-input'>
                                        <label>Country</label>
                                        <select name="Country">
                                            <option>-- Select --</option>
                                        </select>
                                    </div>
                                    <div className='group-input'>
                                        <label>State/District</label>
                                        <select name="Country">
                                            <option>-- Select --</option>
                                        </select>
                                    </div>
                                    <div className='group-input'>
                                        <label>City</label>
                                        <select name="Country">
                                            <option>-- Select --</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ) : form === 'Signatures' ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className='form-flex'>
                                    <div className='group-input'>
                                        <label>Completed By</label>
                                        <input type='text' />

                                    </div>
                                    <div className='group-input'>
                                        <label>Completed By</label>
                                        <input type='text' />
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

export default RootCauseAnalysis
