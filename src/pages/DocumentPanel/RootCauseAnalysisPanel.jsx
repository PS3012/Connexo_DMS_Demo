import HeaderTop from "../../components/Header/HeaderTop";
import { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import Grid from '../../components/DataFields/Grid';
import InputDate from '../../components/DataFields/InputDate';
import { CurrentDate } from '../../components/DateReturners';
import HeaderBottom from "../../components/Header/HeaderBottom";
function RootCauseAnalysisPanel() {

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
                    <div><strong> Record Name:&nbsp;</strong>RootCauseAnalysis</div>
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

        </>
    )
}

export default RootCauseAnalysisPanel
