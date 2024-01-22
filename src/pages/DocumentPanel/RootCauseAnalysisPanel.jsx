import HeaderTop from "../../components/Header/HeaderTop";
import { useReducer, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import Grid from '../../components/DataFields/Grid';
import InputDate from '../../components/DataFields/InputDate';
import { CurrentDate } from '../../components/DateReturners';
import HeaderBottom from "../../components/Header/HeaderBottom";
function RootCauseAnalysisPanel() {

    const formList = ["Investigation", "Lab Investigator Remark", "QA Head/Designee Eval Comments", "Investigation & Root Cause", "Activity Log"]

    const [form, setForm] = useState(formList[0]);
    const [selected, setSelected] = useState([]);
    const [asideWorkFlow, setAsideWorkFlow] = useState(false);
    const [asideFamilyTree, setAsideFamilyTree] = useState(false);
    const [changeControl, setChangeControl] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        shortDescription: '',
        initiatorGroup: '',
        initiatedThrough: '',
        repeat: '',
        trainingRequired: '',
        typeOfChange: 0,
        severityRate: 0,
        occurrence: 0,
        detection: 0,
        CFTReviewers: 0,
        groupReviewRequired: 0,
        production: 0,
        productionPerson: 0,
        qualityApprover: 0,
        qualityApproverPerson: 0,
        others: 0,
        othersPerson: 0
    })

    const rootCauseInvestigators = [

        { label: "Amit Guru", value: "1" },
        { label: "Shaleen Mishra", value: "2" },
        { label: "Madhulika Mishra", value: "3" },
        { label: "Amit Patel", value: "4" },
        { label: "Harsh Mishra", value: "5" },

    ];
    const rootcauseMethodology = [

        { label: "Why-Why Chart", value: "A" },
        { label: "Failure Mode and Efect Analysis", value: "B" },
        { label: "Fishbone or Ishikawa Diagram", value: "C" },
        { label: " Is/Is Not Analysis", value: "D" },

    ];
    const rootCauseDepartments = [
        { label: "Work Instruction", value: "1" },
        { label: "Quality Assurance", value: "2" },
        { label: "Specifications", value: "3" },
        { label: "Production", value: "4" },
    ];
    // const EffectAnalysis = [
    //     { label: "	Risk Factor", value: "1" },
    //     { label: "Risk element", value: "2" },
    //     { label: "Probable cause of risk element", value: "3" },
    //     { label: "Existing Risk Controls", value: "4" },
    //     { label: "	Initial Severity- H(3)/M(2)/L(1)", value: "5" },
    //     { label: "Initial Probability- H(3)/M(2)/L(1)", value: "6" },
    //     { label: "Initial Detectability- H(1)/M(2)/L(3)", value: "7" },
    //     { label: "Initial RPN", value: "8" },
    //     { label: "	Risk Acceptance (Y/N)", value: "9" },
    //     { label: "Proposed Additional Risk control measure (Mandatory for Risk elements having RPN>4)", value: "10" },
    //     { label: " (Mandatory for Risk elements having RPN>4)	Residual Severity- H(3)/M(2)/L(1)", value: "11" },
    //     { label: "Residual Probability- H(3)/M(2)/L(1)", value: "12" },
    //     { label: "Residual Detectability- H(1)/M(2)/L(3)", value: "13" },
    //     { label: "	Residual RPN", value: "14" },
    //     { label: "	Risk Acceptance (Y/N)", value: "15" },
    //     { label: "Mitigation proposal (Mention either CAPA reference number, IQ, OQ or PQ)", value: "16" },
    // ];

    const rootcause = {
        label: 'Initial Attachment',
        instruction: <div></div>,
        required: false,
        columnList: [
            { id: '2.1.1', name: 'Root Cause Category', type: 'text' },
            { id: '2.1.2', name: '	Root Cause Sub-Category', type: 'text' },
            { id: '2.1.2', name: 'Probability', type: 'text' },
            { id: '2.1.2', name: 'Remark', type: 'text' },

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
    // const [signatureModal, setSignatureModal] = useState(false)
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


                    </div>

                    {form === formList[0] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="group-input">
                                    <label>Record Number</label>
                                    <input type="text" value="Jordan/CC/2024/00000001" disabled />
                                </div>
                                <div className='form-flex'>
                                    <div className="group-input">
                                        <label>Initiator</label>
                                        <input type="text" value="Amit Guru" disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Date of Initiation</label>
                                        <input type="text" value={CurrentDate()} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <div className="required"></div>
                                            Assigned To
                                        </label>
                                        <select name="assign_to">
                                            <option value="">Select a value</option>
                                            <option value="2">Shaleen Mishra</option>
                                        </select>
                                    </div>
                                    <InputDate
                                        label="Due Date"
                                        instruction="Please mention expected date of completion."
                                        isRequired="true"
                                        enableDate="future"
                                    />
                                    <div className="group-input">
                                        <label htmlFor="initiatorGroup">
                                            <div className="required"></div>
                                            Initiator Group
                                        </label>
                                        <select name="initiatorGroup" value={changeControl.initiatorGroup} onChange={(e) => setChangeControl({ initiatorGroup: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="CQA">Corporate Quality Assurance</option>
                                            <option value="QAB">Quality Assurance Bio-Pharma</option>
                                            <option value="CQC">Central Quality Control</option>
                                            <option value="Manu">Manufacturing</option>
                                            <option value="PSG">Plasma Sourcing Group</option>
                                            <option value="CS" >Central Stores</option>
                                            <option value="ITG">Information Technology Group</option>
                                            <option value="MM" >Molecular Medicine</option>
                                            <option value="CL" >Central Laboratory</option>
                                            <option value="TT" >Tech team</option>
                                            <option value="QA" > Quality Assurance</option>
                                            <option value="QM" >Quality Management</option>
                                            <option value="IA" >IT Administration</option>
                                            <option value="ACC">Accounting</option>
                                            <option value="LOG">Logistics</option>
                                            <option value="SM" >Senior Management</option>
                                            <option value="BA" >Business Administration</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>Initiator Group Code</label>
                                        <input type="text" value={changeControl.initiatorGroup} disabled />
                                    </div>

                                    <div className="group-input">
                                        <label>Initiated Through</label>
                                        <div className='instruction'>Please select related information</div>
                                        <select name="initiated_through" value={changeControl.initiatedThrough} onChange={(e) => setChangeControl({ initiatedThrough: e.target.value })}>
                                            <option value="">-- Select --</option>
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
                                        <label>
                                            {changeControl.initiatedThrough === 'others' && <div className="required"></div>}
                                            Other
                                        </label>
                                        <textarea name="w3review" required={changeControl.initiatedThrough === 'others'}></textarea>
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label>
                                        Short Description
                                    </label>
                                    <div className='instruction'>Investigation short description to be presented on desktop</div>
                                    <textarea type="text" rows="2" />
                                </div>

                                <div className="group-input">
                                    <label>Severity Level</label>
                                    <select>
                                        <option value="">-- Select --</option>
                                        <option value="">Major</option>
                                        <option value="">Minor</option>
                                        <option value="">Critical</option>
                                    </select>
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
                    ) : form === formList[2] ? (
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

                    ) : form === formList[3] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className='group-input'>
                                    <label>Root Cause Methodology</label>
                                    <MultiSelect
                                        options={rootcauseMethodology}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select" />

                                </div>

                                <div className="group-input">
                                    <Grid
                                        label={rootcause.label}
                                        required={rootcause.required}
                                        instruction={rootcause.instruction}
                                        columnList={rootcause.columnList}
                                    />
                                </div>

                                <div className="group-input">
                                    <label>Why-Why Chart<div className="instruction">(Launch Instruction)</div></label>

                                </div>
                                <table class="table table-bordered">
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
                                            <th>Why 1 &nbsp;<span>+</span></th>
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
                                    </tbody>
                                </table>

                                <div className="sub-head"></div>

                                <div className="group-input">
                                    <label>Is/Is Not Analysis<div className="instruction">(Launch Instruction)</div></label>
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
                                <div className="sub-head"></div>

                                <div className="group-input">
                                    <label>Root Cause Description</label>
                                    <textarea id="" rows="2"></textarea>
                                </div>

                                <div className="group-input">
                                    <label>Investigation Summary</label>
                                    <textarea id="" rows="2"></textarea>
                                </div>

                                <div className="sub-head">
                                    Geographic Information
                                </div>

                                <div className="form-flex">
                                    <div className="group-input">
                                        <label>Zone</label>
                                        <select name="zone" id="zone">
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="Asia">Asia</option>
                                            <option value="Europe">Europe</option>
                                            <option value="Africa">Africa</option>
                                            <option value="Central_America">Central America</option>
                                            <option value="South_America">South America</option>
                                            <option value="Oceania">Oceania</option>
                                            <option value="North_America">North America</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>Country</label>
                                        <select name="country" class="countries" id="country">
                                            <option value="">Select Country</option>

                                            <option value="Afghanistan" countryid="1">Afghanistan</option>
                                            <option value="Aland Islands" countryid="2">Aland Islands</option>
                                            <option value="Albania" countryid="3">Albania</option><option value="Algeria" countryid="4">Algeria</option><option value="American Samoa" countryid="5">American Samoa</option><option value="Andorra" countryid="6">Andorra</option><option value="Angola" countryid="7">Angola</option><option value="Anguilla" countryid="8">Anguilla</option><option value="Antarctica" countryid="9">Antarctica</option><option value="Argentina" countryid="11">Argentina</option><option value="Armenia" countryid="12">Armenia</option><option value="Aruba" countryid="13">Aruba</option><option value="Australia" countryid="14">Australia</option><option value="Austria" countryid="15">Austria</option><option value="Azerbaijan" countryid="16">Azerbaijan</option><option value="The Bahamas" countryid="17">The Bahamas</option><option value="Bahrain" countryid="18">Bahrain</option><option value="Bangladesh" countryid="19">Bangladesh</option><option value="Barbados" countryid="20">Barbados</option><option value="Belarus" countryid="21">Belarus</option><option value="Belgium" countryid="22">Belgium</option><option value="Belize" countryid="23">Belize</option><option value="Benin" countryid="24">Benin</option><option value="Bermuda" countryid="25">Bermuda</option><option value="Bhutan" countryid="26">Bhutan</option><option value="Bolivia" countryid="27">Bolivia</option><option value="Bosnia and Herzegovina" countryid="28">Bosnia and Herzegovina</option><option value="Botswana" countryid="29">Botswana</option><option value="Bouvet Island" countryid="30">Bouvet Island</option><option value="Brazil" countryid="31">Brazil</option><option value="British Indian Ocean Territory" countryid="32">British Indian Ocean Territory</option><option value="Brunei" countryid="33">Brunei</option><option value="Bulgaria" countryid="34">Bulgaria</option><option value="Burkina Faso" countryid="35">Burkina Faso</option><option value="Burundi" countryid="36">Burundi</option><option value="Cambodia" countryid="37">Cambodia</option><option value="Cameroon" countryid="38">Cameroon</option><option value="Canada" countryid="39">Canada</option><option value="Cape Verde" countryid="40">Cape Verde</option><option value="Cayman Islands" countryid="41">Cayman Islands</option><option value="Central African Republic" countryid="42">Central African Republic</option><option value="Chile" countryid="44">Chile</option><option value="China" countryid="45">China</option><option value="Christmas Island" countryid="46">Christmas Island</option><option value="Cocos (Keeling) Islands" countryid="47">Cocos (Keeling) Islands</option><option value="Colombia" countryid="48">Colombia</option><option value="Comoros" countryid="49">Comoros</option><option value="Congo" countryid="50">Congo</option><option value="Democratic Republic of the Congo" countryid="51">Democratic Republic of the Congo</option><option value="Cook Islands" countryid="52">Cook Islands</option><option value="Costa Rica" countryid="53">Costa Rica</option><option value="Croatia" countryid="55">Croatia</option><option value="Cuba" countryid="56">Cuba</option><option value="Cyprus" countryid="57">Cyprus</option><option value="Czech Republic" countryid="58">Czech Republic</option><option value="Denmark" countryid="59">Denmark</option><option value="Djibouti" countryid="60">Djibouti</option><option value="Dominica" countryid="61">Dominica</option><option value="Dominican Republic" countryid="62">Dominican Republic</option><option value="East Timor" countryid="63">East Timor</option><option value="Ecuador" countryid="64">Ecuador</option><option value="Egypt" countryid="65">Egypt</option><option value="El Salvador" countryid="66">El Salvador</option><option value="Equatorial Guinea" countryid="67">Equatorial Guinea</option><option value="Eritrea" countryid="68">Eritrea</option><option value="Estonia" countryid="69">Estonia</option><option value="Ethiopia" countryid="70">Ethiopia</option><option value="Falkland Islands" countryid="71">Falkland Islands</option><option value="Faroe Islands" countryid="72">Faroe Islands</option><option value="Fiji Islands" countryid="73">Fiji Islands</option><option value="Finland" countryid="74">Finland</option><option value="France" countryid="75">France</option><option value="French Guiana" countryid="76">French Guiana</option><option value="French Polynesia" countryid="77">French Polynesia</option><option value="French Southern Territories" countryid="78">French Southern Territories</option><option value="Gabon" countryid="79">Gabon</option><option value="Gambia The" countryid="80">Gambia The</option><option value="Georgia" countryid="81">Georgia</option><option value="Germany" countryid="82">Germany</option><option value="Ghana" countryid="83">Ghana</option><option value="Gibraltar" countryid="84">Gibraltar</option><option value="Greece" countryid="85">Greece</option><option value="Greenland" countryid="86">Greenland</option><option value="Guadeloupe" countryid="88">Guadeloupe</option><option value="Guam" countryid="89">Guam</option><option value="Guatemala" countryid="90">Guatemala</option><option value="Guernsey and Alderney" countryid="91">Guernsey and Alderney</option><option value="Guinea" countryid="92">Guinea</option><option value="Guinea-Bissau" countryid="93">Guinea-Bissau</option><option value="Guyana" countryid="94">Guyana</option><option value="Haiti" countryid="95">Haiti</option><option value="Heard Island and McDonald Islands" countryid="96">Heard Island and McDonald Islands</option><option value="Honduras" countryid="97">Honduras</option><option value="Hong Kong S.A.R." countryid="98">Hong Kong S.A.R.</option><option value="Hungary" countryid="99">Hungary</option><option value="Iceland" countryid="100">Iceland</option><option value="India" countryid="101">India</option><option value="Indonesia" countryid="102">Indonesia</option><option value="Iran" countryid="103">Iran</option><option value="Iraq" countryid="104">Iraq</option><option value="Ireland" countryid="105">Ireland</option><option value="Israel" countryid="106">Israel</option><option value="Italy" countryid="107">Italy</option><option value="Jamaica" countryid="108">Jamaica</option><option value="Japan" countryid="109">Japan</option><option value="Jersey" countryid="110">Jersey</option><option value="Jordan" countryid="111">Jordan</option><option value="Kazakhstan" countryid="112">Kazakhstan</option><option value="Kenya" countryid="113">Kenya</option><option value="Kiribati" countryid="114">Kiribati</option><option value="North Korea" countryid="115">North Korea</option><option value="South Korea" countryid="116">South Korea</option><option value="Kuwait" countryid="117">Kuwait</option><option value="Kyrgyzstan" countryid="118">Kyrgyzstan</option><option value="Laos" countryid="119">Laos</option><option value="Latvia" countryid="120">Latvia</option><option value="Lebanon" countryid="121">Lebanon</option><option value="Lesotho" countryid="122">Lesotho</option><option value="Liberia" countryid="123">Liberia</option><option value="Libya" countryid="124">Libya</option><option value="Liechtenstein" countryid="125">Liechtenstein</option><option value="Lithuania" countryid="126">Lithuania</option><option value="Luxembourg" countryid="127">Luxembourg</option><option value="Macau S.A.R." countryid="128">Macau S.A.R.</option><option value="Macedonia" countryid="129">Macedonia</option><option value="Madagascar" countryid="130">Madagascar</option><option value="Malawi" countryid="131">Malawi</option><option value="Malaysia" countryid="132">Malaysia</option><option value="Maldives" countryid="133">Maldives</option><option value="Mali" countryid="134">Mali</option><option value="Malta" countryid="135">Malta</option><option value="Man (Isle of)" countryid="136">Man (Isle of)</option><option value="Marshall Islands" countryid="137">Marshall Islands</option><option value="Martinique" countryid="138">Martinique</option><option value="Mauritania" countryid="139">Mauritania</option><option value="Mauritius" countryid="140">Mauritius</option><option value="Mayotte" countryid="141">Mayotte</option><option value="Mexico" countryid="142">Mexico</option><option value="Micronesia" countryid="143">Micronesia</option><option value="Moldova" countryid="144">Moldova</option><option value="Monaco" countryid="145">Monaco</option><option value="Mongolia" countryid="146">Mongolia</option><option value="Montenegro" countryid="147">Montenegro</option><option value="Montserrat" countryid="148">Montserrat</option><option value="Morocco" countryid="149">Morocco</option><option value="Mozambique" countryid="150">Mozambique</option><option value="Myanmar" countryid="151">Myanmar</option><option value="Namibia" countryid="152">Namibia</option><option value="Nauru" countryid="153">Nauru</option><option value="Nepal" countryid="154">Nepal</option><option value="Bonaire, Sint Eustatius and Saba" countryid="155">Bonaire, Sint Eustatius and Saba</option><option value="Netherlands" countryid="156">Netherlands</option><option value="New Caledonia" countryid="157">New Caledonia</option><option value="New Zealand" countryid="158">New Zealand</option><option value="Nicaragua" countryid="159">Nicaragua</option><option value="Niger" countryid="160">Niger</option><option value="Nigeria" countryid="161">Nigeria</option><option value="Niue" countryid="162">Niue</option><option value="Norfolk Island" countryid="163">Norfolk Island</option><option value="Northern Mariana Islands" countryid="164">Northern Mariana Islands</option><option value="Norway" countryid="165">Norway</option><option value="Oman" countryid="166">Oman</option><option value="Pakistan" countryid="167">Pakistan</option><option value="Palau" countryid="168">Palau</option><option value="Palestinian Territory Occupied" countryid="169">Palestinian Territory Occupied</option><option value="Panama" countryid="170">Panama</option><option value="Papua new Guinea" countryid="171">Papua new Guinea</option><option value="Paraguay" countryid="172">Paraguay</option><option value="Peru" countryid="173">Peru</option><option value="Philippines" countryid="174">Philippines</option><option value="Pitcairn Island" countryid="175">Pitcairn Island</option><option value="Poland" countryid="176">Poland</option><option value="Portugal" countryid="177">Portugal</option><option value="Puerto Rico" countryid="178">Puerto Rico</option><option value="Qatar" countryid="179">Qatar</option><option value="Reunion" countryid="180">Reunion</option><option value="Romania" countryid="181">Romania</option><option value="Russia" countryid="182">Russia</option><option value="Rwanda" countryid="183">Rwanda</option><option value="Saint Helena" countryid="184">Saint Helena</option><option value="Saint Kitts And Nevis" countryid="185">Saint Kitts And Nevis</option><option value="Saint Lucia" countryid="186">Saint Lucia</option><option value="Saint Pierre and Miquelon" countryid="187">Saint Pierre and Miquelon</option><option value="Saint Vincent And The Grenadines" countryid="188">Saint Vincent And The Grenadines</option><option value="Saint-Barthelemy" countryid="189">Saint-Barthelemy</option><option value="Saint-Martin (French part)" countryid="190">Saint-Martin (French part)</option><option value="Samoa" countryid="191">Samoa</option><option value="San Marino" countryid="192">San Marino</option><option value="Sao Tome and Principe" countryid="193">Sao Tome and Principe</option><option value="Saudi Arabia" countryid="194">Saudi Arabia</option><option value="Senegal" countryid="195">Senegal</option><option value="Serbia" countryid="196">Serbia</option><option value="Seychelles" countryid="197">Seychelles</option><option value="Sierra Leone" countryid="198">Sierra Leone</option><option value="Singapore" countryid="199">Singapore</option><option value="Slovakia" countryid="200">Slovakia</option><option value="Slovenia" countryid="201">Slovenia</option><option value="Solomon Islands" countryid="202">Solomon Islands</option><option value="Somalia" countryid="203">Somalia</option><option value="South Africa" countryid="204">South Africa</option><option value="South Georgia" countryid="205">South Georgia</option><option value="South Sudan" countryid="206">South Sudan</option><option value="Spain" countryid="207">Spain</option><option value="Sri Lanka" countryid="208">Sri Lanka</option><option value="Sudan" countryid="209">Sudan</option><option value="Suriname" countryid="210">Suriname</option><option value="Svalbard And Jan Mayen Islands" countryid="211">Svalbard And Jan Mayen Islands</option><option value="Swaziland" countryid="212">Swaziland</option><option value="Sweden" countryid="213">Sweden</option><option value="Switzerland" countryid="214">Switzerland</option><option value="Syria" countryid="215">Syria</option><option value="Taiwan" countryid="216">Taiwan</option><option value="Tajikistan" countryid="217">Tajikistan</option><option value="Tanzania" countryid="218">Tanzania</option><option value="Thailand" countryid="219">Thailand</option><option value="Togo" countryid="220">Togo</option><option value="Tokelau" countryid="221">Tokelau</option><option value="Trinidad And Tobago" countryid="223">Trinidad And Tobago</option><option value="Tunisia" countryid="224">Tunisia</option><option value="Turkey" countryid="225">Turkey</option><option value="Turkmenistan" countryid="226">Turkmenistan</option><option value="Turks And Caicos Islands" countryid="227">Turks And Caicos Islands</option><option value="Tuvalu" countryid="228">Tuvalu</option><option value="Uganda" countryid="229">Uganda</option><option value="Ukraine" countryid="230">Ukraine</option><option value="United Arab Emirates" countryid="231">United Arab Emirates</option><option value="United Kingdom" countryid="232">United Kingdom</option><option value="United States" countryid="233">United States</option><option value="United States Minor Outlying Islands" countryid="234">United States Minor Outlying Islands</option><option value="Uruguay" countryid="235">Uruguay</option><option value="Uzbekistan" countryid="236">Uzbekistan</option><option value="Vanuatu" countryid="237">Vanuatu</option><option value="Vatican City State (Holy See)" countryid="238">Vatican City State (Holy See)</option><option value="Venezuela" countryid="239">Venezuela</option><option value="Vietnam" countryid="240">Vietnam</option><option value="Virgin Islands (British)" countryid="241">Virgin Islands (British)</option><option value="Virgin Islands (US)" countryid="242">Virgin Islands (US)</option><option value="Wallis And Futuna Islands" countryid="243">Wallis And Futuna Islands</option><option value="Western Sahara" countryid="244">Western Sahara</option><option value="Yemen" countryid="245">Yemen</option><option value="Zambia" countryid="246">Zambia</option><option value="Zimbabwe" countryid="247">Zimbabwe</option><option value="Kosovo" countryid="248">Kosovo</option><option value="Curaçao" countryid="249">Curaçao</option><option value="Sint Maarten (Dutch part)" countryid="250">Sint Maarten (Dutch part)</option></select>
                                    </div>

                                    <div className="group-input">
                                        <label>State/District</label>
                                        <select name="city" class="cities" id="city">
                                            <option value="">--Select--</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>City</label>
                                        <select name="city" class="cities" id="city">
                                            <option value="">Select City</option>
                                        </select>
                                    </div>

                                </div>


                            </div>
                        </div>
                    ) : form === formList[4] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="activity-log-field">
                                    <div>
                                        <strong> Completed By:&nbsp;</strong>Shaleen Mishra
                                    </div>
                                    <div>
                                        <strong> Completed On:&nbsp;</strong>18 Jan, 2023 11:00 PM
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
