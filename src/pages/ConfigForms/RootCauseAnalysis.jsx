import './ConfigForms.css'
import HeaderTop from "../../components/Header/HeaderTop";
import { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import Grid from '../../components/DataFields/Grid';
import InputDate from '../../components/DataFields/InputDate';
import { CurrentDate } from '../../components/DateReturners';

function RootCauseAnalysis() {
    const formList = ["General Information", "Chemical Analysis ", "Water Analysis", "Environmental Monitoring ", "Lab Investigator Remark", "QA Head/Designee Eval Comments", "Activity Log"]

    const [form, setForm] = useState(formList[0]);
    const [selected, setSelected] = useState([]);
    const [asideWorkFlow, setAsideWorkFlow] = useState(false);
    const [asideFamilyTree, setAsideFamilyTree] = useState(false);

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
        instruction: <div></div>,
        required: false,
        columnList: [
            { id: '2.1.1', name: 'Title of Document', type: 'text' },
            { id: '2.1.2', name: 'Attached File', type: 'file' },
            { id: '2.1.2', name: 'Remark', type: 'text' },

        ]
    }
    const attachmentroot = [

        {
            label: 'Lab Investigator Attachments',
            instruction: <div></div>,
            required: false,
            columnList: [
                { id: '2.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.2', name: 'Attached File', type: 'file' },
                { id: '2.1.2', name: 'Remark', type: 'text' },

            ]
        },
        {
            label: 'Investigation Attachments',
            instruction: <div></div>,
            required: false,
            columnList: [
                { id: '2.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.2', name: 'Attached File', type: 'file' },
                { id: '2.1.2', name: 'Remark', type: 'text' },

            ]
        },
    ]
    const WaterAnalysis = [
        {
            label: "Review of analyst knowledge and training",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
        {
            label: "Review of Instuments",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
        {
            label: "Water Plant Checklist",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
        {
            label: "Sample Testing Checklist",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
    ];
    const EnvironmentalMonitoring = [
        {
            label: "Environment Monitoring Results",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
        {
            label: "Intrument Calibration Results",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
        {
            label: "Review of Storage condition of Plate",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
        {
            label: "Review of Media Lot",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
        {
            label: "Sampling",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
        {
            label: "Airborne Contamination",
            instruction: "",
            required: false,
            columnList: [
                { id: '2.1.1.1', name: 'Question', type: 'text' },
                { id: '2.1.1.2', name: 'Response', type: 'text' },
            ]
        },
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
                        <div><strong> Record Name:&nbsp;</strong>RootCauseAnalysis</div>
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
                                        <div className='group-input'>
                                            <label>Originator</label>
                                            <div className="instruction">&nbsp;</div>
                                            <input type='text' value='Amit Guru' disabled />
                                        </div>

                                        <div className="group-input">
                                            <label>Date Opened</label>
                                            <div className="instruction">&nbsp;</div>
                                            <input type="text" value={CurrentDate()} disabled />
                                        </div>

                                    </div>

                                    <div className='group-input'>
                                        <label>Short Description</label>
                                        <div className='instruction'>Investigation short description to be presented on desktop</div>
                                        <textarea id="w3review" name="w3review" rows="2" cols="50" />
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

                                        <InputDate
                                            label="Due Date"
                                            instruction="Please mention expected date of completion."
                                            isRequired="true"
                                            enableDate="future"
                                        />

                                        <div className='group-input'>
                                            <label>Type</label>
                                            <div className="instruction">&nbsp;</div>
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

                        ) : form === formList[1] ? (
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
                        ) : form === formList[2] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className='sub-head'>
                                        Water Analysis I
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={WaterAnalysis[0].label}
                                            required={WaterAnalysis[0].required}
                                            instruction={WaterAnalysis[0].instruction}
                                            columnList={WaterAnalysis[0].columnList}
                                        />
                                    </div>
                                    <div className='sub-head'>
                                        Water Analysis II
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={WaterAnalysis[1].label}
                                            required={WaterAnalysis[1].required}
                                            instruction={WaterAnalysis[1].instruction}
                                            columnList={WaterAnalysis[1].columnList}
                                        />
                                    </div>
                                    <div className='sub-head'>
                                        Water Analysis III
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={WaterAnalysis[2].label}
                                            required={WaterAnalysis[2].required}
                                            instruction={WaterAnalysis[2].instruction}
                                            columnList={WaterAnalysis[2].columnList}
                                        />
                                    </div>
                                    <div className='sub-head'>
                                        Water Analysis IV
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={WaterAnalysis[3].label}
                                            required={WaterAnalysis[3].required}
                                            instruction={WaterAnalysis[3].instruction}
                                            columnList={WaterAnalysis[3].columnList}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[3] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>

                                    <div className='sub-head'>
                                        EnvironmentalMonitoring I
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={EnvironmentalMonitoring[0].label}
                                            required={EnvironmentalMonitoring[0].required}
                                            instruction={EnvironmentalMonitoring[0].instruction}
                                            columnList={EnvironmentalMonitoring[0].columnList}
                                        />
                                    </div>

                                    <div className='sub-head'>

                                        Environmental Monitoring II
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={EnvironmentalMonitoring[1].label}
                                            required={EnvironmentalMonitoring[1].required}
                                            instruction={EnvironmentalMonitoring[1].instruction}
                                            columnList={EnvironmentalMonitoring[1].columnList}
                                        />
                                    </div>

                                    <div className='sub-head'>

                                        Environmental Monitoring III
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={EnvironmentalMonitoring[2].label}
                                            required={EnvironmentalMonitoring[2].required}
                                            instruction={EnvironmentalMonitoring[2].instruction}
                                            columnList={EnvironmentalMonitoring[2].columnList}
                                        />
                                    </div>

                                    <div className='sub-head'>
                                        Environmental Monitoring IV
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={EnvironmentalMonitoring[3].label}
                                            required={EnvironmentalMonitoring[3].required}
                                            instruction={EnvironmentalMonitoring[3].instruction}
                                            columnList={EnvironmentalMonitoring[3].columnList}
                                        />
                                    </div>

                                    <div className='sub-head'>
                                        Environmental Monitoring V
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={EnvironmentalMonitoring[4].label}
                                            required={EnvironmentalMonitoring[4].required}
                                            instruction={EnvironmentalMonitoring[4].instruction}
                                            columnList={EnvironmentalMonitoring[4].columnList}
                                        />
                                    </div>

                                    <div className='sub-head'>
                                        Environmental Monitoring VI
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={EnvironmentalMonitoring[5].label}
                                            required={EnvironmentalMonitoring[5].required}
                                            instruction={EnvironmentalMonitoring[5].instruction}
                                            columnList={EnvironmentalMonitoring[5].columnList}
                                        />
                                    </div>



                                </div>
                            </div>
                        ) : form === formList[4] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className='group-input'>
                                        <label>Lab Investigator Conclusion</label>
                                        <textarea rows='2'></textarea>
                                    </div>

                                    <div className='group-input'>
                                        <Grid
                                            label={attachmentroot[0].label}
                                            required={attachmentroot[0].required}
                                            instruction={attachmentroot[0].instruction}
                                            columnList={attachmentroot[0].columnList}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[5] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className='group-input'>
                                        <label>QC Head Evaluation Comments</label>
                                        <textarea rows='2'></textarea>
                                    </div>

                                    <div className='group-input'>
                                        <Grid
                                            label={attachmentroot[1].label}
                                            required={attachmentroot[1].required}
                                            instruction={attachmentroot[1].instruction}
                                            columnList={attachmentroot[1].columnList}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[6] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="activity-log-field">
                                        <div>
                                            <strong> Submitted By:&nbsp;</strong>Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong> Submitted On:&nbsp;</strong>18 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong> Report Result By:&nbsp;</strong>Amit Patel
                                        </div>
                                        <div>
                                            <strong>Report Result On:&nbsp;</strong>18 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Evaluation Complete By:&nbsp;</strong> Amit Guru
                                        </div>
                                        <div>
                                            <strong>Evaluation Complete On:&nbsp;</strong>18 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                            : ''}
                    </div>
                    <div className="button-block" style={asideWorkFlow || asideFamilyTree ? { 'width': 'calc(100% - 300px)' } : { 'width': '100%' }}>
                        <button className='themeBtn'>Save</button>
                        <button className='themeBtn'>Back</button>
                        <button className='themeBtn'>Next</button>
                        <button className='themeBtn'>Exit</button>
                    </div>
                </div >

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

export default RootCauseAnalysis;       
